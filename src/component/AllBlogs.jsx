import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { RiHeartAdd2Fill } from "react-icons/ri";
import '../index.css';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaReadme } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const AllBlogs = () => {
    const { user } = useContext(AuthContext);
    const loadedBlogs = useLoaderData();
    const [blogs, setBlogs] =  useState(loadedBlogs);
    const [query, setQuery] = useState([]);
    const [wishlistBlogs, setWishlistBlogs] = useState([]);

    useEffect(() => {
        document.title = "All Blogs";
    }, []);


    const handleFilter = filter => {
        let filteredBlogs;
        if (filter === 'Health & Wellness') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
        } else if (filter === 'Technology & Gadgets') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
        } else if (filter === 'Travel & Adventure') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
        } else if (filter === 'Food & Recipes') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
        } else if (filter === 'Fashion & Style') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
        } else if (filter === 'Entertainment & Pop Culture') {
            filteredBlogs = loadedBlogs.filter(blog => blog.category === filter);
         } else if (filter === 'reset'){
             filteredBlogs = loadedBlogs; 
         }
         setBlogs(filteredBlogs);
    };


    const handleWishlist = (_id) => {
        const email = user.email;
        const selectedBlog = blogs.find(blog => blog._id === _id);
        if (selectedBlog) {
            const { full_description, short_description, category, title, photo ,  _id: blogId } = selectedBlog;
            const wishBlog = { full_description, short_description, category, title, photo, email, blogId };
    
            // Make a POST request to add the wishlist blog to the server
            axios.post('https://thoughts-server-zeta.vercel.app/wishlist', wishBlog, { withCredentials: true })
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
    

    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        axios.get(`https://thoughts-server-zeta.vercel.app/blogs/search/${search}`)
            .then(res => {
                setBlogs(res.data);
                
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleReset = () =>{
        setBlogs(loadedBlogs);
    }

    return (
        <div className="mx-auto py-0 md:py-16">
            <div className="text-center mt-10 mb-10 md:mb-16">
                <h1 className="mx-auto flex gap-4 justify-center text-[#ff6481] text-2xl md:text-4xl font-bold animate__animated animate__backInRight">Read Amazing Blogs <FaReadme /></h1>
            </div>
            {/* filter and search and reset*/}
            <div className="w-full md:w-3/4 text-center mx-auto flex flex-col-reverse md:flex-row gap-3 md:gap-0 justify-between mb-8">
                {/* filter */}
                <div className="flex">
                    <label className="label border-2 py-3 px-6 bg-[#ff6481] text-white   rounded-l-full">Filter</label>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex items-center gap-3 border-2 py-3 px-6 bg-[#ff6481]  text-white rounded-r-full">Category <FaArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-lg w-[250px]">
                            
                            <li onClick={() => handleFilter('Technology & Gadgets')} className="hover:text-[#ff6481] rounded-md p-2">Technology & Gadgets</li>
                            
                            <li onClick={() => handleFilter('Travel & Adventure')} className="hover:text-[#ff6481] rounded-md p-2">Travel & Adventure</li>
                            
                            <li onClick={() => handleFilter('Food & Recipes')} className="hover:text-[#ff6481] rounded-md">Food & Recipes</li>
                            
                            <li onClick={() => handleFilter('Health & Wellness')} className="hover:text-[#ff6481] rounded-md p-2">Health & Wellness</li>
                            
                            <li onClick={() => handleFilter('Fashion & Style')} className="hover:text-[#ff6481] rounded-md p-2">Fashion & Style</li>
                            
                            <li onClick={() => handleFilter('Entertainment & Pop Culture')} className="hover:text-[#ff6481] rounded-md p-2">Entertainment & Pop Culture</li>

                            <li onClick={() => handleFilter('reset')} className="text-[#ff6481] rounded-md p-2">reset</li>
                            
                        </ul>
                    </div>
                </div>
                {/* reset */}
                <div>
                    <button onClick={handleReset} className="flex items-center gap-3 border-2 py-3 px-10 bg-[#ff6481]  text-white rounded-full hover:bg-[#31292d]">Reset</button>
                </div>
                {/* search option */}
                <div>
                    <form onSubmit={handleSearch}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="search" placeholder="Search by title" className="grow" />
                        <button ><FaSearch /></button>
                    </label>
                    </form>
                </div>
            </div>
            {
                blogs.map(blog => <div className="w-full md:w-3/4 text-center mx-auto">
                    <div className="flex flex-col md:flex-row gap-10 mb-10 p-6 bg-white shadow-md rounded-xl">
                        <div className="h-[260px] w-full md:w-2/5 rounded-2xl">
                            <img src={blog.photo} className="h-full rounded-2xl object-cover" />
                        </div>
                        <div className="flex flex-col justify-evenly w-full text-left">
                            <p className="flex gap-2 items-center text-base font-semibold text-[#2a9df4]"><BiSolidCategoryAlt /> {blog.category}</p>
                            <h1 className="text-2xl font-bold">{blog.title}</h1>
                            <p className="text-base font-medium text-justify">{blog.short_description}</p>
                            <div className="flex justify-end gap-5 pt-8 md:pt-0">
                                <p onClick={()=> handleWishlist(blog._id)} className="bg-white shadow-lg text-[#ff6481] rounded-full p-3 text-lg hover:bg-[#31292d]"><RiHeartAdd2Fill /></p>
                                <Link to={`/Details/${blog._id}`} className="bg-white shadow-lg rounded-full text-sm font-semibold px-6 py-2 flex items-center gap-2 hover:bg-[#31292d] hover:text-white">Read Details <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllBlogs;