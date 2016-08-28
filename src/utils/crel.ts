// export class Crel {
//
//     private static fn: string = 'function';
//     private static obj: string = 'object';
//     private static nodeType: string = 'nodeType';
//     private static textContent: string = 'textContent';
//     private static setAttribute: string = 'setAttribute';
//     private static attrMapString: string = 'attrMap';
//     private static d: Document = typeof document === Crel.obj ? document : <Document>{};
//
//     public create(ele: any, ...params: any[]): any {
//         var args = arguments, //Note: assigned to a variable to assist compilers. Saves about 40 bytes in closure compiler. Has negligable effect on performance.
//             element = args[0],
//             child: any,
//             settings = args[1],
//             childIndex = 2,
//             argumentsLength = args.length,
//             attributeMap = Crel.attrMapString;
//
//         element = this.isElement(element) ? element : Crel.d.createElement(element);
//         // shortcut
//         if (argumentsLength === 1) {
//             return element;
//         }
//
//         if (!this.isType(settings, Crel.obj) || this.isNode(settings) || this.isArray(settings)) {
//             --childIndex;
//             settings = null;
//         }
//
//         // shortcut if there is only one child that is a string
//         if ((argumentsLength - childIndex) === 1
//             && this.isType(args[childIndex], 'string')
//             && element[Crel.textContent] !== undefined) {
//             element[Crel.textContent] = args[childIndex];
//         } else {
//             for (; childIndex < argumentsLength; ++childIndex) {
//                 child = args[childIndex];
//
//                 if (child == null) {
//                     continue;
//                 }
//
//                 if (this.isArray(child)) {
//                     for (var i = 0; i < child.length; ++i) {
//                         this.appendChild(element, child[i]);
//                     }
//                 } else {
//                     this.appendChild(element, child);
//                 }
//             }
//         }
//
//         for (var key in settings) {
//             if (!attributeMap[key]) {
//                 element[Crel.setAttribute](key, settings[key]);
//             } else {
//                 var attr = attributeMap[key];
//                 if (typeof attr === Crel.fn) {
//                     attr(element, settings[key]);
//                 } else {
//                     element[Crel.setAttribute](attr, settings[key]);
//                 }
//             }
//         }
//
//         return element;
//     }
//
//
//
//     private isType(a: any, type: any) {
//         return typeof a === type;
//     };
//
//     private isNode(object: any) {
//         if (Node === Crel.fn) {
//             return object instanceof Node;
//         }
//
//         return object &&
//             this.isType(object, Crel.obj) &&
//             (Crel.nodeType in object) &&
//             this.isType(object.ownerDocument, Crel.obj);
//     }
//
//         // in IE <= 8 Node is an object, obviously..
//
//     private isElement(object: any): any {
//         return this.isNode(object) && object[Crel.nodeType] === 1;
//     }
//
//     private isArray(a: any) {
//         return a instanceof Array;
//     }
//
//     private appendChild(element: any, child: any) {
//         if (!this.isNode(child)) {
//             child = Crel.d.createTextNode(child);
//         }
//         element.appendChild(child);
//     };
// }
