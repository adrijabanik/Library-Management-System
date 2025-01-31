// import React from "react";

// const OTPForm = () => {
//   const containerStyle = {
//     display: "flex",
//     height: "100vh",
//     fontFamily: "Arial, sans-serif",
//     background: "#CDF6FB"
//   };

//   const leftPanelStyle = {
//     flex: 1,
//     backgroundColor: "#CDF6FB",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "40px",
//   };

//   const rightPanelStyle = {
//     flex: 1,
//     backgroundColor: "#9825FC",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "40px",
//     color: "white",
//     borderTopLeftRadius: "70px",
//     borderBottomLeftRadius: "70px",
//   };

//   const titleStyle = {
//     fontSize: "64px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     textAlign: "center"
//   };

//   const subtitleStyle = {
//     fontSize: "24px",
//     marginBottom: "30px",
//     textAlign: "center"
//   }

//   const inputStyle = {
//     width: "300px",
//     padding: "18px",
//     marginBottom: "30px",
//     borderRadius: "12px",
//     border: "2px solid #777",
//     fontSize: "18px",
//     boxSizing:"border-box"
//   };

//   const buttonStyle = {
//     backgroundColor: "black",
//     color: "white",
//     border: "none",
//     padding: "15px 30px",
//     borderRadius: "12px",
//     cursor: "pointer",
//     fontWeight: "bold",
//     marginTop: "20px",
//     fontSize: "18px"
//   };

//     const backButtonStyle = {
//     position: "absolute",
//     top: "40px",
//     left: "40px",
//     backgroundColor: "white",
//     border: "2px solid black",
//     borderRadius: "20px",
//     padding: "12px 24px",
//     fontSize: "18px",
//     cursor: "pointer",
//     boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={leftPanelStyle}>
//         <button style={backButtonStyle}>BACK</button>
//         <div style={titleStyle}>Check your Mailbox</div>
//         <p style={subtitleStyle}>Please enter the OTP to proceed</p>
//         <input style={inputStyle} type="text" placeholder="OTP" />
//         <button style={buttonStyle}>VERIFY</button>
//       </div>
//       <div style={rightPanelStyle}>
//         <div style={titleStyle}>LIBRARY</div>
//         <p style={{fontSize:"28px", maxWidth:"400px", textAlign:"center", lineHeight:"1.4"}}> "Your premier digital library for borrowing and reading books"</p>
//       </div>
//     </div>
//   );
// };

// export default OTPForm;

import React from "react";

const OTPForm = () => {
  return (
    <div className="flex h-screen font-sans bg-[#CDF6FB] relative">
      {/* Left Panel */}
      <div className="flex-1 bg-[#CDF6FB] flex flex-col justify-center items-center p-10 relative">
        {/* Back Button */}
        <button className="absolute top-10 left-10 bg-white border-2 border-black rounded-[20px] px-6 py-3 text-[18px] shadow-md hover:shadow-lg">
          BACK
        </button>
        <div className="text-[64px] font-bold mb-5 text-center">Check your Mailbox</div>
        <p className="text-[24px] mb-7 text-center">Please enter the OTP to proceed</p>
        <input
          className="w-[300px] p-4 mb-7 rounded-lg border-2 border-gray-500 text-[18px] box-border"
          type="text"
          placeholder="OTP"
        />
        <button className="bg-black text-white border-none px-8 py-4 rounded-lg cursor-pointer font-bold text-[18px] mt-5 hover:bg-gray-800">
          VERIFY
        </button>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#9825FC] flex flex-col justify-center items-center p-10 text-white rounded-tl-[70px] rounded-bl-[70px]">
        <div className="text-[64px] font-bold mb-5 text-center">LIBRARY</div>
        <p className="text-[28px] max-w-[400px] text-center leading-relaxed">
          "Your premier digital library for borrowing and reading books"
        </p>
      </div>
    </div>
  );
};

export default OTPForm;
