import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaDesktop, FaDatabase } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
       <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Company Name</h3>
          <p className="text-gray-500">123 Street, City, Country</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-gray-400">
            <FaCode />
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            <FaDesktop />
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            <FaDatabase />
          </Link>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
