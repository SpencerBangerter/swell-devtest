const getAllReviews = () => {
	fetch('/api/reviews/all')
		.then((response) => response.json())
		.then((data) => {
			// Handle the response data here
			console.log(data);
		})
		.catch((error) => {
			// Handle any errors that occur during the request
			console.error('Error:', error);
		});
};

export default getAllReviews;
