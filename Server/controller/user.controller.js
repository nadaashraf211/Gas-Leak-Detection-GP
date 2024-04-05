var queries = require("../db/queries");
var dbconnection = require("../db/connection");
const bcrypt = require("bcrypt");
const session = require("express-session");

exports.saveUserData = async (req, res) => {
  try {
    var userFirstName = req.body.userFirstName;
    var userLastName = req.body.userLastName;
    var userMail = req.body.userMail;
    var userPhone = req.body.userPhone;
    var userBirthday = req.body.userBirthday;
    var userGender = req.body.userGender;
    var userPassword = req.body.userPassword;
    var createdOn = new Date();

    if (
      !userFirstName ||
      !userLastName ||
      !userMail ||
      !userPhone ||
      !userBirthday ||
      !userGender ||
      !userPassword
    ) {
      return res.status(500).send({
        error:
          "FirstName,LastName,Mail,Phone,Birthday,Gender and Password should not be empty",
      });
    }
    var getUsersMailsQuery = queries.queryList.GET_USERS_MAILS_QUERY;
    var result = await dbconnection.dbQuery(getUsersMailsQuery);
    // Assuming 'result' contains the database query result
    const userMails = result.rows.map((row) => row.user_mail);
    const userPhones = result.rows.map((row) => row.user_phone);

    if (userMails.includes(userMail)) {
      return res.status(500).send({ error: "Mail Is Already Existed." });
    } else {
      console.log("Valid Mail");
    }

    if (userPhones.includes(userPhone)) {
      return res.status(500).send({ error: "PhoneNumber Is Already Existed." });
    } else {
      console.log("Valid Phone Number ");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    values = [
      userFirstName,
      userLastName,
      userMail,
      userPhone,
      userBirthday,
      userGender,
      hashedPassword,
      createdOn,
    ];
    var saveUserDataQuery = queries.queryList.SAVE_USER_DATA_QUERY;
    await dbconnection.dbQuery(saveUserDataQuery, values);
    return res.status(201).send("Successfully save user's data");
  } catch (err) {
    console.log("Error : " + err);
    return res.status(500).send({ error: "Failed to save user's data" });
  }
};

exports.login = async (req, res) => {
  try {
    var userMail = req.query.userMail;
    var userPassword = req.query.userPassword;
    console.log(userMail);
    console.log(userPassword);
    if (!userMail || !userPassword) {
      return res.status(500).send({
        error: "Mail and Password should not be empty",
      });
    }
    var get_UsersEmailPass_Query = queries.queryList.GET_USERS_MAILS_PASS_QUERY;
    var result = await dbconnection.dbQuery(get_UsersEmailPass_Query, [
      userMail,
    ]);
    if (result.rows.length == 0) {
      return res.status(500).send({
        error: "Mail not found",
      });
    }
    const email = result.rows.map((row) => row.user_mail);
    const password = result.rows.map((row) => row.user_password);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);
    const isPassMatch = await bcrypt.compare(userPassword, password[0]);

    if (isPassMatch) {
      req.session.userMail = userMail;
      return res.json({ Login: true, userMail: req.session.userMail });
    } else {
      return res.json({ Login: false });
    }
  } catch (err) {
    console.log("Error : " + err);
    return res.json({ Login: false });
  }
};

exports.Check = async (req, res) => {
  if (req.session.userMail) {
    return res.json({ valid: true, userMail: req.session.userMail });
  } else {
    return res.json({ valid: false });
  }
};
