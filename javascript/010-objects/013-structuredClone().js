structuredClone() does NOT clone for:


1. Function Obj
2. DOM nodes
3. object properties are not preserved, e.g:
    - lastIndex property of RegExp
    - descriptors, setters, getters, and similar metadata-like features are not duplicated
4. The prototype chain is not walked or duplicated.
