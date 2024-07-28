import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from './utils/dbconnection.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '40mb' }));

app.get('/', (req, res) => {
    res.send('<h2>Your API is Working...</h2>');
});

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
    connect();
});

// Define Routes
import userRoute from './routes/user.js';
app.use('/api/users', userRoute);