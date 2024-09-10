import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes/routes';
const app = express();
app.use(cors());

app.get('/', (req: Request, res: Response) => res.json({ code: 200 }));

app.use(router);

app.listen(3000, () => console.log(`server running on http://localhost:3000`));

export default app;
