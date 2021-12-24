import { useState } from "react";
import AppRouter from "componenets/Router";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<>
			<AppRouter isLoggedIn={isLoggedIn} />
			<footer>&copy; {new Date().getFullYear()} Nyaitter</footer>
		</>
	);
}

export default App;
