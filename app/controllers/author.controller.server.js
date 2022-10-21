import express from "express";

import passport from "passport";

import user from '../models/user.js';

import {UserDisplayName} from '../utils/index.js';

export function displayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage')});
    }
    return res.redirect('/business-list');
}

export function processLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info){
        if(err){
            console.error(err);
            res.end(err);
        }
        if(!user){
            req.flash('loginMessage', "Authentication Error")
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/business-list');
        })

    })(req, res, next)
}