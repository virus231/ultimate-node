import { PrismaClient } from '@prisma/client';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', async (req, res) => {
  // const posts = await db.post.findMany();
  res.json({
    message: 'Hello World'
  });
});

const port = Number(process.env.PORT ?? 8080);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${port}`);
});
