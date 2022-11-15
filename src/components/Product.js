const Product = ({ category, description, image, price, title, rating }) => {
	const { count, rate } = rating;

	return (
		<>
			<article className="product">
				<img className="product__img" src={image} alt={title} />

				<div className="product__details">
					<h4 className="product__title">{title}</h4>
					<p className="product__price">Price: ${price}</p>
					<p className="product__rating">Rating: {rate}/5</p>
					<p className="product__desc"> {description}</p>
					<p>{category}</p>
					<button className="product__btn btn">Add to cart</button>
				</div>
			</article>
		</>
	);
};

export default Product;
