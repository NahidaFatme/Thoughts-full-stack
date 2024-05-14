import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link} from "react-router-dom";
import bg1 from "../Images/bg1.png";
import '../index.css';
import { TfiThought } from "react-icons/tfi";
import { FaBolt } from "react-icons/fa6";
import travel from "../Images/travel.jpg";
import fashion from "../Images/fashion.jpg";
import food from "../Images/food.jpg";
import enter from "../Images/enter.jpg";
import health from "../Images/health2.jpg";
import tech from "../Images/9614596.jpg";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import newsletter from "../Images/newsletter.png";

const Banner = () => {

    const { user } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
    
    
    // get recent blogs
    useEffect(() => {
        axios.get('http://localhost:5000/blogs/recent')
        .then(res => {
            setBlogs(res.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
    

    //    adding blogs to wishliist
    const handleWishlist = (_id) => {
        const email = user.email;
        const selectedBlog = blogs.find(blog => blog._id === _id);
        if (selectedBlog) {
            const { full_description, short_description, category, title, photo } = selectedBlog;
            const wishBlog = { full_description, short_description, category, title, photo, email };
    
            // Make a POST request to add the wishlist blog to the server
            axios.post('http://localhost:5000/wishlist', wishBlog, { withCredentials: true })
                .then(response => {
                    if (response.data.insertedId) {
                        toast.success("Blog added to Wishlist");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            console.error("Blog not found");
        }
    };

    const handleSubscribe = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        if (email){
            toast.success("Thank you for subscribing to our newsletter");
            form.email.value = "";
        }
    }
    return (
        <div>
            <section className="my-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex flex-col gap-12 text-left w-full md:w-1/2">
                    <h1 className="text-4xl font-bold flex flex-col md:flex-row gap-3">What Are Your 
                        <span className="flex items-center gap-3 text-[#ff6481]">Thoughts <TfiThought /></span>
                    </h1>
                    <p className="text-lg font-medium text-justify">Step into Thoughts, where stories take flight. A place where words dance and dreams alight. With each blog post, a world unfurls. In the realm of Thoughts, imagination swirls.</p>
                    <Link to="/AllBlogs" className="bg-[#ff6481] text-lg font-semibold text-slate-100 rounded-md py-3 w-full text-center">Start Sharing</Link>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={bg1} alt="" />
                </div>
            </section>


            {/* topics */}
            <section className="">
                <p className=" text-2xl font-bold flex gap-3 justify-center">Trending Topics <FaBolt className="text-[#ff6481] mb-12" /></p>
                <div className="bg-white shadow-md w-4/5 h-full flex flex-col md:flex-row items-center justify-evenly rounded-full px-10 pt-8 pb-12 mx-auto gap-12 md:gap-0">
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={travel} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Adventure</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={fashion} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Fashion</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={food} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Food</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={enter} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Entertainment</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={health} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Health</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={tech} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Technology</p>
                    </div>
                </div>
            </section>


            {/* wishlist */}
            <section className="my-20 md:my-36">
                <p className=" text-2xl font-bold flex gap-3 justify-center">Recent Blogs<FaBolt className="text-[#ff6481] mb-12" /></p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    {
                        blogs.map(blog => <div>
                            <div className="bg-white w-full shadow-md rounded-xl">
                                <div className="h-[230px] w-full rounded-xl mb-6">
                                    <img src={blog.photo} className="h-full w-full rounded-t-xl object-cover" alt="" />
                                </div>
                                <div className="p-6 flex flex-col gap-6">
                                    <h1 className="text-2xl font-bold">{blog.title}</h1>
                                    <p className="text-[#2a9df4] text-sm font-medium text-wrap">{blog.category}</p>
                                    <p className="text-sm font-medium text-wrap">{blog.short_description}</p>
                                    <div className="text-xl font-semibold flex items-center justify-center gap-3">
                                        <p onClick={()=> handleWishlist(blog._id)}  className="text-[#ff6481] hover:text-[#31292d]"><FaHeartCirclePlus /></p>
                                        <p className="text-[#ff6481]">|</p>
                                        <Link to={`/Details/${blog._id}`} className="text-[#2a9df4] hover:text-[#31292d]"><TbListDetails /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                
            </section>

            {/* newsletter */}
            <section>
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md items-center">
                    <div className="w-full md:w-1/2 h-[250px] md:h-[500px] bg-[#d3d3ff] rounded-t-xl md:rounded-l-xl">
                        <img src={newsletter} className="w-full h-full" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-right p-3 md:p-10 flex flex-col gap-10">
                        <h1 className="text-[#6355a4] text-3xl md:text-4xl font-bold">Subscribe To Newsletter</h1>
                        <p className="text-sm font-medium text-center md:text-right">
                            Stay in the loop with our latest updates! Subscribe to our newsletter and unlock exclusive content, articles, and exciting announcements delivered straight to your inbox.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-end items-center gap-3">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
                            <button className="bg-[#6355a4] text-white text-base font-semibold px-5 py-3 rounded-md">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;