import "./SignupForm.scss";

export const SignupForm = () => {
  return (
    <div className="signup-form">
      <input
        type="email"
        id="email"
        pattern=".+@example\.com"
        size="30"
        required
      />
      <input type="text" />
    </div>
  );
};

export default SignupForm;
