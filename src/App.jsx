import Header from "./components/Header/Header";
import Hero from "./components/Main Context/Hero";
import Footer from "./components/Footer/Footer";

const App = () => {
	const first = "Yuvraj";
	const last = " Garg";
	const name = first + last;

	return (
		<>
			<Header first={first} />
			<Hero />
			<Footer name={name} />
		</>
	);
};

export default App;
