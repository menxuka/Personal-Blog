const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admins');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, '/img')));

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(console.log('Connected'))
    .catch((error) => console.log(error));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'img')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});



const upload = multer({ storage: storage });
app.post('/controller/upload', upload.single('file'), (req, res) => {
    res.status(200).json('Image Uploaded')
})

app.use('/controller/auth', authRoute);
app.use('/controller/admins', adminRoute);
app.use('/controller/posts', postRoute);
app.use('/controller/categories', categoryRoute);

app.use('/', (req, res) => {
    console.log('main url');
})

app.listen('5000', () => {
    console.log('backend running');
})