import { FaHotel } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { TfiThought } from "react-icons/tfi";
const Footer = () => {
    return (
        <div className="pt-40">
            <div className="relative pacifico bg-[#ff6481] glass text-white rounded-xl">
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <a
                    href="/"
                    aria-label="Go home"
                    title="Company"
                    className="inline-flex items-center justify-start"
                    >
                    <TfiThought className="text-3xl text-[#31292d]"/>
                    <span className="text-[#31292d] ml-2 text-3xl font-bold tracking-wide text-black-100">
                        Thoughts
                    </span>
                    </a>
                    <div className="mt-4 lg:max-w-sm text-center lg:text-left">
                    <p className="text-sm text-deep-purple-50">
                        Welcome to Thoughts, where ideas flourish and words ignite. Explore a diverse array of captivating blogs, fueling your curiosity and inspiring your imagination. Dive into thought-provoking content, curated to spark conversations and foster connections. 
                    </p>
                    <p className="mt-4 text-sm text-deep-purple-50">
                        Step into the world of Thoughts, where ideas take flight and words come alive. Immerse yourself in a captivating collection of blogs, each a portal to new realms of thought and inspiration.
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 text-left">
                    <div>
                    <p className="font-semibold text-xl tracking-wide text-teal-accent-400">
                        Category
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Technology & Gadgets
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Travel & Adventure
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Food & Recipes
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Health & Wellness
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Fashion & Style
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Entertainment & Pop Culture
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="text-xl font-semibold tracking-wide text-teal-accent-400">
                        Contact
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            +021468465

                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            thoughts@gmail.com
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="text-xl font-semibold tracking-wide text-teal-accent-400">
                        Office
                    </p>
                    <ul className="mt-2 space-y-2">
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Dhaka
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Barishal
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Chottogram
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Shylhet
                        </a>
                        </li>
                        <li>
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            Rajshahi
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <p className="text-xl font-semibold tracking-wide text-teal-accent-400">
                        Social Links
                    </p>
                    <ul className="mt-2 space-y-2 text-4xl">
                        <li className="">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaFacebookSquare />
                        </a>
                        </li>
                        <li className="">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaInstagramSquare />
                        </a>
                        </li>
                        <li className="">
                        <a
                            href="/"
                            className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                        >
                            <FaLinkedin />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                <p className="text-sm text-black-100">
                    © Copyright 2024 Thoughts Inc. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-black">
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;