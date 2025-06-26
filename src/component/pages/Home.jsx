// import React from "react";
// import Img from "../../assets/MyImg.jpg";
// const Home = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left Content */}
//         <div className="space-y-6 animate-fade-in-up">
//           <h1 className="text-3xl md:text-4xl font-semibold text-white">I'M</h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
//             SAILAJA DAS
//           </h2>
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
//             Frontend Developer
//           </h2>
//           <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
//             View Resume
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center animate-fade-in-up">
//           <img
//             src={Img}
//             alt="Profile"
//             className="rounded-full w-60 h-60 object-cover shadow-2xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import Img from "../../assets/MyImg.jpg";
import TextChanger from "./TextChanger";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">I'M</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            SAILAJA DAS
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
           <TextChanger/>
          </h2>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            View Resume
          </button>
        </div>

        {/* Right Image with Animation */}
        <div className="flex justify-center animate-fade-in-up">
          <div className="relative group">
            {/* Optional: glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <img
              src={Img}
              alt="Profile"
              className="relative rounded-full w-60 h-60 object-cover shadow-2xl transform transition duration-500 hover:scale-105 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
