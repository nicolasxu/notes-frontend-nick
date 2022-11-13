Private field declarations
Using private fields, the definition can be refined as below.

class Rectangle {
  #height = 0; // # means private
  #width; // # means private
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

Note: Private fields can only be declared up-front in a field declaration.



class Rectangle {
  height = 0; // public
  width; // public
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
