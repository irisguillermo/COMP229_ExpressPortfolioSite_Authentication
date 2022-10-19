import { render } from "ejs";
import businessModel from "../models/businessview.js";

export function showBusinessList (req, res, next){
    businessModel.find(function(err, businessCollection){
        if (err){
            console.error(err);
            res.end(err)
        }
        res.render('index',{title: 'Business List', page: 'business/businesslist', business: businessCollection});
    })
}

export function showBusinessUpdatePage(req, res, next ){
    res.render('index', {title: 'Update Business Info', page:'business/updates', business: {} });
}

export function displayBusinessUpdatePage(req, res, next){
    res.render('index',{title: 'Update Business Info', page:'business/updates', business: {} })
}

export function displayBusinessLoginPage(req, res, next){
    res.render('index',{title: 'Update Business Info', page:'business/login', business: {} })
}

export function displayBusinessEditPage(req, res, next){
    let id = req.params.id;

    businessModel.findById(id, (err, business)=> {
        if(err){
            console.error(err);
            render.end(err);
        }
        res.render('index',{title: 'Update Business Info', page:'business/updates', business: business });
    })
}



