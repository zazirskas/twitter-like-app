import './RegistroVision.css';
import { useHistory } from 'react-router-dom';
import { Link as ReachLink } from "react-router-dom";
import { Button, Input, Heading } from "@chakra-ui/react";
import { useState } from 'react';
import { signUp } from '../../db/firebaseConfig';

const RegistroVision = (props) => {

  const [inputUsername, setUsername] = useState();
  const [inputSenha, setSenha] = useState();
  const [inputEmail, setEmail] = useState();

  const editaInput = (funcao, target) => {
    funcao(target);
  };

  let history = useHistory();

  const cadastroSucedido = () => {
    history.push("/login")
  };
  
  return (
    <div className='registro-container'>
      <Heading as="h1" size="lg">FAÇA SEU CADASTRO</Heading>
      <div className="registro-input">
        <label htmlFor="username-registro">Username</label>
        <Input type="text" placeholder='Insira seu usuario' id='username-registro' onChange={(e) => editaInput(setUsername, e.target.value)}/>
      </div>
      <div className="registro-input">
        <label htmlFor="email-registro">Email</label>
        <Input type="text" placeholder='Insira seu email' id='email-registro' onChange={(e) => editaInput(setEmail, e.target.value)}/>
      </div>
      <div className="registro-input">
        <label htmlFor="senha-registro">Password</label>
        <Input type="password" placeholder='Insira sua senha' id='senha-registro'onChange={(e) => editaInput(setSenha, e.target.value)}/>
      </div>
      <Button colorScheme="twitter" as={ReachLink} to='/login' variant="link">
        Já possuo cadastro
      </Button>
      <div className="button-container">
        <Button colorScheme="twitter" onClick={() => signUp(inputUsername, inputEmail, inputSenha, cadastroSucedido, console.log)}>CADASTRAR</Button>
      </div>
    </div>
  )
}

export default RegistroVision;