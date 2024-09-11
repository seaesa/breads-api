import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/routes';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => res.json({ code: 200 }));
app.use(router);

if (process.env.NODE_ENV === 'development') {
	dotenv.config({
		path: path.resolve(__dirname, '.env.development.local'),
	});
	app.use(morgan('dev'));
	app.listen(3000, () => console.log(`server running on http://localhost:3000`));
}
// erport for deploy to vercel
export default app;
