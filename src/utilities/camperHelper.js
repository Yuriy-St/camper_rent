export const localizePrice = price => {
	if (!price) {
		return;
	}

  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    useGrouping: false,
  });
};

export const getRatingText = (rating, numReviews) => {
  return `${rating}(${numReviews} Reviews)`;
};
