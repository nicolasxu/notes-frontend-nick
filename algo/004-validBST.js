// Determine if a tree is valid binary search tree(BST)
// BST definition:  https://en.wikipedia.org/wiki/Binary_search_tree
/*
           3
          / \
         1   8

*/
/*
  node = {
    val: 3,
    left: leftNode,
    right: rightNode
  }
*/

function isValidBST(root) {
  if (!root) {
    return true
  }
  if (root.left) {
    // check left
    if (root.left.val > root.val) {
      return false
    }
  }

  if (root.right) {
    // check right
    if (root.val > root.right.val ) {
      return false
    }
  }

  return isValidBST(root.left) && isValidBST(root.right)

}

const res = isValidBST({val: 10, left:{val: 3}, right: {val: 9}})
console.log(res)