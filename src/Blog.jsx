import React from "react";
import Navbar from "./Navbar";
import { Calendar, Clock } from "lucide-react"; // Importing icons

const blogPosts = [
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd368b14b8452136ee419_blog-4.avif",
    title: "UNDERSTANDING WEBFLOW CMS",
    date: "October 1, 2023",
    readTime: "5 min read",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd38209bee53d2154bcec_blog-2.avif",
    title: "SEO STRATEGIES FOR 2024",
    date: "October 3, 2023",
    readTime: "3 min read",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd400ea9c9c96804b91a0_blog-5.avif",
    title: "CONTENT MARKETING STRATEGIES",
    date: "October 6, 2023",
    readTime: "3 min read",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd4345fa272f3cd98b376_blog-6.avif",
    title: "SOCIAL MEDIA MARKETING TIPS",
    date: "October 4, 2023",
    readTime: "5 min read",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd375affdf8ce5f4dbb6d_blog-3.avif",
    title: "BUILDING ONLINE COMMUNITY",
    date: "October 8, 2023",
    readTime: "5 min read",
  },
  {
    imageUrl: "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd45e580e32b6543342a1_blog-1.avif",
    title: "BEST PRACTICES FOR BLOGGING",
    date: " October 2, 2023",
    readTime: "4 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <div className="flex items-center justify-center min-h-[85vh] bg-black">
        <span className="text-[15vw] font-bold text-white uppercase leading-none">
          ARTICLES
        </span>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-black text-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="relative overflow-hidden group">
              {/* Blog Image */}
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[500px] object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="text-white">
                  <p className="text-sm opacity-80 flex items-center gap-2">
                    <Calendar size={16} /> {post.date} &nbsp;  
                    <Clock size={16} /> {post.readTime}
                  </p>
                  <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
                  <a
                    href="#"
                    className="font-semibold relative overflow-hidden hover:text-white transition-colors 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                    hover:after:w-full after:transition-all after:duration-300"
                    >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
