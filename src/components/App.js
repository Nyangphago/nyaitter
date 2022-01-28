import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
// import Button from "./button.js";

function App() {
	const [isShow, setIsShow] = useState(true);
	const [init, setInit] = useState(false);
	const [isLogged, setIsLoggedIn] = useState(false);
	// console.log(authService.currentUser);
	// setInterval(() => console.log(authService.currentUser), 2000);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(user);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<>
			{init ? <AppRouter isLoggedIn={isLogged} /> : "initializing..."}
			<footer>&copy; {new Date().getFullYear()} Nyaitter</footer>
			{/* {isShow && <Button />}
			<button onClick={() => setIsShow(!isShow)}>isShowButton</button> */}
		</>
	);
}

export default App;
