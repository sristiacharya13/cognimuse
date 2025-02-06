import React from 'react'
import Navbar from './Navbar'

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
      </>
  )
}

export default Blog
