import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <h1 className="text-white">home page</h1>
        </div>
    );
};

export default Home;