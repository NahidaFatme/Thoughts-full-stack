import { useEffect } from "react";

const Wishlist = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <h1 className="text-white">home page</h1>
        </div>
    );
};

export default Wishlist;