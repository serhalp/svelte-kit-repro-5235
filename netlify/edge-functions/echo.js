export default async () =>
	console.log('hello from the edge') || new Response('hello from the edge');
