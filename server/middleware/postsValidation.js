const { checkSchema, validationResult } = require('express-validator');

//import Model
const Post = require('../models/Posts');

//addPost shema

const addPostShema = {
    
    caption: {
        custom: {
            options: (value, {req}) => {
                if(!value && value == '')
                    if(!req.body.image)
                        throw new Error("les 2 champs ne peuvent pas etre vide");
                return true;
            }  
        }
    },
    image: {
        custom: {
            options: (value, {req}) => {
                if(!value)
                    if(!req.body.caption && req.body.caption === '')
                        throw new Error("les 2 champs ne peuvent pas etre vide");
                return true;
            }
        }
    }
}

const updatePostShema = {
    caption: {
        notEmpty: {
            errorMessage: "caption field cannot be empty"
        }
    }
}

//custom errors messages
const customErrors = errors => {
    const myErrors = {};
    errors.map((error) => {
       
        myErrors[error.param] = {msg: error.msg};
    });

    return myErrors;
};

//management comments validation
const commentShema = {
    comment: {
        notEmpty:{
            errorMessage: "comment does not be empty"
        }
    }
}

//validation Middeleware
const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({
            errors: customErrors(errors.errors)
        });
    };
};

exports.addPostValidation = validate(checkSchema(addPostShema));
exports.updatePostValidation = validate(checkSchema(updatePostShema));
exports.commentValidation = validate(checkSchema(commentShema));