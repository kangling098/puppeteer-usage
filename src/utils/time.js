const moment = require('moment');

module.exports = {
  get date() {
    return moment().format('YYYYMMDD');
  },
  get second() {
    return moment().format('YYYYMMDDHHmmSS');
  }
};
