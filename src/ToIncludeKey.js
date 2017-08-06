import expect from "expect";

describe("toIncludeKey(s) && toExcludeKey(s) 判断obj(数组或者方法或者其他东西)的key是否存在",()=>{
    /**
     * expect(object).toIncludeKeys(keys, [comparator], [message])
     * expect(object).toIncludeKey(key, [comparator], [message])
     * Asserts that the given object (may be an array, or a function, 
     * or anything with keys) contains all of the provided keys. 
     * The optional parameter comparator is a function 
     * which if given an object and a string key, 
     * it should return a boolean detailing whether 
     * or not the key exists in the object. 
     * By default, a shallow check with Object.prototype.hasOwnProperty is performed.
     */
    it("toIncludeKey(s) | toContainKey(s)",()=>{
        expect({ a: 1 }).toIncludeKey('a')
        expect({ a: 1, b: 2 }).toIncludeKeys([ 'a', 'b' ])
    })
    /**
     * expect(object).toExcludeKeys(keys, [comparator], [message])
     * expect(object).toExcludeKey(key, [comparator], [message])
     * Asserts that the given object (may be an array, or a function, 
     * or anything with keys) does not contain any of the provided keys. 
     * The optional parameter comparator is a function 
     * which if given an object and a string key, 
     * it should return a boolean detailing whether 
     * or not the key exists in the object. 
     * By default, a shallow check with 
     * Object.prototype.hasOwnProperty is performed.
     */
    it("toExcludeKey(s) | toNotContainKey(s) | toNotIncludeKey(s)",()=>{
        expect({ a: 1 }).toExcludeKey('b')
        expect({ a: 1, b: 2 }).toExcludeKeys([ 'c', 'd' ])
    })
})