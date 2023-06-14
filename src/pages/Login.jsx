import "../assets/css/Login.css";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Qualquer from "../assets/img/Icon.svg";

function Login() {
  return (
    <Container>
      <Image className="celular" src={Qualquer} fluid />
      <Form className="form">
        <h1 className="texto">Login</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className="textos" type="email" placeholder="E-mail" />
          <Form.Control 
            className="textos"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Senha"
          />
        </Form.Group>
        <Form.Check
        className="check_button"
        type="switch"
        id="custom-switch"
        label="Lembrar da senha"
      />
        <a href="/telaPrincipal" className="logar">Login</a>
      </Form>
    </Container>
  );
}
export default Login;
