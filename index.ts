import express, { Request, Response } from 'express';
import productRoutes from './route/product.route';
import connectDb from './config/db';

const app = express();

// Connect to MongoDB
connectDb();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', productRoutes);

app.get('/test', (req: Request, res: Response) => {
  res.send('Test route');
});

// Start server
app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
