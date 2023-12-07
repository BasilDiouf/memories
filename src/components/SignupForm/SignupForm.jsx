import "./SignupForm.scss";

export const SignupForm = () => {
  return (
    <div>
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
