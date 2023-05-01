import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'


const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(cors())


const CONNECTION_URL = 'mongodb+srv://sainihimanshu1999:25december1999@cluster0.vhb34sa.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on the port: ${PORT}`)))
    .catch((error)=> console.log(error))


