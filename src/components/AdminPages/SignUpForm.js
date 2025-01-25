import React from "react";

const SignUpForm = () => {
  const containerStyle = {
    display: "flex",
    height: "100vh",
    margin: "0",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#CDF6FB",
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: "#9825FC",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    borderTopRightRadius: "100px",
    borderBottomRightRadius: "100px",
  };

  const rightStyle = {
    flex: 1,
    backgroundColor: "#e6f9ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px",
  };

  const headingStyle = {
    fontSize: "64px",
    marginBottom: "30px",
  };

  const subTextStyle = {
    fontSize: "20px",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "15px 30px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "8px",
    alignSelf: "center",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const formGroupStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    width: "100%",
  };

  const inputStyle = {
    flex: 1,
    padding: "15px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  const rightHeadingStyle = {
    fontSize: "48px",
    marginBottom: "20px",
  };

  const rightSubTextStyle = {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <h1 style={headingStyle}>LIBRARY</h1>
        <p style={subTextStyle}>Already have an account? Sign in now.</p>
        <button style={buttonStyle}>SIGN IN</button>
      </div>
      <div style={rightStyle}>
        <h2 style={rightHeadingStyle}>Sign Up</h2>
        <p style={rightSubTextStyle}>
          Please provide your information to sign up.
        </p>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <input type="text" placeholder="First Name" style={inputStyle} />
            <input type="text" placeholder="Last Name" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <input type="text" placeholder="Contact No" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <input type="text" placeholder="Username" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
