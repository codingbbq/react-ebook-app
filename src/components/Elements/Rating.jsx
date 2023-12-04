const Rating = ({rating}) => {
    let ratingArr = Array(5).fill(false);
    for(let i = 0; i < rating; i++) {
        ratingArr[i] = true;
    }
	return (
		<>
            {ratingArr.map((rating, index) => (
                <i key={index} className={`text-lg bi text-yellow-500 mr-1 ${rating ? 'bi-star-fill' : 'bi-star'}`}></i>
            ))}
		</>
	);
};

export { Rating };
