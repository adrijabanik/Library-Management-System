// import React from "react";

// const SignUpForm = () => {
//   const containerStyle = {
//     display: "flex",
//     height: "100vh",
//     margin: "0",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#CDF6FB",
//   };

//   const leftStyle = {
//     flex: 1,
//     backgroundColor: "#9825FC",
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "40px",
//     borderTopRightRadius: "100px",
//     borderBottomRightRadius: "100px",
//   };

//   const rightStyle = {
//     flex: 1,
//     backgroundColor: "#e6f9ff",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "60px",
//   };

//   const headingStyle = {
//     fontSize: "64px",
//     marginBottom: "30px",
//   };

//   const subTextStyle = {
//     fontSize: "20px",
//     marginBottom: "30px",
//   };

//   const buttonStyle = {
//     padding: "15px 30px",
//     border: "none",
//     backgroundColor: "black",
//     color: "white",
//     cursor: "pointer",
//     fontSize: "20px",
//     borderRadius: "8px",
//     alignSelf: "center",
//   };

//   const formStyle = {
//     width: "100%",
//     maxWidth: "500px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   };

//   const formGroupStyle = {
//     display: "flex",
//     gap: "20px",
//     marginBottom: "20px",
//     width: "100%",
//   };

//   const inputStyle = {
//     flex: 1,
//     padding: "15px",
//     fontSize: "16px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//   };

//   const rightHeadingStyle = {
//     fontSize: "48px",
//     marginBottom: "20px",
//   };

//   const rightSubTextStyle = {
//     fontSize: "18px",
//     marginBottom: "30px",
//     color: "#333",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={leftStyle}>
//         <h1 style={headingStyle}>LIBRARY</h1>
//         <p style={subTextStyle}>Already have an account? Sign in now.</p>
//         <button style={buttonStyle}>SIGN IN</button>
//       </div>
//       <div style={rightStyle}>
//         <h2 style={rightHeadingStyle}>Sign Up</h2>
//         <p style={rightSubTextStyle}>
//           Please provide your information to sign up.
//         </p>
//         <form style={formStyle}>
//           <div style={formGroupStyle}>
//             <input type="text" placeholder="First Name" style={inputStyle} />
//             <input type="text" placeholder="Last Name" style={inputStyle} />
//           </div>
//           <div style={formGroupStyle}>
//             <input type="text" placeholder="Contact No" style={inputStyle} />
//             <input type="email" placeholder="Email" style={inputStyle} />
//           </div>
//           <div style={formGroupStyle}>
//             <input type="text" placeholder="Username" style={inputStyle} />
//             <input type="password" placeholder="Password" style={inputStyle} />
//           </div>
//           <button type="submit" style={buttonStyle}>
//             SIGN UP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;


import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex h-screen bg-[#CDF6FB] font-sans">
      {/* Left Panel */}
      <div className="flex-1 bg-[#9825FC] text-white flex flex-col justify-center items-center p-10 rounded-tr-[100px] rounded-br-[100px]">
        <h1 className="text-[64px] mb-6 font-bold">LIBRARY</h1>
        <p className="text-[20px] mb-6 text-center">
          Already have an account? Sign in now.
        </p>
        <button className="bg-black text-white py-4 px-8 text-[20px] rounded-lg font-semibold hover:bg-gray-800">
          SIGN IN
        </button>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#e6f9ff] flex flex-col justify-center items-center p-14">
        <h2 className="text-[48px] mb-4 font-bold">Sign Up</h2>
        <p className="text-[18px] mb-8 text-gray-700 text-center">
          Please provide your information to sign up.
        </p>
        <form className="w-full max-w-[500px] flex flex-col items-center gap-6">
          <div className="flex w-full gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="flex w-full gap-6">
            <input
              type="text"
              placeholder="Contact No"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <div className="flex w-full gap-6">
            <input
              type="text"
              placeholder="Username"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 p-4 text-[16px] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-4 px-8 text-[20px] rounded-lg font-semibold hover:bg-gray-800"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
