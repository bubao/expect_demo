import expect from "expect";

describe("toMatch && toNotMatch 查找是否存在",()=>{
    /**
     * expect(string).toMatch(pattern, [message])
     * expect(object).toMatch(pattern, [message])
     * Asserts the given string or object matches a pattern. 
     * When using a string, pattern must be a RegExp. 
     * When using an object, pattern may be anything acceptable to tmatch.
     */
        it("toMatch",()=>{
        expect('a string').toMatch(/string/);
        expect({
        statusCode: 200,
            headers: {
                server: 'nginx/1.6.5'
            }
        }).toMatch({
            headers: {
                server: /nginx/
            }
        })
        })
    /**
     * expect(string).toMatch(pattern, [message])
     * expect(object).toMatch(pattern, [message])
     * Asserts the given string or object does not match a pattern. 
     * When using a string, pattern must be a RegExp. 
     * When using an object, pattern may be anything acceptable to tmatch.
     */
    it("toNotMatch",()=>{
        expect('a string').toNotMatch(/c/)
        expect({
            statusCode: 200,
            headers: {
                server: 'nginx/1.6.5'
            }
        }).toNotMatch({
            headers: {
                server: /apache/
            }
        })
    })
});