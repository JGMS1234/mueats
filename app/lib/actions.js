import axios from 'axios';
import { redirect } from 'next/navigation';
const API_BASE_URL =
	'https://fictional-chainsaw-pjp7746v6pp9f4r4-5138.app.github.dev/api';
//axios.defaults.withCredentials = true;

export async function handleShoppingCart(action, data, id) {
	try {
		if (action == 'get') {
			// Get the shopping cart data from the server
			const response = await axios.get(`${API_BASE_URL}/carts/${id}`);
			if (response.status == 200) {
				return response?.data;
			} else {
				throw new Error('Failed to fetch shopping cart data;', response);
			}
		} else if (action == 'add') {
			// Add an item to the shopping cart
			const response = await axios.post(`${API_BASE_URL}/carts`, data);
			if (response.status == 200) {
				return response.data;
			} else {
				throw new Error('Failed to add item to shopping cart');
			}
		} else if (action == 'delete') {
			// Remove an item from the shopping cart
			const response = await axios.delete(
				`${API_BASE_URL}/carts/cart-items/${id}`,
			);
			if (response.status === 200) {
				return response.data;
			} else {
				throw new Error('Failed to remove item from shopping cart');
			}
		}
	} catch (error) {
		console.error('Error handling shopping cart:', error);
	}
}

export async function handleOrders(action, data, id) {
	try {
		if (action == 'post') {
			// Create a new order
			const response = await axios.post(`${API_BASE_URL}/orders`, data);
			if (response.status === 201) {
				return response.data;
			} else {
				throw new Error('Failed to create order');
			}
		} else if (action == 'status') {
			// Fetch the status of an order
			const response = await axios.get(`${API_BASE_URL}/orders/${id}/status`);
			if (response.status === 200) {
				return response.data;
			} else {
				throw new Error('Failed to fetch order status');
			}
		} else if (action == 'get') {
			// Fetch the details of an order
			const response = await axios.get(`${API_BASE_URL}/orders/${id}`);
			if (response.status === 200) {
				return response.data;
			} else {
				throw new Error('Failed to fetch order details');
			}
		}
	} catch (error) {
		console.error('Error handling orders:', error);
	}
}

export async function handleRestaurants(action, data, id) {
	try {
		if (action == 'get-all') {
			// Get the restaurants data from the server
			const response = await axios.get(
				`${API_BASE_URL}/restaurants?Page=1&PageSize=10`,
			);
			if (response.status === 200) {
				return response.data;
			} else {
				throw new Error('Failed to fetch restaurants data');
			}
		} else if (action == 'get-one') {
			// Fetch a specific restaurant
			const response = await axios.get(`${API_BASE_URL}/restaurants/${id}`);
			if (response.status === 200) {
				return response.data;
			} else {
				throw new Error('Failed to fetch restaurant data');
			}
		} else if (action == 'post-items') {
			// Add new items to a restaurant's menu
			const response = await axios.post(
				`${API_BASE_URL}/restaurants/${id}/food-items`,
				data,
			);
			if (response.status === 201) {
				return response.data;
			} else {
				throw new Error('Failed to add items to restaurant menu');
			}
		} else if (action == 'post-restaurant') {
			// Add a new restaurant
			const response = await axios.post(`${API_BASE_URL}/restaurants`, data);
			if (response.status === 201) {
				return response.data;
			} else {
				throw new Error('Failed to add new restaurant');
			}
		}
	} catch (error) {
		console.error('Error handling restaurants:', error);
	}
}

/**
 * handles signing in, signing up, and refreshing authentication tokens for users
 * @param {string} action - the type of authentication action to perform ('login', 'signup', or 'refresh')
 * @param {JSON} data - the data to send with the authentication request ({
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "defaultAddress": "string"
} for 'signup' action, {"email": "string", "password": "string"} for 'login' action, and {"refreshToken": "string"} for 'refresh' action)
 * @returns {*} the authentication token if isWantToken is true and the login is successful or the new authentication token if the refresh is successful, or an error if any of the actions fail
 */
export async function handleAuth(action, data) {
	let isSuccessful = false;
	try {
		if (action == 'login') {
			// Log in a user
			const response = await axios.post(`${API_BASE_URL}/auth/signin`, data);
			if (response?.status == 200) {
				isSuccessful = true;
				return response?.data;
			} else {
				throw new Error('Failed to log in;', response);
			}
		} else if (action == 'signup') {
			// Register a new user
			const response = await axios.post(`${API_BASE_URL}/auth/signup`, data);
			if (response?.status == 201 || response?.status == 200) {
				console.log(response);
				return response?.data;
			} else {
				throw new Error('Failed to register user;', response);
			}
		} else if (action == 'refresh') {
			// Refresh the user's authentication token
			const response = await axios.post(`${API_BASE_URL}/auth/refresh`, data);
			if (response?.status == 200) {
				return response?.data;
			} else {
				throw new Error('Failed to refresh authentication token;', response);
			}
		}
	} catch (error) {
		console.error(error);
		return error;
	}

	if (action == 'login' && isSuccessful) {
		redirect('/home');
	}
}
