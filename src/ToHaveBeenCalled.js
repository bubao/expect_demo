import expect from "expect";

const increment = expect.createSpy()
const decrement = expect.createSpy()

increment()

var video = {
  play: function () {}
}

var spy = expect.spyOn(video, 'play')

video.play('some', 'args')

describe("(spy) toHaveBeenCalled && (spy) toNotHaveBeenCalled && (spy) toHaveBeenCalledWith",()=>{
    /**
     * expect(spy).toHaveBeenCalled([message])
     * Asserts the given spy function has been called at least once.
     */
    it("toHaveBeenCalled",()=>{
        expect(increment).toHaveBeenCalled()
    })
    /**
     * expect(spy).toNotHaveBeenCalled([message])
     * Asserts the given spy function has not been called.
     */
    it("toNotHaveBeenCalled",()=>{
        expect(decrement).toNotHaveBeenCalled()
    })
    /**
     * expect(spy).toHaveBeenCalledWith(...args)
     * Asserts the given spy function has been called with the expected arguments.
     */
    it("toHaveBeenCalledWith",()=>{
        expect(spy).toHaveBeenCalledWith('some', 'args')
    })
})
spy.restore()
expect.restoreSpies()