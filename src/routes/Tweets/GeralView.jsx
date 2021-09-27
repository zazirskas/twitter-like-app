// import { Box, Container, Button } from "@chakra-ui/react";
import LoggedUserBox from "../../components/LoggedUserBox";
import "./GeralView.css";
import NavBar from "../../components/NavBar";
import Tweet from "./Tweet";
import { watchAllTweets } from "../../db/firebaseConfig";
import { useEffect, useState, useContext } from 'react';
import { UserContext } from "../../App";

const GeralView = (props) => {

	const intermediaryArray = [];
	const [ tweetObj, setTweetObj ] = useState();
	const { allTweets, setAllTweets } = useContext(UserContext);

	const criaArrayTweets = (tweetObj) => {
		for (const i in tweetObj) {
			if (i !== tweetObj.length - 1) {
				intermediaryArray.push(tweetObj[i]);
			};
		};
		setAllTweets(intermediaryArray);
	};

	useEffect(() => { 
		watchAllTweets(setTweetObj);
	}, []);
	
	useEffect(() => {
		criaArrayTweets(tweetObj);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tweetObj])

	return (
		<div className="main-container">
			<LoggedUserBox />
      <div className="feed-container">
        <NavBar />
				<div className="tweets-container">
					{
						allTweets && allTweets.map((tweet, index) => {
							return <Tweet key={index} tweet={tweet}/>
						})
					}
				</div>
      </div>
		</div>
	);
};

export default GeralView;
