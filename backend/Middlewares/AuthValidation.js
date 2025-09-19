const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const baseschema = {
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().alphanum().min(6).max(100).required(),
        contactNo: Joi.string().pattern(/^[0-9]{10}$/).required(),
        role: Joi.string().valid('patient', 'doctor', 'admin').required()
    };
    const patientSchema = Joi.object({
        ...baseschema,
        age: Joi.number().min(0).max(120).required(),
        gender: Joi.string().valid('Male', 'Female', 'Other').required(),

        medicalHistory: Joi.string().allow('', null),

    });

    const doctorSchema = Joi.object({
        ...baseschema,
        specialization: Joi.string().max(100).required(),
        licenseNumber: Joi.string().max(50).required(),
        yearsOfExp: Joi.number().min(0).max(70).required()
    });
    const adminSchema = Joi.object({
        ...baseschema,
        hospitalName: Joi.string().max(100).required(),
        hospitalCode: Joi.string().alphanum().max(20).required(),
        roleType: Joi.string().max(50).required(),
        departmentName: Joi.string().max(100).required(),
        verificationCode: Joi.string().max(50).required()
    });

    let schema;
    switch (req.body.role) {
        case 'patient':
            schema = patientSchema;
            break;
        case 'doctor':
            schema = doctorSchema;
            break;
        case 'admin':
            schema = adminSchema;
            break;
        default:
            return res.status(400).json({ message: 'Invalid role' });
    }

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: error.details[0].message })
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: 'Bad request', error })
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}
