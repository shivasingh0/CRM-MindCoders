const { ApiResponse } = require("../Response/apiResponse");
const userModel = require("../models/userModel");
const { encyptPassword, verifyPassword } = require("../utils/Password");
const errorHendlar = require('../utils/errorHendler')
const adminModel = require("../models/adminModel");

const RegiseterUser = async (req, res) => {
  const {
    adminId,
    fullName,
    email,
    mobile,
    city,
    role,
    last_company,
    password,
    adder,
  } = req.body;
  let hashPassword = null;
  try {
    const admin = await adminModel.findById(adminId);
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/.test(password)
    ) {
      hashPassword = await encyptPassword(password);
    } else {
      res.json(
        new ApiResponse(
          false,
          null,
          "use strong password and minimum 6 character "
        )
      );
    }
    if (hashPassword !== null && admin) {
      let response = await userModel.create({
        adminId,
    fullName,
    email,
    mobile,
    city,
    role,
    last_company,
    password:hashPassword,
    adder,
      });

      if (response !== null) {
        let Obj = response.toObject();
        delete Obj.__v;
        delete Obj.password;
        res.status(200).json("register successfully");
      }
    }
  } catch (error) {
    let err = errorHendlar(error);
    res.json(new ApiResponse(false, null, err ? err : error.message));
  }

};

module.exports = { RegiseterUser };
