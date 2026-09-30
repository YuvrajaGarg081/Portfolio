import Header from "./components/Header/Header";
import Hero from "./components/Main Context/Hero";
import Footer from "./components/Footer/Footer";

const App = () => {
	const name = "Yuvraj Garg";

	return (
		<>
			<Header />
			<Hero />
			<Footer name={name} />
		</>
	);
};

export default App;
