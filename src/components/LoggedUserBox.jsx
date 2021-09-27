import { Button, Flex } from "@chakra-ui/react";
import "./LoggedUserBox.css";
import { signOut, writeNewTweet } from "./../db/firebaseConfig";
import { useHistory } from "react-router-dom";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const LoggedUserBox = (props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [tweetMessage, setTweetMessage] = useState();

	const loggedUser = JSON.parse(localStorage.loggedUser);

	const handleTweet = (e) => {
		setTweetMessage(e.target.value);
	};

	const novoTweet = () => {
		writeNewTweet(tweetMessage);
		onClose();
	};

	let history = useHistory();

	const voltaParaLogin = () => {
		history.push("/login");
	};

	const sair = () => {
		signOut(voltaParaLogin);
	};

	return (
		<div className="logged-user-container">
			<Flex className="info-box">
				<p>Usuário logado:</p>
				<p className="username">{ loggedUser.username }</p>
				<p>
				{ loggedUser.email } &nbsp;
					<Button colorScheme="twitter" variant="link" onClick={sair}>
						Sair
					</Button>
				</p>
			</Flex>
			<Button height="50px" width="100%" colorScheme="twitter" onClick={onOpen}>
				CRIAR NOVO TWEET
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Novo Tweet</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Textarea
							placeholder="Escreva seu tweet com menos de 340 caracteres..."
							h={100}
							onChange={handleTweet}
						/>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="twitter" mr={3} onClick={novoTweet}>
							POSTAR TWEET
						</Button>
						<Button variant="ghost" onClick={onClose}>
							FECHAR
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
};


export default LoggedUserBox;
