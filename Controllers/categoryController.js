const CategoryModel = require('../models/categoryModel');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.getAllCategoriesSortedByName();
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addCategory = async (req, res) => {
    try {
        const newCategory = await CategoryModel.createCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.getCategoryById(req.params.id);
        res.json(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await CategoryModel.updateCategory(req.params.id, req.body);
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await CategoryModel.deleteCategory(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};
