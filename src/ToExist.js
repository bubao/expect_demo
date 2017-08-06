import expect from 'expect';

describe("toExist && toNotExist 断定给定的obj是否为真的。", () => {
    /**
     * expect(object).toExist([message])
     * Asserts the given object is truthy.
     */
    it('toExist  | toBeTruthy', () => {
        expect(Object).toExist();
    });
    /**
     * expect(object).toNotExist([message])
     * Asserts the given object is falsy.
     */
    it("toNotExist | toBeFalsy", () => {
        expect(null).toNotExist()
    });
});