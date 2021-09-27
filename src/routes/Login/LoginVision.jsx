import "./LoginVision.css";
import { useHistory } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import {
	signInWithGoogle,
	loginWithEmailAndPassword,
} from "../../db/firebaseConfig";
import { useState } from "react";
import { Button, Input, Heading } from "@chakra-ui/react";

const LoginVision = (props) => {
	const [inputLogin, setLogin] = useState();
	const [inputSenha, setSenha] = useState();

	const editaInput = (funcao, target) => {
		funcao(target);
	};

	let history = useHistory();

	const loginSucedido = () => {
		history.push("/geral");
	};

	return (
		<div className="login-container">
			<Heading as="h1" size="lg">FAÇA SEU LOGIN</Heading>
			<div className="input-container">
				<div className="login-input">
					<label htmlFor="email-login">Login</label>
					<Input
						type="text"
						placeholder="Insira seu usuario"
						id="email-login"
						onChange={(e) => editaInput(setLogin, e.target.value)}
					/>
				</div>
				<div className="login-input">
					<label htmlFor="senha-login">Password</label>
					<Input
            type="password"
						placeholder="Insira sua senha"
						id="senha-login"
						onChange={(e) => editaInput(setSenha, e.target.value)}
					/>
				</div>
			</div>
			<Button colorScheme="twitter" as={ReachLink} to="/cadastrar" variant="link">Não possuo cadastro ainda</Button>
			<div className="button-container">
				<Button colorScheme="twitter" onClick={() => signInWithGoogle(loginSucedido, console.log)}>
					ENTRAR COM GOOGLE
				</Button>
				<Button
				colorScheme="twitter"
					onClick={() =>
						loginWithEmailAndPassword(
							inputLogin,
							inputSenha,
							loginSucedido,
							console.log
						)
					}
				>
					ENTRAR
				</Button>
			</div>
		</div>
	);
};

export default LoginVision;
