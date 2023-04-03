const MyClass = class {
  // Class body...
};

Class expressions can have names as well. The expression's name is only visible to the class's body.

const MyClass = class MyClassLongerName {
  // Class body. Here MyClass and MyClassLongerName point to the same class.
};
new MyClassLongerName(); // ReferenceError: MyClassLongerName is not defined


