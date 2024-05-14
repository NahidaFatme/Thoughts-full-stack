import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import axios from "axios";
import '../index.css';

const Wishlist = () => {
    const { user } = useContext(AuthContext);
    const [wishlistblogs, setWishlistblogs] = useState([]);
    
    useEffect(() => {
        document.title = "Wishlist";
        axios.get('http://localhost:5000/wishlist', { withCredentials: true })
            .then(res => setWishlistblogs(res.data))
            .catch(error => console.error('Fetch wishlist error', error));
    }, []);

    

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/wishlist/delete/${_id}`, { withCredentials: true })
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                        const remaining = wishlistblogs.filter(wishlistblog => wishlistblog._id !== _id);
                        setWishlistblogs(remaining);
                    })

            }
        })
    }
    return (
        <div className="mx-auto py-0 md:py-16">
            <div className="text-center mt-10 mb-10 md:mb-16">
                <h1 className="mx-auto flex gap-4 justify-center text-[#ff6481] text-2xl md:text-4xl font-bold animate__animated animate__backInRight">Blogs on Wishlist</h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {
                wishlistblogs.map(wishlistblog => <div className="">
                    <div className="bg-white w-full shadow-md rounded-xl">
                        <div className="h-[230px] w-full rounded-xl mb-6">
                            <img src={wishlistblog.photo} className="h-full w-full rounded-t-xl object-cover" alt="" />
                        </div>
                        <div className="p-6 flex flex-col gap-6">
                            <h1 className="text-2xl font-bold">{wishlistblog.title}</h1>
                            <p className="text-[#2a9df4] text-sm font-medium text-wrap">{wishlistblog.category}</p>
                            <p className="text-sm font-medium text-wrap">{wishlistblog.short_description}</p>
                            <div className="text-xl font-semibold flex items-center justify-center gap-3">
                                <p  onClick={() => handleDelete(wishlistblog._id)} className="text-[#ff6481] hover:text-[#31292d]"><RiDeleteBin5Fill /></p>
                                <p className="text-[#ff6481]">|</p>
                                <p className="text-[#2a9df4] hover:text-[#31292d]"><TbListDetails /></p>
                            </div>
                            {/* Add an empty flex item to stretch and fill the remaining space */}
                            <div className="flex-grow"></div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Wishlist;