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

export function showBusinessUpdatePage(req, res, next){
    let id = req.params.id;

    businessModel.findById(id, (err, business) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Update Business', page: 'business/updatepage', business: business});
    })
}

export function processBusinessUpdatePage(req, res, next){
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

export function ProcessBusinessDelete(req, res, next){
    let id = req.params.id;

    businessModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    })
}

