import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import 'animate.css';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
const Registration = () => {
    const { createUser, updateUserProfile, loading, setUser } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const [showpassword, setShowPassword] = useState(false);
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.URL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        else if (!/[A-Z]/.test(password)){
            toast.error("Password should contain Uppercase characters");
            return;
        }
        else if (!/[0-9]/.test(password)){
            toast.error("Password should contain  atleast one number");
            return;
        }
        else if (!/[\W_]/.test(password)){
            toast.error("Password should contain special characters");
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUserProfile(name, photoURL)
            .then( () => {
                const updatedUser = {
                    ...user,
                    displayName: name,
                    photoURL: photoURL,
                };
                setUser(updatedUser);
                toast.success("Registration successful");

            })
          })
          .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
    };
    useEffect(() => {
        document.title = "Registration";
    }, []);
    return (
        <div>
           <div className="hero min-h-screen mt-16">
                <div className="hero-content flex flex-col gap-0 md:gap-5 md:w-full">
                    <div className="text-center lg:text-center">
                        <h1 className="mx-auto pacifico text-[#ff6481] text-4xl md:text-6xl lg:text-5xl font-bold animate__animated animate__backInRight">Register Now</h1>
                        <br />
                        <h1 className="text-[#ff6481] text-base md:text-base lg:text-base font-bold animate__animated animate__backInRight">Create a new account and hop in board !
                        </h1>
                    </div>
                    <div className="card p-0 md:p-10 shrink-0 w-full md:w-[60%] h-full bg-white shadow-2xl animate__animated animate__backInUp">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="URL" placeholder="URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative flex">
                        <input 
                            type={showpassword ? "text" : "password"} 
                            name="password" 
                            placeholder="password" 
                            className="input input-bordered md:grow" required />
                        <span onClick={ () => setShowPassword(!showpassword)} className="absolute right-4 md:right-4 text-2xl top-3">
                            {
                                showpassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#ff6481] text-white text-base md:text-lg lg:text-lg">Complete Registration</button>
                        </div>
                        <br />
                        <div className="flex justify-center text-center gap-2 px-9">
                            <p>Already have and account ?
                            <Link to="/Login"className="text-sky-700 font-bold pacifico"> Login </Link>
                            </p>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Registration;