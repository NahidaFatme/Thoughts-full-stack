import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import axios from "axios";

const AddBlog = () => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    useEffect(() => {
        document.title = "Add new item";
    }, []);

    const handleAddItem = event => {
        event.preventDefault();

        const creation_time = new Date().toISOString();

        const form = event.target;

        const full_description = form.full_description.value;
        const short_description = form.short_description.value;
        const category = form.category.value;
        const title = form.title.value;
        const user_name = form.user_name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const userPhoto = form.userPhoto.value;
        
        const newBlogs = {full_description,short_description, category, title, user_name, email, photo, userPhoto, creation_time}


        // fetch data using axios 
        axios.post('http://localhost:5000/blogs', newBlogs, { withCredentials: true })
          .then(data => {
            if(data.data.insertedId){
                toast.success("Blog added successfully");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="mx-auto py-0 md:py-16">
            <div className="text-center mt-10 md:mt-5 mb-10">
                <h1 className="mx-auto text-[#ff6481] text-2xl md:text-4xl font-bold animate__animated animate__backInRight">Write New Blog</h1>
            </div>
            {/* form start */}
            <div className="bg-white shadow-2xl p-5 md:p-20 w-11/12 md:w-full mx-auto rounded-2xl">
                <form onSubmit={handleAddItem}>
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-[40%]">
                        {/*  row 1*/}
                            <div className="flex flex-col md:flex-col mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold text-[#363853]">Title</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="title" placeholder="Name" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label text-lg font-bold text-[#363853]">Category</label>
                                    <select className="select select-bordered w-full" name="category">
                                        <option disabled selected>Select One</option>
                                        <option value="Technology & Gadgets">Technology & Gadgets</option>
                                        <option value="Travel & Adventure">Travel & Adventure</option>
                                        <option value="Food & Recipes">Food & Recipes</option>
                                        <option value="Health & Wellness">Health & Wellness</option>
                                        <option value="Fashion & Style">Fashion & Style</option>
                                        <option value="Entertainment & Pop Culture">Entertainment & Pop Culture</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* row 2*/}
                            <div className="md:flex mb-4">
                                <div className="form-control md:w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold text-[#363853]">Short Description</span>
                                    </label>
                                    <label className="input-group">
                                        <textarea
                                            name="short_description"
                                            placeholder="Write short description of the blog....."
                                            className="input input-bordered w-full resize-none"
                                            style={{ minHeight: '4rem' }}
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                            {/* row 5*/}
                            <div className="md:flex ">
                                {/* name */}
                                <div className="form-control md:w-1/2">
                                    <label className="input-group">
                                        <input type="hidden" name="user_name" value={user.displayName}  className="input input-bordered w-full" />
                                    </label>
                                </div>
                                {/* email */}
                                <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                    <label className="input-group">
                                        <input type="hidden" name="email" value={user.email} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                {/* photo url */}
                                <div className="form-control md:w-1/2 ml-0 md:ml-4">
                                    <label className="input-group">
                                        <input type="hidden" name="userPhoto" value={user.photoURL} className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                            {/* form Photo url row */}
                            <div className="mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold text-[#363853]">Photo URL</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            {/* row 3 */}
                            <div className="md:flex mb-8">
                                <div className="form-control md:w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold text-[#363853]">Write Full Description</span>
                                    </label>
                                    <label className="input-group">
                                        <textarea
                                            name="full_description"
                                            placeholder="Write full description of the blog....."
                                            className="input input-bordered w-full resize-none"
                                            style={{ minHeight: '27rem' }}
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Blog" className="btn btn-block bg-[#ff6481]" />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;