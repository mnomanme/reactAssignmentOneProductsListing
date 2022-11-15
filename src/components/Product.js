const Product = ({ category, description, image, price, title, rating }) => {
	const { count, rate } = rating;

	return (
		<>
			<article className="product">
				<img className="product__img" src={image} alt={title} />

				<h2 className="product__title">{title.slice(0, 15)}</h2>
				<p className="product__price">
					<strong>Price:</strong> ${price}
				</p>
				<p>
					<strong>Rating:</strong>
					<span className="product__rating"> {rate}/5</span>
				</p>
				<h5 className="product__desc"> {description.slice(0, 50)}</h5>
				<p>
					<strong>Category: </strong>
					{category}
				</p>
				<button className="product__btn btn">Add to cart</button>
			</article>
		</>
	);
};

export default Product;
