import { useEffect } from "react";

function Button() {
	useEffect(() => {
		console.log("button is mounted");
	}, []);

	return (
		<>
			<button>hello</button>
		</>
	);
}

export default Button;
