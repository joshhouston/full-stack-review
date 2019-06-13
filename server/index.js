require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const {registerUser, loginUsers, getUser, logOut} = require('./controllers/authController');


const app = express();
let {SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json());


app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

//endpoints
app.post('/auth/register', registerUser)
app.post('/auth/login', loginUsers)
app.get('/auth/user', getUser)
app.post('/auth/logout', logOut)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})