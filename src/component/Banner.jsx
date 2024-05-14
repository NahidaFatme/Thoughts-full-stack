import { useEffect } from "react";
import bg1 from "../Images/bg1.png";
import '../index.css';
import { TfiThought } from "react-icons/tfi";
import { FaBolt } from "react-icons/fa6";
import travel from "../Images/travel.jpg";
import fashion from "../Images/fashion.jpg";
import food from "../Images/food.jpg";
import enter from "../Images/enter.jpg";
import health from "../Images/health2.jpg";
import tech from "../Images/9614596.jpg";
const Banner = () => {
    return (
        <div>
            <section className="my-16 flex items-center gap-12">
                <div className="flex flex-col gap-12 text-left w-1/2">
                    <h1 className="text-4xl font-bold flex gap-3">What Are Your 
                        <span className="flex items-center gap-3 text-[#ff6481]">Thoughts <TfiThought /></span>
                    </h1>
                    <p className="text-lg font-medium text-justify">Step into Thoughts, where stories take flight. A place where words dance and dreams alight. With each blog post, a world unfurls. In the realm of Thoughts, imagination swirls.</p>
                    <button className="bg-[#ff6481] text-lg font-semibold text-slate-100 rounded-md py-3 w-full">Start Sharing</button>
                </div>
                <div className="w-1/2">
                    <img src={bg1} alt="" />
                </div>
            </section>


            {/* topics */}
            <section className="">
                <p className=" text-2xl font-bold flex gap-3 justify-center">Trending Topics <FaBolt className="text-[#ff6481] mb-12" /></p>
                <div className="bg-white shadow-md w-4/5 h-full flex items-center justify-evenly rounded-full px-10 pt-8 pb-12 mx-auto">
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={travel} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Adventure</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={fashion} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Fashion</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={food} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Food</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={enter} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Entertainment</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={health} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Health</p>
                    </div>
                    <div className="w-20 h-20 rounded-full flex flex-col gap-3">
                        <img src={tech} className="rounded-full object-cover object-center" />
                        <p className="text-sm text-stone-500 font-semibold">Technology</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;