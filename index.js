"use strict";
module.exports["number"] = (param) => {
  return parseInt(param);
};

/**
 * Converts parameter to float data-type.
 * @param {*} param Paramter.
 * @return {float}
 */
module.exports["float"] = (param) => {
  return parseFloat(param);
};

/**
 * Converts parameter to string data-type.
 * @param {*} param Paramter.
 * @return {string}
 */
module.exports["string"] = (param) => {
  return String(param);
};

/**
 * Converts parameter to arrau.
 * @param {*} param Paramter.
 * @return {array}
 */
module.exports["array"] = (param) => {
  return Array.from(param);
};

/**
 * Returns type of the value.
 * @param {*} param Paramter.
 * @return {string}
 */
module.exports["type"] = (param) => {
  return typeof param;
};

/**
 * Returns a boolean value, true when parameter is undefined, flase when it is not.
 * @param {*} param Paramter.
 * @return {boolean}
 */
module.exports["isUndefined"] = (param) => {
  return typeof param === "undefined";
};

/**
 * Returns a boolean value, true when parameter is null, flase when it is not.
 * @param {*} param Paramter.
 * @return {boolean}
 */
module.exports["isNull"] = (param) => {
  if (param === null) return true;
  else return false;
};

/**
 * Returns a boolean value, true when parameter's type is matching the type wanted, flase when it is not.
 * @param {*} param Paramter.
 * @param {data-type} typeWanted Type you want to check for.
 * @return {boolean}
 */
module.exports["check"] = (variable, typeWanted) => {
  return this.type(variable) === typeWanted;
};
