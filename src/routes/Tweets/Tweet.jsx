import "./Tweet.css";
import { StarIcon, DeleteIcon, ChatIcon } from "@chakra-ui/icons";
import { removeTweet, updateUsersFavorited } from "../../db/firebaseConfig";

const Tweet = (props) => {
	const { tweet } = props;
	const {
		author: { username },
		date,
		message,
		key,
		usersFavorited,
	} = tweet;

	const loggedUser = JSON.parse(localStorage.loggedUser);

	const deletaTweet = () => {
		removeTweet(key);
	};

	const favoritaTweet = () => {
		if (!usersFavorited) {
			updateUsersFavorited(key, [loggedUser.username]);
		} else if (!usersFavorited.includes(loggedUser.username)) {
			const novoUsuariosFavoritados = [...usersFavorited, loggedUser.username];
			updateUsersFavorited(key, novoUsuariosFavoritados);
		}  else if (usersFavorited.includes(loggedUser.username)) {
      const novoUsuariosFavoritados = [...usersFavorited];
			const itemDeletar = novoUsuariosFavoritados.findIndex(
        (item) => item === loggedUser.username
        );
        novoUsuariosFavoritados.splice(itemDeletar, 1);
        updateUsersFavorited(key, novoUsuariosFavoritados);
    };
	};

	return (
		<div className="tweet">
			<div className="upper-tweet-body">
				<div className="left-upper-tweet-body">
					<p>@{username}</p>
					<p>{message}</p>
				</div>
				<div className="right-upper-tweet-body">
					{date.day + "/" + date.month + "/" + date.year}
				</div>
			</div>
			<div className="tweet-actions">
				<div className="icon-container">
					<StarIcon cursor="pointer" onClick={favoritaTweet} />
					&nbsp; {usersFavorited ? usersFavorited.length : 0}
				</div>
				<ChatIcon cursor="pointer" />
				<DeleteIcon cursor="pointer" onClick={deletaTweet} />
			</div>
		</div>
	);
};

export default Tweet;
