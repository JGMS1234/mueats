'use client';

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
	if (!large && typeof window !== 'undefined'&& window.innerWidth < 768) {
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

export function formatDate(date, format = false) {
	const months = {
		0: { long: 'January', short: 'Jan' },
		1: { long: 'February', short: 'Feb' },
		2: { long: 'March', short: 'Mar' },
		3: { long: 'April', short: 'Apr' },
		4: { long: 'May', short: 'May' },
		5: { long: 'June', short: 'Jun' },
		6: { long: 'July', short: 'Jul' },
		7: { long: 'August', short: 'Aug' },
		8: { long: 'September', short: 'Sep' },
		9: { long: 'October', short: 'Oct' },
		10: { long: 'November', short: 'Nov' },
		11: { long: 'December', short: 'Dec' },
	};
	const days = {
		0: { long: 'Sunday', short: 'Sun' },
		1: { long: 'Monday', short: 'Mon' },
		2: { long: 'Tuesday', short: 'Tue' },
		3: { long: 'Wednesday', short: 'Wed' },
		4: { long: 'Thursday', short: 'Thu' },
		5: { long: 'Friday', short: 'Fri' },
		6: { long: 'Saturday', short: 'Sat' },
	};

	if (!format) {
		return (
			date.getDate().toString() +
			' ' +
			months[date.getMonth()].short +
			' ' +
			date.getFullYear().toString()
		);
	} else {
		if (format == 'short') {
			return (
				days[date.getDay()].short +
				' ' +
				date.getDate().toString().padStart(2, '0') +
				'/' +
				(date.getMonth() + 1).toString().padStart(2, '0')
			);
		}
	}
}

export function formatTime(date, format) {
	if (format == '24-hour') {
		return `${new Date(date).getHours().toString().padStart(2, '0')}:${new Date(
			date,
		)
			.getMinutes()
			.toString()
			.padStart(2, '0')}`;
	} else {
		return new Date(date).toLocaleTimeString('en-US');
	}
}

export function formatNumber(number, type, isLarge) {
	if (isLarge) {
		return number
			.toFixed(2)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	} else {
		if (type == 'qty') {
			if (number.toString().split('.')[0].length > 12) {
				return (
					number.toString().split('.')[0].slice(0, -12) +
					'.' +
					number.toString().split('.')[0].slice(-12, -11) +
					'T'
				);
			} else if (number.toString().split('.')[0].length > 9) {
				return (
					number.toString().split('.')[0].slice(0, -9) +
					'.' +
					number.toString().split('.')[0].slice(-9, -8) +
					'B'
				);
			} else if (number.toString().split('.')[0].length > 6) {
				return (
					number.toString().split('.')[0].slice(0, -6) +
					'.' +
					number.toString().split('.')[0].slice(-6, -5) +
					'M'
				);
			} else if (number.toString().split('.')[0].length > 3) {
				return (
					number.toString().split('.')[0].slice(0, -3) +
					'.' +
					number.toString().split('.')[0].slice(-3, -2) +
					'K'
				);
			}
			return number
				.toString()
				.split('.')[0]
				.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		} else {
			if (number.toString().split('.')[0].length > 12) {
				return (
					number.toString().split('.')[0].slice(0, -12) +
					'.' +
					number.toString().split('.')[0].slice(-12, -11) +
					'T'
				);
			} else if (number.toString().split('.')[0].length > 9) {
				return (
					number.toString().split('.')[0].slice(0, -9) +
					'.' +
					number.toString().split('.')[0].slice(-9, -8) +
					'B'
				);
			} else if (number.toString().split('.')[0].length > 6) {
				return (
					number.toString().split('.')[0].slice(0, -6) +
					'.' +
					number.toString().split('.')[0].slice(-6, -5) +
					'M'
				);
			} else if (number.toString().split('.')[0].length > 3) {
				return (
					number.toString().split('.')[0].slice(0, -3) +
					'.' +
					number.toString().split('.')[0].slice(-3, -2) +
					'K'
				);
			} else {
				return number
					.toFixed(2)
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			}
		}
	}
}
