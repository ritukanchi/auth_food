import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.getSession();

	if (!session) {
		// Use 302 or 303 status code
		throw redirect(307, '/auth/signin');
	}

	return {
		session
	};
};