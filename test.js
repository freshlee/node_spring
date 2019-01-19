// class NodeTree {
//     public id: Number;
//     public label: String;
//     public children: NodeTree[];
// }

// const root = new NodeTree()
// root.id = 2
// root.label = 'second'
// root.children = new Array<NodeTree>();
// const a = new NodeTree()
// const b = new NodeTree()
// a.id = 3
// a.label = 'third'
// b.id = 4
// b.label = 'forth'
// root.children.push(a)
// root.children.push(b)

// const findNodeById = function (root: NodeTree, id: Number) {
//     if (root.id === id) {
//         return root;
//     }
//     const loop = (children: NodeTree[]): NodeTree  => {
//         const res: any = children.find((item: NodeTree) => {
//             return ((item.id === id) || Boolean(loop(item.children)))
//         })
//         return res
//     }
//     return loop(root.children)
// }
// console.log(findNodeById(root, 2))
// import test from './app/index'
// console.log(test)
import test from 'app/index.js';

console.log(test)