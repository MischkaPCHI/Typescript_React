import "./styles.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginContainerStyled, InputContainerStyled } from "./styled";

const LoginForm = () => {
  return (
    <LoginContainerStyled className="login-container">
      <h1 className="title">Login form</h1>
      <InputContainerStyled className="input-container">
        <Input label="Email" name="email" type="email" placeholder="Enter your email" />
        <Input label="Password" name="password" type="password" placeholder="Enter your password" />
        <Button type="button" name="Login" />
      </InputContainerStyled>
    </LoginContainerStyled>
  );
};

export default LoginForm;
