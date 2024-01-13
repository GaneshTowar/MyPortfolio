import React from 'react';


const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-gray-800 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-500">Contact Me</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-blue-500">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border-b border-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-blue-500">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border-b border-blue-500" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-blue-500">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border-b border-blue-500" required></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
