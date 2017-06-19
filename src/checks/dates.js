/**
 * Created by Fabio on 18/06/2017.
 */
var Types = require('./types');
var Dates = {};

var _days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

var _months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

/**
 * Check if is date string
 * @param value {string}
 * @returns {boolean}
 */
Dates.dateString = function (value) {
    var date = Date.parse(value);
    return !isNaN(date);
};

/**
 * Check if date is today
 * @param date {Date}
 * @returns {boolean}
 */
Dates.today = function (date) {
    var now = new Date();
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is tomorrow
 * @param date {Date}
 * @returns {boolean}
 */
Dates.tomorrow = function (date) {
    var now = new Date();
    now.setDate(now.getDate() + 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is yesterday
 * @param date {Date}
 * @returns {boolean}
 */
Dates.yesterday = function (date) {
    var now = new Date();
    now.setDate(now.getDate() - 1);
    return Types.date(date) && now.toDateString() === date.toDateString();
};

/**
 * Check if date is past
 * @param date {Date}
 * @returns {boolean}
 */
Dates.past = function (date) {
    var now = (new Date()).getTime();
    return Types.date(date) && now > date.getTime();
};

/**
 * Check if date is future
 * @param date {Date}
 * @returns {boolean}
 */
Dates.future = function (date) {
    return Types.date(date) && !Dates.past(date);
};

/**
 * Check if date is day specified
 * @param date {Date}
 * @param day {string}
 * @returns {boolean}
 */
Dates.day = function (date, day) {
    return Types.date(date) &&
        Types.string(day) &&
        _days[date.getDay()] === day.toLowerCase();
};

Dates.day.multiple = false;

/**
 * Check if date is month specified
 * @param date {Date}
 * @param month {string}
 * @returns {boolean}
 */
Dates.month = function (date, month) {
    return Types.date(date) &&
        Types.string(month) &&
        _months[date.getMonth()] === month.toLowerCase();
};

Dates.month.multiple = false;

module.exports = Dates;