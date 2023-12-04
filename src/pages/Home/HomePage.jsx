import { useTitle } from "../../hooks/useTitle";
import Faq from "./components/Faq";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
	useTitle("React EBook App");
	return (
		<>
			<main>
				<Hero />
				<FeaturedProducts />
				<Testimonials />
				<Faq />
			</main>
		</>
	);
};

export { HomePage };
