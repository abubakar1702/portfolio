import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-32 font-press-start text-[#58595b]">Get in touch</h1>
      <div className="flex w-full min-h-screen justify-center items-center px-2" id="contract">
        <div className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 w-full max-w-4xl p-8 rounded-xl shadow-lg md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide text-white">Contact Us</h1>
              <p className="pt-2 text-sky-100 text-sm">
                If you need any help feel free to contact us via email. You can also contact us through social
                media like Instagram and Twitter
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <ion-icon name="call" className="text-xl text-white"></ion-icon>
                <span className="text-sky-100">01853989321</span>
              </div>
              <div>
                <ion-icon name="mail" className="text-xl text-white"></ion-icon>
                <span className="text-sky-100">abubakar.akash17@gmail.com</span>
              </div>
              <div>
                <ion-icon name="location" className="text-xl text-white"></ion-icon>
                <span className="text-sky-100">Bashundhara R/A, Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="flex text-lg space-x-4 py-6">
              <div>
                <a href="https://www.instagram.com/akash2_17/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-xl text-sky-100" icon={faInstagram} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/abubakar17/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="text-xl text-sky-100" icon={faLinkedin} />
                </a>
              </div>
              <div>
                <a href="https://github.com/abubakar1702" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="text-xl text-sky-100" icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-4 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-300"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full uppercase bg-gradient-to-r from-cyan-700 to-blue-700 text-white py-2 px-6 rounded-lg hover:bg-red-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
