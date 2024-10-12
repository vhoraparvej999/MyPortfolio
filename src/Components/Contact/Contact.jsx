import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { Name, Email, Message } = user;

    if (!Name || !Email || !Message) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const res = await fetch(
        "https://myportfolio-b2188-default-rtdb.firebaseio.com/MyPortfolio.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Message,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      setUser({
        Name: "",
        Email: "",
        Message: "",
      });

      alert("Data Stored Successfully");
    } catch (error) {
      console.error("Error storing data: ", error);
      alert("An error occurred while storing the data");
    }
  };

  return (
    <>
      <div className="bg-black text-white py-20" id="Contact">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1">
              <h3>Let's Talk</h3>
              <p>
                I'm open to discussing web development projects or partnership
                opportunities.
              </p>
              <div className="mb-4 mt-8">
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <a
                  href="mailto:vhoraparvej999@gmail.com"
                  className="hover:underline"
                >
                  vhoraparvej999@gmail.com
                </a>
              </div>
              <div className="mb-4 mt-8">
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>+91 8460009840</span>
              </div>
              <div className="mb-4 mt-8">
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                <span>Sevalia, Kheda, Gujarat, India</span>
              </div>
            </div>
            <div className="flex-1 w-full">
              <form className="space-y-4" onSubmit={postData}>
                <div>
                  <label htmlFor="Name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    value={user.Name}
                    onChange={getUserData}
                    className="w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Email" className="block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={user.Email}
                    onChange={getUserData}
                    className="w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Message" className="block mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="Message"
                    name="Message"
                    value={user.Message}
                    onChange={getUserData}
                    className="w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    rows="5"
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white py-2 px-8 text-sm md:text-lg md:py-2 md:px-8 hover:opacity-80 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
