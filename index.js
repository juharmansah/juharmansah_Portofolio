import express from "express";
import routes from "./routes/routes.js";
import path from "path";
import { fileURLToPath } from "url";

// Untuk mendukung __dirname di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Setup static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create routes
app.use('/', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// //Setiap kali kamu membuat perubahan pada aplikasi dan ingin memperbarui versi yang di-hosting di Vercel, 
// cukup jalankan perintah:

// vercel --prod