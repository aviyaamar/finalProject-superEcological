const Category = require('../models/categoriesModel')

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).send({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

exports.create = (req, res) => {
    console.log(req.body);
    const category = new Category(req.body);
   
    category.save((err, data) => {
        if (err) {
            return res.status(400).send("error");
        }
        res.send({ data });
    });
};
exports.read = (req, res) => {
    return res.send(req.category);
};


exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).send("erorrrrr");
        }
        res.send(data);
    });
};
