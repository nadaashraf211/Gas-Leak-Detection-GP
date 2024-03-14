class User {
    constructor(userID, userFirstName, userLastName, userMail, userPhone, userBirthday, userGender, userPassword) {
        this.userID = userID;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userMail = userMail;
        this.userPhone = userPhone;
        this.userBirthday = userBirthday;
        this.userGender = userGender;
        this.userPassword = userPassword;
    }
}
module.exports = { User };