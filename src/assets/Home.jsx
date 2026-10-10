import Header from "../components/Header/Header";
import Hero from "../components/Main Context/Hero";
import Footer from "../components/Footer/Footer";

const Home = () => {
	const first = "Yuvraj";
	const last = " Garg";
	const name = first + last;

	return (
		<>
			<Header first={first} />
			<Hero name={name} />
			<Footer name={name} />
		</>
	);
};

export default Home;
