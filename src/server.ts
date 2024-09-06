import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req: Request, res: Response) => res.json({ code: 200 }));

app.listen(3000, () => console.log(`server running on http://localhost:3000`));
