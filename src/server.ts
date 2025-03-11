import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/routes';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
const app = express();
import crypto from 'crypto';
app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => res.json({ code: 200 }));
app.use(router);

if (process.env.NODE_ENV === 'development') {
	dotenv.config({
		path: path.resolve(__dirname, '.env.development.local'),
	});
	app.use(morgan('dev'));
	app.listen(3000, () => console.log(`server running on http://localhost:3000`));
}

const hashPassword = (password: string) => crypto.createHash('md5').update(password).digest('hex');
const fakeData = [
	{
		username: 'hai',
		email: 'hairipi100@gmail.com',
		displayName: 'Ngọc Hải',
		password: hashPassword('cocainit'),
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];
app.post('/api/login', (req, res) => {
	const { email, password } = req.body;
	const user = fakeData.find((data) => data.email === email);
	if (!user) return res.json({ code: 404, message: 'user not found!' });
	else {
		const matchedPassword = hashPassword(password);
		if (user.password !== matchedPassword)
			return res.json({ code: 401, message: 'password not matched!' });
		else return res.json({ code: 200, message: 'login successfully' });
	}
});

// erport for deploy to vercel
export default app;
