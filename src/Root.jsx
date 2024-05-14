import { Outlet } from "react-router-dom";
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const Root = () => {
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;