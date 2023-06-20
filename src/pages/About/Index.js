import React from 'react'
import {motion} from 'framer-motion';

const About = () => {
  
  const contacts = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'https://source.unsplash.com/random/200x200/?person',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://source.unsplash.com/random/200x200/?person',
    },
    {
      name: 'Alex Johnson',
      position: 'Designer',
      image: 'https://source.unsplash.com/random/200x200/?person',
    },
  ];


  return (
    <div>
          <div className="bg-gray-100">
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">iMeet Technology</h2>
          <div className="mt-8">
            <p className="text-gray-600">
              iMeet Technology is a leading technology company located in Mathura, Vrindavan. We
              specialize in web development, UI/UX design, and database management.
            </p>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nibh velit. Donec
              sagittis, sapien et congue ullamcorper, turpis odio ullamcorper urna, ac aliquam
              nulla tellus in dui. Nullam cursus nulla vel sem varius, vitae volutpat leo laoreet.
              Integer non condimentum magna. Suspendisse semper condimentum pulvinar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={contact.image} alt={contact.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
                  <p className="text-gray-600">{contact.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default About
