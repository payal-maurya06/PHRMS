const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ( {
    name: {
        type: String,
        required: true,
    },
     email: {
        type: String,
        required: true,
        unique: true
    },
     password: {
        type: String,
        required: true,
    },
     contactNo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["patient", "doctor", "admin"],
    required: true,
  },

  // Patient-specific fields
  age: {
    type: Number,
    required: function () {
      return this.role === "patient";
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: function () {
      return this.role === "patient";
    },
  },
  medicalHistory: {
    type: String,
    required: function () {
      return this.role === "patient";
    },
  },


  // Doctor-specific fields
  specialization: {
    type: String,
    required: function () {
      return this.role === "doctor";
    },
  },
  licenseNumber: {
    type: String,
    required: function () {
      return this.role === "doctor";
    },
  },
  yearsOfExp: {
    type: Number,
    required: function () {
      return this.role === "doctor";
    },
  },

  // Admin-specific fields
  hospitalName: {
    type: String,
    required: function () {
      return this.role === "admin";
    },
  },
  hospitalCode: {
    type: String,
    required: function () {
      return this.role === "admin";
    },
  },
  roleType: {
    type: String,
    enum: ["hospitalAdmin", "departmentAdmin"],
    required: function () {
      return this.role === "admin";
    },
  },
  departmentName: {
    type: String,
    required: function () {
      return this.role === "admin" && this.roleType === "departmentAdmin";
    },
  },
  departmentCode: {
    type: String,
  },
  verificationCode: {
    type: String,
    required: function () {
      return this.role === "admin";
    },
  },
});
const UserModel = mongoose.model ('users', UserSchema);
module.exports = UserModel;
