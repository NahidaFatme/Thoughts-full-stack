import { useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLoaderData } from "react-router-dom";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { GoComment } from "react-icons/go";
import '../index.css';
const Details = () => {
    const { user } = useContext(AuthContext);
    const loadedBlogs = useLoaderData();
    useEffect(() => {
        document.title = "Details";
    }, []);

    const handleSubmitComment = e => {
        e.preventDefault();
        const form = e.target;

        const comment = form.comment.value;
        const commenter_name = user.name;
        const commenter_photo = user.photoURL;
        const blogId = loadedBlogs._id;

        const Onecomment = {comment,commenter_name, commenter_photo, blogId};

        axios.post('http://localhost:5000/comments', Onecomment)
          .then(data => {
            if(data.data.insertedId){
                toast.success("Comment added");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        form.comment.value = '';
    }
    return (
        <div className="mx-auto py-0 md:py-16">
            <div className="bg-white h-full shadow-md rounded-3xl flex flex-col gap-8">
                <div className="flex flex-col gap-8 p-10">
                    {/* user info */}
                    <div className="flex justify-end items-center gap-4">
                        <p className="text-xl font-semibold">
                            <span className="italic text-lg text-gray-500 p-2">Author :</span>
                            {loadedBlogs.user_name}</p>
                        <img src={loadedBlogs.userPhoto} className="w-12 h-12 rounded-full border-4 border-red-400" />
                    </div>
                    {/* photo */}
                    <div className="w-full h-[550px]">
                        <img src={loadedBlogs.photo} className="w-full h-full rounded-2xl object-cover object-center" />
                    </div>
                    {/* blog details */}
                    <div className="pt-8">
                        <div className="flex flex-col gap-16 text-left text-lg font-semibold">
                            <div className="flex justify-between">
                                <h1 className="text-4xl font-bold text-[#2a9df4]">{loadedBlogs.title}</h1>
                                <p className="italic text-base font-semibold text-white bg-[#ff6481] rounded-full py-2 px-6">{loadedBlogs.category}</p>
                            </div>
                            <p className="italic font-semibold text-gray-500">{loadedBlogs.short_description}</p>
                            <p className="text-justify font-normal"><span  className="text-[#ff6481] font-semibold pr-4">Description:</span>{loadedBlogs.full_description}</p>
                        </div>
                    </div>
                </div>
                {/* User comment */}
                {
                    loadedBlogs.email !== user?.email ? <form onSubmit={handleSubmitComment}>
                        <div className="border-2 border-t-red-400 p-10 w-full">
                            <div className="flex gap-5 justify-start">
                                <textarea  name="comment" placeholder="Write a commnet" className="textarea textarea-bordered textarea-lg w-full max-w-full" ></textarea>
                                <button  className="text-6xl text-[#ff6481] hover:text-[#31292d] rounded-full"><IoArrowRedoCircleSharp/></button>
                            </div>
                        </div>
                    </form>
                :
                    <div className="flex justify-between border-2 border-t-red-400 p-10 w-full">
                        <p className="flex items-center gap-3 bg-white shadow-lg border-2 border-red-400 rounded-full w-1/3  text-red-400 text-xl font-semibold px-6 py-4"> <ImCross /> Can not comment on own blog</p>
                        <button className="flex items-center gap-2 text-xl font-semibold"><FaEdit /> Edit Blog</button>
                    </div>
                }
                <div>
                    <div>
                        <p className="text-3xl font-extrabold flex justify-center items-center gap-2">Comments <GoComment /></p>
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;