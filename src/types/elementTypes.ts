/*
    These interfaces are based off of how HTML is interpreted by the browser
    Since HTML defines content using markup, this means that at the highest level, 
    HTML is broken down into 2 areas:

    1. Content
    2. Tags

    This is confirmed as the only thing you can put inside an element, 
    is another element or some text. The first interface is to determine whether the HTML Node
    in question is an element or some text.
*/
interface DynamicNode {
  type: string; // Either "element" or "text"
}
/*
    The next 2 interfaces are to define the text and the HTML Tag, referred to as a component.

    - The TextNode can only take text
    - The ComponentNode is made from 3 main parts, The tagname, attributes and children. Only the tagname is required
*/
interface TextNode extends DynamicNode {
  value: string; // Text nodes can only be strings
}
interface ComponentNode extends DynamicNode {
  tag: string; // To determine what kind of component it is, may need to refactor
  children?: []; // Optional: Can have many direct children of either TextNode or ComponentNodes
  attributes?: { [key: string]: any }; // This is to apply any attributes to the componenent;
}
