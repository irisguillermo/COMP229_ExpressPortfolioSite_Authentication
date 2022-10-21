import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname (fileURLToPath(import.meta.url))

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

let localStrategy = passportLocal.Strategy;

import user from './app/models/user.js';

import mongoose from 'mongoose';

import {mongoDB, Secret } from './config/config.js';

import router from './app/routes/index.route.server.js'
import businessRouter from './app/routes/business.route.server.js';
import authorRouter from './app/routes/author.route.server.js';

const app = express();

mongoose.connect(mongoDB);
const db = mongoose.connection;

db.on('open', () => console.log("MongoDB connection successful"));
db.on('error', ()=> console.log("MongoDB connection error"));



app.set('views', path.join (__dirname, '/app/views'))
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/public')));


app.use(session({
   secret: Secret,
   saveUninitialized: false,
   resave: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(user.createStrategy());

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use('/', router);
app.use('/', businessRouter);
app.use('/', authorRouter);


app.listen(3000);



