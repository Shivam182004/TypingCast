import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
          <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact <span className="text-indigo-600">TypingCast</span>
            </h1>
            <p className="text-gray-600 text-center mb-8">
              We'd love to hear from you! Feel free to reach out to us with any questions, feedback, or suggestions.
            </p>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <FaEnvelope className="text-indigo-500 text-2xl mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Email us at</p>
                  <a
                    href="mailto:supporttypingCast@gmail.com"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    supporttypingCast@gmail.com
                  </a>
                </div>
              </div>
    
              {/* Phone */}
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <FaPhoneAlt className="text-indigo-500 text-2xl mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="text-gray-800 font-semibold">+91 9809802211</p>
                </div>
              </div>
            </div>
    
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      );
    };
    


export default Contact