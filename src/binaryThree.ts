class ThreeNode {
  data: number;
  left: ThreeNode | null = null;
  right: ThreeNode | null = null;
  constructor(data: number) {
    this.data = data;
  }
}

class BinarySearchThree {
  root: ThreeNode | null = null;

  insert(data: number) {
    let newNode = new ThreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: ThreeNode, newNode: ThreeNode) {
    if (newNode.data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  inOrderTraverse(node: ThreeNode | null, callback: (data: any) => void) {
    if (node !== null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }
  }

  preOrderTraverse(node: ThreeNode | null, callback: (data: any) => void) {
    if (node !== null) {
      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  postOrderTraverse(node: ThreeNode | null, callback: (data: any) => void) {
    if (node !== null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node.data);
    }
  }

  search(node: ThreeNode | null, data: number): any {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return ThreeNode;
    }
  }

  remove(data: number) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node: ThreeNode | null, data: number): ThreeNode | null {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      ///

      return node;
    }
  }
}
export default new BinarySearchThree();
