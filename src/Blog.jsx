import React from 'react'
import Navbar from './Navbar'

const imageUrls = [
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd368b14b8452136ee419_blog-4.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd38209bee53d2154bcec_blog-2.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd400ea9c9c96804b91a0_blog-5.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd4345fa272f3cd98b376_blog-6.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd375affdf8ce5f4dbb6d_blog-3.avif",
  "https://cdn.prod.website-files.com/67092b02e0a47e061ff6af16/670fd45e580e32b6543342a1_blog-1.avif",
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

      <div className="w-full bg-black text-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {imageUrls.map((url, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={url}
                alt={`Work ${index + 1}`}
                className="w-full h-[500px] object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      </>
  )
}

export default Blog
