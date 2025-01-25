import React from "react";

const OTPForm = () => {
  const containerStyle = {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#CDF6FB"
  };

  const leftPanelStyle = {
    flex: 1,
    backgroundColor: "#CDF6FB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  };

  const rightPanelStyle = {
    flex: 1,
    backgroundColor: "#9825FC",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    color: "white",
    borderTopLeftRadius: "70px",
    borderBottomLeftRadius: "70px",
  };

  const titleStyle = {
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center"
  };

  const subtitleStyle = {
    fontSize: "24px",
    marginBottom: "30px",
    textAlign: "center"
  }

  const inputStyle = {
    width: "300px",
    padding: "18px",
    marginBottom: "30px",
    borderRadius: "12px",
    border: "2px solid #777",
    fontSize: "18px",
    boxSizing:"border-box"
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
    fontSize: "18px"
  };

    const backButtonStyle = {
    position: "absolute",
    top: "40px",
    left: "40px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "20px",
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <button style={backButtonStyle}>BACK</button>
        <div style={titleStyle}>Check your Mailbox</div>
        <p style={subtitleStyle}>Please enter the OTP to proceed</p>
        <input style={inputStyle} type="text" placeholder="OTP" />
        <button style={buttonStyle}>VERIFY</button>
      </div>
      <div style={rightPanelStyle}>
        <div style={titleStyle}>LIBRARY</div>
        <p style={{fontSize:"28px", maxWidth:"400px", textAlign:"center", lineHeight:"1.4"}}> "Your premier digital library for borrowing and reading books"</p>
      </div>
    </div>
  );
};

export default OTPForm;