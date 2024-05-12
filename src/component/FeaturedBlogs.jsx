import { useEffect } from "react";

const FeaturedBlogs = () => {
    useEffect(() => {
        document.title = "Top Blogs";
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default FeaturedBlogs;