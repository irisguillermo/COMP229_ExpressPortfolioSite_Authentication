import { render } from "ejs";
import business from "../models/business.js";
import businessModel from "../models/business.js";

export function showBusinessList (req, res, next){
    businessModel.find(function(err, businessCollection){
        if (err){
            console.error(err);
            res.end(err)
        }
        res.render('index',{title: 'Business List', page: 'business/businesslist', business: businessCollection});
    })
}


export function showBusinessAddPage(req, res, next){
    res.render('index', {title: "Add Business", page: 'business/edits', business: {}});
}

export function processBusinessAddPage(req, res, next){
    let newBusiness = businessModel({
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });
    businessModel.create(newBusiness, (err, business) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/business-list')
    })
}

export function showBusinessEditPage(req, res, next){
    let id = req.params.id;

    businessModel.findById(id, (err, business) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Edit Business', page: 'business/edits', business: business});
    })
}

export function processBusinessEditPage(req, res, next){
    let id = req.params.id;

    let newBusiness = businessModel({
        _id: req.body.id,
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress
    });

    businessModel.updateOne({_id: id}, newBusiness, (err, business) => {
        if(err){
            console.error(err);
            res.end(err);
        };
        res.redirect('/business-list')
    })
}


//export function showBusinessUpdatePage(req, res, next ){
 //   res.render('index', {title: 'Update Business Info', page:'business/updates', business: {} });
//}

//export function displayBusinessUpdatePage(req, res, next){
   // res.render('index',{title: 'Update Business Info', page:'business/updates', business: {} })
//}

//export function displayBusinessLoginPage(req, res, next){
   // res.render('index',{title: 'Update Business Info', page:'business/login', business: {} })
//}

//export function displayBusinessEditPage(req, res, next){
   // let id = req.params.id;

    //businessModel.findById(id, (err, business)=> {
       // if(err){
          //  console.error(err);
          //  render.end(err);
       // }
        ///res.render('index',{title: 'Update Business Info', page:'business/updates', business: business });
    //})
//}



