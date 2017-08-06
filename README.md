# Expect 断言库

> 2017-08-06 21:52:34

一个翻译很烂还烂尾的 [Expect](https://github.com/mjackson/expect) 笔记。

## 运行

if you install yarn,you can run the demo in this way:

```sh
yarn 
yarn test
```

or you can use npm

```sh
npm install
npm run test
``` 

## Demo说明

### ToExist.js

toExist && toNotExist 断定给定的obj是否为真的。

### ToBe.js

toBe && toNotBe 判断obj是否“===”设定值

toEqual && toNotEqual 判断obj是否“==”设定值

### ToThrow.js

toThrow && toNotThrow 捕捉错误

### ToBeA.js

toBeA && toNotBeA 断定obj是否是一个构造函数或者字符串

> 字符串里面写的是obj的类型。

### ToMatch.js

toMatch && toNotMatch 查找是否存在

### ToBeLessThan.js

toBeLessThan && toBeLessThanOrEqualTo && toBeGreaterThan && toBeGreaterThanOrEqualTo

小于 && 小于等于 && 大于 && 大于等于

比较大小

### ToIncludeKey.js

toIncludeKey(s) && toExcludeKey(s) 判断obj(数组或者方法或者其他东西)的key是否存在。

### ToHaveBeenCalled.js

- `toHaveBeenCalled()`断言间谍函数是否至少被调用过一次
- `toNotHaveBeenCalled()`断言谍函数是否没被调用过
- `toHaveBeenCalledWith()`断言给定的间谍函数已被调用，并带有预期的参数。

# 其他

## 链接断言(Chaining Assertions)

每个断言都返回一个`Expectation`对象，所以你能链接断言。

```js
expect(3.14)
  .toExist()
  .toBeLessThan(4)
  .toBeGreaterThan(3)
```



## Spy

`expect`能创建间谍功能，可以跟踪对其他功能进行的调用，并根据所使用的参数和上下文进行各种断言。

```js
var video = {
  play: function () {},
  pause: function () {},
  rewind: function () {}
}

var spy = expect.spyOn(video, 'play')

video.play('some', 'args')

expect(spy.calls.length).toEqual(1)
expect(spy.calls[0].context).toBe(video)
expect(spy.calls[0].arguments).toEqual([ 'some', 'args' ])
expect(spy).toHaveBeenCalled()
expect(spy).toHaveBeenCalledWith('some', 'args')

spy.restore()
expect.restoreSpies()
```

### createSpy

```js
expect.createSpy()
```

创建一个间谍函数

```js
var spy = expect.createSpy()
```

### spyOn

```js
expect.spyOn(target, method)
```

用间谍替代`target`中的`method`。

```js
var video = {
  play: function () {}
}

var spy = expect.spyOn(video, 'play')
video.play()

spy.restore()
```

### restoreSpies

恢复用`expect.spyOn()`创建的所有`spy`。这与在所创建的所有`spy`中调用`spy.restore()`相同。

```js
beforeEach(function () {
  expect.spyOn(profile, 'load')
})

afterEach(function () {
  expect.restoreSpies()
})

it('works', function () {
  profile.load()
  expect(profile.load).toHaveBeenCalled()
})
```




## Spy methods and properties

### andCall

```js
spy.andCall(fn)
```
使调用函数fn当间谍。

> **原文：** Makes the spy invoke a function fn when called.

```js
var dice = createSpy().andCall(function () {
  return (Math.random() * 6) | 0
})
```

### andCallThrough

```js
spy.andCallThrough()
```

使间谍呼叫的原始功能，它的间谍。

> **原文：** Makes the spy call the original function it's spying on.

```js
spyOn(profile, 'load').andCallThrough()

var getEmail = createSpy(function () {
  return "hi@gmail.com"
}).andCallThrough()
```

### andReturn

```js
spy.andReturn(object)
```

使spy返回一个值。

```js
var dice = expect.createSpy().andReturn(3)
```

### andThrow

```js
spy.andThrow(error)
```
让spy抛出一个错误时调用。

> **原文：** Makes the spy throw an error when called.

```js
var failing = expect.createSpy()
  .andThrow(new Error('Not working'))
```

### restore

```js
spy.restore()
```
恢复最初创建的`expect.spyOn()`。

> **原文：** Restores a spy originally created with `expect.spyOn()`.

### reset

```js
spy.reset()
```
清除所有保存调用间谍。

> **原文：** Clears out all saved calls to the spy.

### calls

```js
spy.calls
```

An array of objects representing all saved calls to the spy.

You can use the length of the calls array to make assertions about how many times you expect the spy to have been called.

```js
expect(spy.calls.length).toEqual(3)
```

You can also use the array to make assertions about each individual call. Each call object contains the following properties:

**context**

```js
spy.calls[index].context
```
这个值的调用的执行上下文。

> **原文：** The this value of the call's execution context.

**arguments**

```js
spy.calls[index].arguments
```

传递给特定调用的间谍的参数数组。

> **原文：** An array of the arguments passed to the spy for the particular call.

### Extending expect

你可以添加你自己的断言使用 `expect.extend` 和 `expect.assert`:

```js
expect.extend({
  toBeAColor() {
    expect.assert(
      this.actual.match(/^#[a-fA-F0-9]{3,6}$/),
      'expected %s to be an HTML color',
      this.actual
    )
    return this
  }
})

expect('#ff00ff').toBeAColor()
```

## 扩展(Extensions)

- [expect-element](https://github.com/mjackson/expect-element) Adds assertions that are useful for DOM elements
- [expect-jsx](https://github.com/algolia/expect-jsx) Adds things like expect(ReactComponent).toEqualJSX(<TestComponent prop="yes" />)
- [expect-predicate](https://github.com/erikras/expect-predicate) Adds assertions based on arbitrary predicates
- [expect-enzyme](https://github.com/PsychoLlama/expect-enzyme) Augments and extends expect to supercharge your enzyme assertions