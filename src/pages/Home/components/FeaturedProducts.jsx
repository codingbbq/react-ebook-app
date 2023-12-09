import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { Loader } from "../../../components";
import { getFeaturedService } from "../../../service";

const FeaturedProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const data = await getFeaturedService();
				setProducts(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<section className="my-20">
					<h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
						Featured eBooks
					</h1>
					<div className="flex flex-wrap justify-center lg:flex-row">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default FeaturedProducts;
