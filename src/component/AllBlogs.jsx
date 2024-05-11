import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import { RiHeartAdd2Fill } from "react-icons/ri";
import '../index.css';
import { BiSolidCategoryAlt } from "react-icons/bi";
const AllBlogs = () => {

    const [blogs, setBlogs] =  useState([]);

    useEffect(() => {
        document.title = "All Blogs";
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
        .then(data => {
            setBlogs(data.data);
            console.log(data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }, []);
    return (
        <div className="mx-auto py-0 md:py-16">
            {
                blogs.map(blog => <div className="w-3/4 text-center mx-auto">
                    <div className="flex gap-10 mb-10 p-6 bg-white shadow-md rounded-xl">
                        <div className="h-[260px] w-2/5 rounded-2xl">
                            <img src={blog.photo} className="h-full rounded-2xl object-cover" />
                        </div>
                        <div className="flex flex-col justify-evenly w-full text-left">
                            <p className="flex gap-2 items-center text-base font-semibold text-[#2a9df4]"><BiSolidCategoryAlt /> {blog.category}</p>
                            <h1 className="text-2xl font-bold">{blog.title}</h1>
                            <p className="text-base font-medium">{blog.short_description}</p>
                            <div className="flex justify-end gap-5">
                                <p className="bg-white shadow-lg text-[#ff6481] rounded-full p-3 text-lg hover:bg-[#31292d]"><RiHeartAdd2Fill /></p>
                                <button className="bg-white shadow-lg rounded-full text-sm font-semibold px-6 py-2 flex items-center gap-2 hover:bg-[#31292d] hover:text-white">View Details <FaArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllBlogs;