import React from "react";

const ForgotPasswordForm = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#CDF6FB"
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#9825FC",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0 55px 55px 0",
          textAlign: "center",
          padding: "70px", 
        }}
      >
        <h1 style={{ fontSize: "72px", marginBottom: "40px" }}>LIBRARY</h1> 
        <p style={{ fontSize: "28px", maxWidth: "450px", lineHeight:"1.4" }}> 
          "Your premier digital library for borrowing and reading books"
        </p>
      </div>

      {/* Right Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#E0F7FA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px", 
          position: "relative",
        }}
      >
        {/* Back Button */}
        <button
          style={{
            position: "absolute",
            top: "40px", 
            right: "40px", 
            backgroundColor: "white",
            border: "2px solid black",
            borderRadius: "20px",
            padding: "12px 24px", 
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          BACK
        </button>

        {/* Form */}
        <div style={{ textAlign: "center", width: "450px" }}> 
          <h2 style={{ fontSize: "56px", marginBottom: "40px" }}> 
            Forgot Password
          </h2>
          <p style={{ fontSize: "26px", marginBottom: "40px", lineHeight:"1.4" }}> 
            Please enter your username
          </p>
          <input
            type="text"
            placeholder="Username"
            style={{
              padding: "20px", 
              marginBottom: "40px", 
              borderRadius: "10px",
              border: "1px solid #ccc",
              width: "100%",
              fontSize: "22px", 
               boxSizing:"border-box"
            }}
          />
          <br />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "20px 40px", 
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
              fontSize: "22px",
            }}
          >
            RESET PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;