import expect from 'expect';

describe("toBe && toNotBe 判断obj是否“===”设定值", () => {
    /**
     * expect(object).toBe(value, [message])
     * Asserts that object is strictly equal to value using ===.
     */
    it("toBe", () => {
        expect(null).toBe(null)
    });
    /*
     * expect(object).toNotBe(value, [message])
     * Asserts that object is not strictly equal to value using ===.
     */
    it("toNotBe", () => {
        expect(null).toNotBe(1)
    });
});

describe("toEqual && toNotEqual 判断obj是否“==”设定值", () => {
    /**
     * expect(object).toEqual(value, [message])
     * Asserts that the given object equals value using is-equal.
     */
    it("toEqual", () => {
        expect(1).toEqual("1")
    });
    /**
     * expect(object).toNotEqual(value, [message])
     * Asserts that the given object is not equal to value using is-equal.
     */
    it("toNotEqual", () => {
        expect(1).toNotEqual(2)
    });
});