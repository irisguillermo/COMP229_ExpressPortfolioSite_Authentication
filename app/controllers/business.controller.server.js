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