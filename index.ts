export class Fast_Turtle {

    /**
     * Converts parameter to number data-type.
     * @param {*} param Paramter.
     * @return {number}
     */
    number(param: any): number {
        return parseInt(param);
    }

    /**
     * Converts parameter to float data-type.
     * @param {*} param Paramter.
     * @return {float}
     */
    float(param: any){
        return parseFloat(param);
    }

    /**
     * Converts parameter to string data-type.
     * @param {*} param Paramter.
     * @return {string}
     */
    string(param: any): string {
        return param.toString();
    }

    /**
     * Converts parameter to arrau.
     * @param {*} param Paramter.
     * @return {array}
     */
    array(param: any): Array<any>{
        return Array.from(param);
    }


    /**
     * Returns type of the value.
     * @param {*} param Paramter.
     * @return {string}
     */
    type(param: any): string{
        return typeof param;
    }

    /**
     * Returns a boolean value, true when parameter is undefined, flase when it is not.
     * @param {*} param Paramter.
     * @return {boolean}
     */
    isUndefined(param: any): boolean{
        if(typeof param === "undefined") return true;
        else return false;
    }

    /**
     * Returns a boolean value, true when parameter is null, flase when it is not.
     * @param {*} param Paramter.
     * @return {boolean}
     */
    isNull(param: any): boolean{
        if(param === null) return true;
        else return false;
    }

}