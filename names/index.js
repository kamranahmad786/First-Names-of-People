const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleNames) => {
    return getFirstNames(peopleNames);
};


module.exports = getPeopleInCity;#