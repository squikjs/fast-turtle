"use strict";
module.exports.__esModule = true;
module.exports.Fast_Turtle = void 0;
var Fast_Turtle = /** @class */ (function () {
    function Fast_Turtle() {
    }
    /**
     * Converts parameter to number data-type.
     * @param {*} param Paramter.
     * @return {number}
     */
    Fast_Turtle.prototype.number = function (param) {
        return parseInt(param);
    };
    /**
     * Converts parameter to float data-type.
     * @param {*} param Paramter.
     * @return {float}
     */
    Fast_Turtle.prototype.float = function (param) {
        return parseFloat(param);
    };
    /**
     * Converts parameter to string data-type.
     * @param {*} param Paramter.
     * @return {string}
     */
    Fast_Turtle.prototype.string = function (param) {
        return param.toString();
    };
    /**
     * Converts parameter to arrau.
     * @param {*} param Paramter.
     * @return {array}
     */
    Fast_Turtle.prototype.array = function (param) {
        return Array.from(param);
    };
    /**
     * Returns type of the value.
     * @param {*} param Paramter.
     * @return {string}
     */
    Fast_Turtle.prototype.type = function (param) {
        return typeof param;
    };
    /**
     * Returns a boolean value, true when parameter is undefined, flase when it is not.
     * @param {*} param Paramter.
     * @return {boolean}
     */
    Fast_Turtle.prototype.isUndefined = function (param) {
        if (typeof param === "undefined")
            return true;
        else
            return false;
    };
    /**
     * Returns a boolean value, true when parameter is null, flase when it is not.
     * @param {*} param Paramter.
     * @return {boolean}
     */
    Fast_Turtle.prototype.isNull = function (param) {
        if (param === null)
            return true;
        else
            return false;
    };
    /**
     * Returns a boolean value, true when parameter's type is matching the type wanted, flase when it is not.
     * @param {*} param Paramter.
     * @param {data-type} typeWanted Type you want to check for.
     * @return {boolean}
     */
    Fast_Turtle.prototype.checkType = function (variable, typeWanted) {
        if (this.type(variable) === typeWanted)
            return true;
        else
            return false;
    };
    return Fast_Turtle;
}());
exports.Fast_Turtle = Fast_Turtle;
