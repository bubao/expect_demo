import expect from "expect";

/**
 * 因为抛出错误 所以没开
 */

describe("toThrow && toNotThrow 捕捉错误", () => {
    /**
     * expect(block).toThrow([error], [message])
     * Asserts that the given block throws an error. 
     * The error argument may be a constructor (to test using instanceof), 
     * or a string/RegExp to test against error.message.
     */
    it("toThrow", () => {
        expect( ()=>{throw new Error('boom!');}).toThrow(/boom/)
    })
    /*
     * expect(block).toNotThrow([message])
     * Asserts that the given block does not throw.
     */
    it("toNotThrow", () => {
        expect(Object).toNotThrow('boom!')
    })
})