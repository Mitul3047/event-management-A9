
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>
                    FestiveFusion | Blog
                </title>
            </Helmet>
            <Navbar />
            <img src="https://i.ibb.co/mSjpswn/ben-white-W8-Qqn1-Pm-QH0-unsplash.jpg" className="h-[500px] w-full" alt="" />
            <div className="container mx-auto mt-5">
                <h1 className="text-4xl text-purple-500 font-semibold text-center mt-10 mb-14 ">Blog Posts</h1>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-14 w-4/5 mx-auto">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-md p-5"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {blog.title}
                            </h2>
                            <div className="flex items-center mb-3">
                                <img
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <p className="text-gray-600">Author: {blog.author}</p>
                            </div>
                            <p className="text-gray-600">
                                Date: {blog.date}
                            </p>
                            <p className="mt-3 text-gray-500">
                                {blog.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
