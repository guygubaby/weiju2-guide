class Node:
  def __init__(self,root=None,left=None,right=None):
    self.root=root
    self.left=left
    self.right=right


class BinaryTree:
  def __init__(self):
    self.node = Node()
    self._list=[]

  def add(self,element):
    node = Node(element)
    if self.node.root is None:
      self.node.root = node
    else:
      if self.node.left is None:
        self.node.left=node
      else:
        self.node.right=node

  def pre(self,root):
    if root.root is None:
      return []
    else:
      print(root.root)
      self.pre(root.left)
      self.pre(root.right)
      

if __name__ == "__main__":
    bTree = BinaryTree()
    for i in range(10):
      bTree.add(i)
    bTree.pre(bTree.node)