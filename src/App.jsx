import { Routes, Route } from "react-router";
import Home from "./assets/Home";
import Comimg from "./assets/coming";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/front/password-generator" element={<Comimg />} />
		</Routes>
	);
};

export default App;
