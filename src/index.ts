import { Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

const _routes = app
	// Provided for demonstration purposes only.
	.get('/api', (c) => {
		return c.text('Hello World!');
	});

export default app;
