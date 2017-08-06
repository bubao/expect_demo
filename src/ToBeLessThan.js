import expect from "expect";

describe("toBeLessThan && toBeLessThanOrEqualTo && toBeGreaterThan && toBeGreaterThanOrEqualTo 小于 && 小于等于 && 大于 && 大于等于",()=>{
    it("toBeLessThan | toBeFewerThan",()=>{
        expect(2).toBeLessThan(3)
    })
    it("toBeLessThanOrEqualTo",()=>{
        expect(2).toBeLessThanOrEqualTo(3)
    })
    it("toBeGreaterThan | toBeMoreThan",()=>{
        expect(3).toBeGreaterThan(2)
    })
    it("toBeGreaterThanOrEqualTo",()=>{
        expect(3).toBeGreaterThanOrEqualTo(2)
    })
})

describe("toInclude && toExclude obj是否包含给定值",()=>{
    /**
     * expect(array).toInclude(value, [comparator], [message])
     * expect(object).toInclude(value, [comparator], [message])
     * expect(string).toInclude(value, [message])
     * Asserts that a given value is included (or "contained") within another. 
     * The actual value may be an array, object, or a string. 
     * The comparator function, if given, 
     * should compare two objects and return false if they are not equal. 
     * The default is to use isEqual.
     */
    it("toInclude | toContain",()=>{
        expect([ 1, 2, 3 ]).toInclude(3)
        expect({ a: 1, b: 2 }).toInclude({ b: 2 })
        expect({ a: 1, b: 2, c: { d: 3 } }).toInclude({ b: 2, c: { d: 3 } })
        expect('hello world').toInclude('world')
    })

    /**
     * expect(array).toExclude(value, [comparator], [message])
     * expect(object).toExclude(value, [comparator], [message])
     * expect(string).toExclude(value, [message])
     * Asserts that a given value is not included (or "contained") within another. 
     * The actual value may be an array, object, or a string. 
     * The comparator function, if given, should compare two objects 
     * and return false if they are not equal. 
     * The default is to use isEqual.
     */
    it("toExclude | toNotContain | toNotInclude",()=>{
        expect([ 1, 2, 3 ]).toExclude(4)
        expect({ a: 1, b: 2 }).toExclude({ c: 2 })
        expect({ a: 1, b: 2 }).toExclude({ b: 3 })
        expect({ a: 1, b: 2, c: { d: 3 } }).toExclude({ c: { d: 4 } })
        expect('hello world').toExclude('goodbye')
    })
})