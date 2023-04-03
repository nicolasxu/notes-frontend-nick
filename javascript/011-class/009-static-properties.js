Date.now() // '1680541500492'  is static method.


Number.parseInt() // is also static method

Static properties are a group of class features that are defined on the class itself, rather than on individual instances of the class

    - Static methods
    - Static fields
    - Static getters and setters


class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false
console.log(new Color(0, 0, 0).isValid); // undefined


//////////////////////////
There is also a special construct called a static initialization block, which is a block of code that runs when the class is first loaded.

class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'
