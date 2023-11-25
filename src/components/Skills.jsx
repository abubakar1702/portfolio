import React from 'react';

const Skills = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-32 font-press-start text-[#58595b]">My Skills</h1>
      <div className="container mx-auto flex flex-wrap justify-center mt-8 space-x-6">
        {/* Front-end Card */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-md overflow-hidden shadow-lg mb-8">
          <img
            className="w-full h-40 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Front-end"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Front-end</div>
            <p className="text-gray-700 text-base">
              I have experience in building user interfaces using HTML, CSS, and JavaScript. I'm familiar with
              front-end libraries and frameworks like React.
            </p>
          </div>
        </div>

        {/* Back-end Card */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-md overflow-hidden shadow-lg mb-8">
          <img
            className="w-full h-40 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Back-end"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Back-end</div>
            <p className="text-gray-700 text-base">
              On the back-end, I have expertise in server-side scripting languages like Node.js. I can build
              scalable and efficient server applications.
            </p>
          </div>
        </div>
        

        {/* Other Languages Card */}
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-md overflow-hidden shadow-lg mb-8">
          <img
            className="w-full h-40 object-cover"
            src="https://via.placeholder.com/400x200"
            alt="Other Languages"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Other Languages</div>
            <p className="text-gray-700 text-base">
              Besides front-end and back-end technologies, I'm proficient in other programming languages such
              as Python, Java, and C++. I use them for various projects and problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
