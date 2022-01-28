import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// console.log(authService.currentUser);
	// setInterval(() => console.log(authService.currentUser), 2000);
	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(user);
			} else {
				setIsLoggednIn(false);
			}
			setInit(true);
		});
	}, []);

	return (
		<>
			{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
			<footer>&copy; {new Date().getFullYear()} Nyaitter</footer>
		</>
	);
}

export default App;
