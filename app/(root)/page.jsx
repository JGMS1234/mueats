import { handleAuth } from '../lib/actions';

export default async function SignIn() {
	console.log(
		await handleAuth('login', { email: 'string4', password: 'str123456' }),
	);
	return <div>page</div>;
}
