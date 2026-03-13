export function formatCurrency(amount, currency, large) {
	const currencyFormat = (value) => {
		if (value === null || value === undefined || value === 0) {
			return 0;
		} else {
			return (
				currency +
				' ' +
				value
					.toFixed(2)
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
			);
		}
	};
	if (!large && window.innerWidth < 768) {
		if (amount.toString().split('.')[0].length > 12) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -12) +
				'.' +
				amount.toString().split('.')[0].slice(-12, -11) +
				'T'
			);
		} else if (amount.toString().split('.')[0].length > 9) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -9) +
				'.' +
				amount.toString().split('.')[0].slice(-9, -8) +
				'B'
			);
		} else if (amount.toString().split('.')[0].length > 6) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -6) +
				'.' +
				amount.toString().split('.')[0].slice(-6, -5) +
				'M'
			);
		} else if (amount.toString().split('.')[0].length > 3) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -3) +
				'.' +
				amount.toString().split('.')[0].slice(-3, -2) +
				'K'
			);
		}
		return amount ? currencyFormat(amount) : currencyFormat(0);
	} else {
		if (amount.toString().split('.')[0].length > 12) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -12) +
				'.' +
				amount.toString().split('.')[0].slice(-12, -11) +
				'T'
			);
		} else if (amount.toString().split('.')[0].length > 9) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -9) +
				'.' +
				amount.toString().split('.')[0].slice(-9, -8) +
				'B'
			);
		} else if (amount.toString().split('.')[0].length > 6) {
			return (
				currency +
				' ' +
				amount.toString().split('.')[0].slice(0, -6) +
				'.' +
				amount.toString().split('.')[0].slice(-6, -5) +
				'M'
			);
		} else {
			return amount ? currencyFormat(amount) : currencyFormat(0);
		}
	}
}
