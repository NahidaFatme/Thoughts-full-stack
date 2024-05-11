import { Outlet } from "react-router-dom";
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div className="w-full">
            <Outlet></Outlet>
            
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Root;