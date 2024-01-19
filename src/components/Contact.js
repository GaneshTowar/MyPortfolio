import React from 'react';
import "./Css/Project.css"

const Contact = () => {
  return (
    <div className="bg-black text-white h-fit flex items-center justify-center">
      <div className="max-w-md p-8 bg-gray-800 rounded shadow-md my-20">
        <h1 className="text-3xl font-bold mb-6 text-stroke text-white ">Contact Me</h1>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border-b border-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border-b border-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border-b text-black border-blue-500" required></textarea>
          </div>

          <button  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
        <p className='p-4'>The form submission is currently out of service</p>
      <p className='py-1 px-4'>Contact me on ganeshtowar@gmail.com</p>

      </div>
    </div>
  );
};

export default Contact;
