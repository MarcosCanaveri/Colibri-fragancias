import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";
import { envConfig } from "./config/env.js";

const PORT = envConfig.port;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
        process.exit(1);
    }
};

startServer();