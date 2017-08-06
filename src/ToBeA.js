import expect from "expect";

describe("toBeA && toNotBeA 断定obj是否是一个构造函数或者字符串。", () => {
    /**
     * expect(object).toBeA(constructor, [message])
     * Asserts the given object is an instanceof constructor.
     * 
     * expect(object).toBeA(string, [message])
     * Asserts the typeof the given object is string.
     */
    it('toBeA | toBeAn', () => {
        expect(1).toBeA("number");
        expect(new Function).toBeA(Function);
    });

    /**
     * expect(object).toNotBeA(constructor, [message])
     * Asserts the given object is not an instanceof constructor.
     * 
     * expect(object).toNotBeAn(string, [message])
     * Asserts the typeof the given object is not string.
     */
    it("toNotBeA|toNotBeAn", () => {
        expect(new Function).toNotBeA("User")
        expect('a string').toNotBeA('number')
    })
})