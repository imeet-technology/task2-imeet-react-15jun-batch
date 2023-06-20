import React from 'react'
import { FaCode, FaDesktop, FaDatabase } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gray-100">
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-center">
              <FaCode />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              We provide custom web development solutions using the latest technologies and
              frameworks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-center">
              <FaDesktop />
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Our team of designers creates stunning user interfaces and engaging user experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4 text-center">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-600">
              We offer efficient database management solutions to handle your data effectively.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="mt-8">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh velit. Donec
            sagittis, sapien et congue ullamcorper, turpis odio ullamcorper urna, ac aliquam
            nulla tellus in dui. Nullam cursus nulla vel sem varius, vitae volutpat leo laoreet.
            Integer non condimentum magna. Suspendisse semper condimentum pulvinar.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              We have a team of experienced web developers who can build robust and scalable web
              applications.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Our designers have expertise in creating intuitive and visually appealing user
              interfaces.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-600">
              We can efficiently manage and optimize databases to ensure smooth data operations.
            </p>
          </div>
        </div>
      </div>
    </section>

   
  </div>
  )
}

export default Home
