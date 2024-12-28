// import React, { useState } from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// // import { OrbitControls } from "@react-three/drei";
// import Nav from "./Nav.js";
// // import { useNavigate } from "react-router-dom";
// import Character from "./Character.js";
// import "../css/Home.css";
// import Footer from "./Footer.js";
// const Home = () => {
//   const navigate = useNavigate();
//   const [currentAnimation, setCurrentAnimation] = useState("Idle");
//   const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
//   const [showModal, setShowModal] = useState(true); // Show modal by default

//   const handleNameChange = (e) => {
//     setChatbotName(e.target.value); // Update the chatbot name state
//   };

//   const handleNameSubmit = () => {
//     if (chatbotName.trim() !== "") {
//       setShowModal(false); // Close the modal once the name is submitted
//     } else {
//       alert("Please enter a valid name!");
//     }
//   };


//   return (
//     <>

//       <Nav chatbotName={chatbotName || "Chatbot"} /> {/* Pass chatbot name to Nav */}

//       {showModal && (
//         <div
//           className="modal-overlay"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             className="modal-content"
//             style={{
//               backgroundColor: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               textAlign: "center",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <h2 style={{ marginBottom: "10px" }}>Enter Your Chatbot's Name</h2>
//             <input
//               type="text"
//               placeholder="Chatbot Name"
//               value={chatbotName}
//               onChange={handleNameChange}
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 width: "80%",
//                 marginBottom: "10px",
//               }}
//             />
//             <br />
//             <button
//               onClick={handleNameSubmit}
//               style={{
//                 padding: "10px 15px",
//                 fontSize: "1rem",
//                 backgroundColor: "#FF5733",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//         {/* Welcome Section */}
//         <motion.h1
//           style={{ textAlign: "center", marginTop: "20px", color: "black" }}
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to Our Support Platform! 💡
//         </motion.h1>


            

//             {/* Cards Section */}
//         <div className="card-container">
//           <div
//             className="banner"
//             style={{
//               marginTop: "720px",
//               paddingTop: "20px",
//             }}
//           >
//             <div className="slider" style={{ "--quantity": 4 }}>
//               <a href="/chatbot" className="item" style={{ "--position": 1 }}>
//                 <div className="card">
//                   <img src="/images/Chatbot.jpg" alt="Chatbot" className="card-image" height= "30px" width="6px" />
//                   <div className="card-content">
//                     <h3>Chatbot</h3>
//                     <p>Interact with our advanced chatbot for your queries.</p>
//                   </div>
//                 </div>
//               </a>
//               <a href="/personal-assistant" className="item" style={{ "--position": 2 }}>
//                 <div className="card">
//                   <img src="images/personlassistant.jpg" alt="Personal Assistant" className="card-image" height="30px" width="6px" />
//                   <div className="card-content">
//                     <h3>Personal Assistance</h3>
//                     <p>Get personalized assistance for your needs.</p>
//                   </div>
//                 </div>
//               </a>
//               <a href="/consultancy" className="item" style={{ "--position": 3 }}>
//                 <div className="card">
//                   <img src="images/consultancy.jpg" alt="Personal Guidance" className="card-image"  height="30px" width="6px"/>
//                   <div className="card-content">
//                     <h3>Personal Guidance</h3>
//                     <p>Receive expert guidance for your personal growth.</p>
//                   </div>
//                 </div>
//               </a>
//               <a href="/tasksDone" className="item" style={{ "--position": 4 }}>
//                 <div className="card">
//                   <img src="images/Todo.webp" alt="Todo Tracker" className="card-image" height= "30px" width="6px" />
//                   <div className="card-content">
//                     <h3>Todo-Tracker</h3>
//                     <p>Organize your tasks and stay on top of your to-do list.</p>
//                   </div>
//                 </div>
//               </a>
//             </div>

//     {/* SAHAYA Header */}
//     <div className="content">
//       <h1
//         data-content="SAHAYA"
//         style={{
//           color: "White",
//           marginTop: "20px",
//           display: "flex",
//         }}
//       >
//         {['S', 'A', 'H', 'A', 'Y', 'A'].map((letter, index) => (
//           <span
//             key={index}
//             style={{
//               opacity: 0, // Initial opacity for fade-in effect
//               animation: `shine 2s ${index * 0.3}s forwards, colorChange 1.5s ${index * 0.3}s infinite`, // Animation for shine and color change
//             }}
//           >
//             {letter}
//           </span>
//         ))}
//       </h1>
//       <div className="author">
//         {/* <h2>Sahaya</h2> */}
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Emoji Section */}

//       <div style={{ textAlign: "center", marginBottom: "80px", margin: "20px" }}>
//   <h2 style={{ marginBottom: "40px", color: "Black" ,fontsize:"300px"}}>Express Your Feelings</h2>
//   <motion.div
//     style={{
//       fontSize: "3rem", // Increased font size for larger icons
//       display: "flex",
//       justifyContent: "center",
//       gap: "20px", // Adjust gap between icons if necessary
//     }}
//     initial={{ scale: 0.8 }}
//     animate={{ scale: 1 }}
//     transition={{ duration: 0.5 }}
//   >
//  <img
//           src="/images/notes.jpg"
//           alt="Notepad"
//           title="Notepad"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => navigate("/notes")}
//         />
//         <img
//           src="/images/scribble.png"
//           alt="Scribble Pad"
//           title="Scribble Pad"
//           style={{ width: "50px", height: "50px", cursor: "pointer" }}
//           onClick={() => navigate("/scribblepad")}
//         />
//     <FaRobot
//       style={{ color: "gray", cursor: "pointer" }}
//       title="Need Help"
//       onClick={() => setCurrentAnimation("Help")}
//     />
//     <FaHandshake
//       style={{ color: "green", cursor: "pointer" }}
//       title="Professional Help"
//       onClick={() => setCurrentAnimation("Handshake")}
//     />
//   </motion.div>
// </div>


//       {/* Feedback Link */}
//       <Link
//         className="feedback-link"
//         to="/Feedback"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           backgroundColor: "#FF5733",
//           color: "white",
//           padding: "10px 15px",
//           borderRadius: "30px",
//           textDecoration: "none",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           cursor: "pointer",
//         }}
//       >
//         Feedback
//       </Link>

//       <Footer />
//     </>
//   );
// };

// export default Home;












