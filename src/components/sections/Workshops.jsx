import React from 'react'

const Workshops = ({isActive}) => {
  return (
     <div
      className={`h-screen flex items-center justify-center transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-white text-5xl">Section 1</h1>
    </div>
  )
}

export default Workshops