import "../style/SecureLogin.css"; // Import CSS for SecureLogin

const SecureLogin = () => {
  return (
    <section className="secure-login-section">
      {" "}
      {/* Secure login section container */}
      <h2>Login</h2> {/* Section heading */}
      <form className="login-form">
        {" "}
        {/* Login form */}
        <input type="text" placeholder="Username" required />{" "}
        {/* Username input */}
        <input type="password" placeholder="Password" required />{" "}
        {/* Password input */}
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>{" "}
        {/* Forgot password link */}
        <button type="submit">Login</button> {/* Login button */}
      </form>
    </section>
  );
};

export default SecureLogin; // Export SecureLogin component
