const moment = require("moment");

module.exports = (tokenObject) => {
    if (moment(tokenObject.expires_at).isBefore(moment(new Date()))) {
        return false;
    }
    return true;
}

