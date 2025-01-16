import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import { app } from './app.js'


dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 5000

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on http://localhost:${PORT}`);
    });

    app.on("error", (err) => {
      console.error("listening error: ", err);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });


