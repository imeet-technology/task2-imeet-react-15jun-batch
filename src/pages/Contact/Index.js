import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 mx-4">
              <div className="flex items-center mb-6">
                <FaPhone className="text-2xl text-gray-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-2xl text-gray-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-gray-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Location</h3>
                  <p className="text-gray-600">123 Street, Mathura, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md w-full md:w-1/2 mx-4">
              <iframe
                title="Mathura Map"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.200832767862!2d77.66796031509628!3d27.497110233063548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397476c246f86e8f%3A0x663d8efb47f8a7e5!2sMathura%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2s!4v1625265902925!5m2!1sen!2s"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
        </div>
  )
}

export default Contact
