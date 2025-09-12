const bcrypt = require("bcrypt");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            contactNo,
            role,
            // patient fields
            age,
            gender,
            medicalHistory,
            
            // doctor fields
            specialization,
            licenseNumber,
            yearsOfExp,
            // admin fields
            hospitalName,
            hospitalCode,
            roleType,
            departmentName,
           departmentCode,

            verificationCode
        } = req.body;

        // Check if user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }



         let userData = {
            name,
            email,
            password,
            contactNo,
            role,
            hasLoggedInBefore :false
        };

        // Add fields based on role
        if (role === "patient") {
            userData = {
                ...userData,
                age,
                gender,
                medicalHistory
            };
        } else if (role === "doctor") {
            userData = {
                ...userData,
                specialization,
                licenseNumber,
                yearsOfExp
            };
        } else if (role === "admin") {
            userData = {
                ...userData,
                hospitalName,
                hospitalCode,
                roleType,
                departmentName,
                verificationCode
            };
        }

        // Create new user model with role-based data
        const userModel = new UserModel(userData);

        // Hash password before saving
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        res.status(201).json({
            message: 'SignUp successful',
            success: true
        });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';

        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

          let firstLogin = false;
        if (!user.hasLoggedInBefore) {
            firstLogin = true;
            user.hasLoggedInBefore = true; // update after first login
            await user.save();
        }
        res.status(200).json({
            message: 'Login successfully',
            success: true,
            jwtToken,
            email,
            name: user.name,
            role: user.role,
            firstLogin
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

module.exports = {
    signup,
    login
};
