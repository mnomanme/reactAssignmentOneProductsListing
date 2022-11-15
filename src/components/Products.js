import Product from './Product';

export const Products = ({ products }) => {
	console.table(products);
	return (
		<>
			<section className="products">
				{products.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</section>
		</>
	);
};
