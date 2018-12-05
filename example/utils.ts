function capitalize(str: string): string {
	const strArr = str.split('');
	return strArr
		.map((s, i) => {
			if (i == 0) return s.toUpperCase();
			else return s.toLowerCase();
		})
		.join('');
}

export default {
	capitalize
};
