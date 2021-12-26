/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ query }) {
	const all = {};
	for (const [key, value] of query.entries()) {
		all[key] = value;
	}

	return {
		body: { query: all }
	};
}
