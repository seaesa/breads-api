import express from 'express';
import cors from 'cors';
import router from './routes/routes';
const app = express();
app.use(cors());
app.use(router);

app.listen(3000, () => console.log(`server running on http://localhost:3000`));

export default app;
