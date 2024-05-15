import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';
import 'animate.css'
const Login = () => {
    const { loginUser, loginGoogle, loading } = useContext(AuthContext);
    const [submitting, setSubmitting] = useState(false);
    if (loading || submitting) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Login successful");
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error("Invalid email or password");
            navigate(location?.state ? location.state : './')
          })
          .finally(() => {
            setSubmitting(false); // Stop loading
        });
    };

    const handleSigninGoogle = () => {
        loginGoogle(provider)
        .then(result => {
            const user = result.user;
            navigate(location?.state ? location.state : './')
            toast.success("Signed in with Google");
            
        })
        .catch(error => {
            const errorMessage = error.message;
            toast.error(errorMessage);
        });
    };

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (
        <div className="bg">
           <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-5 w-full">
                    <div className="text-center lg:text-center">
                        <h1 className="mx-auto  text-[#ff6481] text-3xl md:text-5xl lg:text-4xl font-bold animate__animated animate__backInRight">Login now!</h1>
                        <br />
                        <h1 className="text-base md:text-base lg:text-base font-bold animate__animated animate__backInRight">Don't have an account ? 
                        <Link to="/Registration" className="text-[#ff6481] text-base md:text-base lg:text-base pl-4 btn bg-transparent border-none hover:bg-transparent hover:text-red-600 text-bold pacifico">
                        Register Here!
                        </Link>
                        </h1>
                    </div>
                    <div className="card p-0 md:p-10 shrink-0 w-full md:w-[60%] h-full shadow-2xl bg-white animate__animated animate__backInUp">
                    <form onSubmit={handleLogin} className="card-body">
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#ff6481] text-lg  text-white">Login</button>
                        </div>
                        <br />
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p>or signin with</p>
                            <div className="flex gap-3 text-4xl">
                                <button onClick={handleSigninGoogle}><FcGoogle /></button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Login;