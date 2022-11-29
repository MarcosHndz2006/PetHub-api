const {body} = require("express-validator");

const validators = {};

validators.createUserValidator = [
    body("username")
        .notEmpty().withMessage("nombres de usuarios vacíos no se permiten")
        .isLength({min:4, max:32}).withMessage("El username debe tener entre 4 y 32 caracteres"),
    body("email")
        .notEmpty().withMessage("Es requisito poner su correo")
        .isEmail().withMessage("Debe seguir los estándares de email"),
    body("password")
        .notEmpty().withMessage("Su contraseña es indispensable")
        .isStrongPassword().withMessage("Su contraseña no es segura"),
    body("numberPets")
        .optional(),
    body("publications")
        .optional()
]

module.exports = validators;