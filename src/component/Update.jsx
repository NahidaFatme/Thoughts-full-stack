import { useEffect, useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const Update = () => {

    const [blog, setBlog] = useState([]);
    const { user } = useContext(AuthContext);
    const { _id } = blog;
    const { id } = useParams();

    useEffect(() => {
        document.title = "Update Blog";
        // Fetch blog details
        axios.get(`https://thoughts-server-zeta.vercel.app/blogs/id/${id}`, { withCredentials: true })
            .then(res => {
                setBlog(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleUpdate = event => {

        event.preventDefault();
        
        const form = event.target;

        const full_description = form.full_description.value;
        const short_description = form.short_description.value;
        const category = form.category.value;
        const title = form.title.value;
        const photo = form.photo.value;

        const updatedBlog = { title, category, short_description, full_description, photo};

        axios.put( `https://thoughts-server-zeta.vercel.app/blogs/update/${blog._id}`, updatedBlog)
        .then(data => {
            if(data.data.modifiedCount > 0){
                toast.success("Blog Updated Successfully");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return (
        <div className="mx-auto py-0 md:py-16">
            <div className="text-center mt-10 md:mt-5 mb-10">
                <h1 className="mx-auto text-[#ff6481] text-2xl md:text-4xl font-bold animate__animated animate__backInRight">Update Blogs</h1>
            </div>
            {/* form start */}
            <div className="bg-white shadow-2xl p-5 md:p-20 w-11/12 md:w-full mx-auto rounded-2xl">
                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-[40%]">
                        {/*  row 1*/}
                            <div className="flex flex-col md:flex-col mb-8">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-bold text-[#363853]">Title</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" defaultValue={blog.title} name="title"  className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label text-lg font-bold text-[#363853]">Category</label>
                                    <select className="select select-bordered w-full" defaultValue={blog.category} name="category" >
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
                                            defaultValue={blog.short_description}
                                            name="short_description"
                                            className="input input-bordered w-full resize-none"
                                            style={{ minHeight: '4rem' }}
                                        ></textarea>
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
                                        <input type="text" name="photo" defaultValue={blog.photo}  className="input input-bordered w-full" />
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
                                            defaultValue={blog.full_description}
                                            name="full_description"
                                            className="input input-bordered w-full resize-none"
                                            style={{ minHeight: '27rem' }}
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Update Blog" className="btn btn-block bg-[#ff6481]" />
                </form>
            </div>
        </div>
    );
};

export default Update;