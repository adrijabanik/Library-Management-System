// import React from "react";

// const SignInForm = () => {
//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     height: "100vh",
//     fontFamily: "'Arial', sans-serif",
//     backgroundColor: "#CDF6FB",
//   };

//   const leftPanelStyle = {
//     flex: 1,
//     backgroundColor: "#CDF6FB",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "60px", 
//   };

//   const rightPanelStyle = {
//     flex: 1,
//     backgroundColor: "#9825FC",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "60px",                  
//     color: "white",
//     borderTopLeftRadius: "55px",                   
//     borderBottomLeftRadius: "55px",  
//   };

//   const titleStyle = {
//     fontSize: "72px",  
//     fontWeight: "bold",
//     marginBottom: "30px",   
//   };

//   const inputStyle = {
//     width: "95%",    
//     padding: "22.5px",     
//     margin: "22.5px 0",      
//     borderRadius: "12px",       
//     border: "3px solid #ccc",        
//     fontSize: "27px",         
//   };

//   const buttonStyle = {
//     backgroundColor: "black",
//     color: "white",
//     border: "none",
//     padding: "22.5px 45px",          
//     borderRadius: "12px",           
//     cursor: "pointer",
//     fontWeight: "bold",
//     marginTop: "30px",            
//     fontSize: "27px",             
//   };

//   const forgotPasswordStyle = {
//     fontSize: "24px",              
//     color: "#666",
//     cursor: "pointer",
//     marginTop: "22.5px",               
//   };

//   const signUpTextStyle = {
//     fontSize: "30px",                
//     marginBottom: "22.5px",                 
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={leftPanelStyle}>
//         <div style={titleStyle}>Welcome Back !!</div>
//         <p style={{ fontSize: "30px" }}>Please enter your credentials to log in</p>
//         <input style={inputStyle} type="text" placeholder="Username" />
//         <input style={inputStyle} type="password" placeholder="Password" />
//         <div style={forgotPasswordStyle}>Forgot password?</div>
//         <button style={buttonStyle}>SIGN IN</button>
//       </div>
//       <div style={rightPanelStyle}>
//         <div style={titleStyle}>LIBRARY</div>
//         <p style={signUpTextStyle}>New to our platform? Sign Up now.</p>
//         <button style={buttonStyle}>SIGN UP</button>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;

import React from "react";

const SignInForm = () => {
  return (
    <div className="flex h-screen font-sans bg-[#CDF6FB]">
      {/* Left Panel */}
      <div className="flex-1 bg-[#CDF6FB] flex flex-col justify-center items-center p-16">
        <div className="text-[72px] font-bold mb-8">Welcome Back !!</div>
        <p className="text-[30px] mb-8">Please enter your credentials to log in</p>
        <input
          className="w-[95%] p-6 mb-6 rounded-lg border-4 border-gray-300 text-[27px] box-border"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-[95%] p-6 mb-6 rounded-lg border-4 border-gray-300 text-[27px] box-border"
          type="password"
          placeholder="Password"
        />
        <div className="text-[24px] text-gray-600 cursor-pointer mt-4 hover:underline">
          Forgot password?
        </div>
        <button className="bg-black text-white px-12 py-6 rounded-lg font-bold text-[27px] mt-8 hover:bg-gray-800">
          SIGN IN
        </button>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-[#9825FC] flex flex-col justify-center items-center p-16 text-white rounded-tl-[55px] rounded-bl-[55px]">
        <div className="text-[72px] font-bold mb-8">LIBRARY</div>
        <p className="text-[30px] mb-8">New to our platform? Sign Up now.</p>
        <button className="bg-black text-white px-12 py-6 rounded-lg font-bold text-[27px] hover:bg-gray-800">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
