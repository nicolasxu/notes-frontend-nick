// Within the function body

const foo = function bar() {
  // statements go here

		// Within the function body, the following are all equivalent:
    bar()
    arguments.callee() // 被叫者
    foo()
};




