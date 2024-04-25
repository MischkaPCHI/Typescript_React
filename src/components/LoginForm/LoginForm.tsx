import "./styles.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const LoginForm = () => {
  return (
    <div className="login-container">
      <h1 className="title">Login form</h1>
      <div className="input-container">
        <Input label="Email" name="email" type="email" placeholder="Enter your email" />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" />
        <Button type="button" name="Login" />
      </div>
    </div>
  );
};

export default LoginForm;
