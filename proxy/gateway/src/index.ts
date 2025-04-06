import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hono!'));

if (true) {
	console.log('xd');
}

export default app;
