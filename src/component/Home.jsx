import { useEffect } from "react";
import Banner from "./Banner";
const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;