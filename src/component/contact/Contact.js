// import React from "react";
// import { contactConfig } from "./ContactIt";
// import './contact.css';
// import Navbar from "../Navbar/Navbar";

// export default function ContactUs() {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 md:px-0 m-5 md:m-10">

//         <div className="mb-5 mt-3 ">
//           <h1 className="text-3xl md:text-4xl mb-2 md:mb-4 text-zinc-950 flex align-center">Contact Me</h1>
//           <hr className="border-t-2 my-2 mx-4 md:my-4" />
//         </div>
//         <div className="md:flex md:space-x-5 m-5 md:m-10">
//           <div className="w-full md:w-1/2 mb-5">
//             <h3 className="text-2xl py-2 md:py-4 font-semibold">Get in touch</h3>
//             <address>
//               <strong>Email:</strong>{" "}
//               <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//                 {contactConfig.YOUR_EMAIL}
//               </a>
//               <br />
//               <br />
//               {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//                 <p>
//                   <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//                 </p>
//               ) : (
//                 ""
//               )}
//             </address>
//             <p>{contactConfig.description}</p>
//           </div>
//           <div className="w-full md:w-1/2">
//             <form className="w-full">
//               <div className="mb-4">
//                 <input
//                   className="w-full p-2 border border-gray-600 rounded"
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   className="w-full p-2 border border-gray-300 rounded"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   required
//                 />
//               </div>
//               <textarea
//                 className="w-full p-2 border border-gray-300 rounded"
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 required
//               ></textarea>
//               <div className="text-center">
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   type="submit"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
import './contact.css';  // Import your Contact component CSS file
import Navbar from '../Navbar/Navbar';  // Adjust the path based on your file structure

const Contact = () => {
    return (
        <>
            <Navbar />  {/* Include the Navbar component */}
            <div className='body-container'>
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contact Patrick Endres</h2>
                    <p>If you don't want to use this form, you can email directly at <a href="mailto:patrick@alaskaphotographics.com">patrick@alaskaphotographics.com</a></p>
                    <p>Please make sure to double check your email address to ensure it is correct.</p>
                    <form>
                        <label htmlFor="name">*Name:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">*E-mail:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="message">*Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Address | Phone</h3>
                    <address>
                        AlaskaPhotoGraphics<br />
                        2923 Moose Mountain Road<br />
                        Fairbanks, AK 99709<br />
                        United States<br />
                        907.750.4065 (Work)
                    </address>
                    {/* <img src="path_to_your_image/alaska-map.png" alt="Alaska Map" /> */}
                    <p>Office hours are 8 to 5 Alaska Standard Time<br />That is -4 hours behind EST.</p>
                </div>
            </div>
            </div>
        </>
    );
};

export default Contact;
