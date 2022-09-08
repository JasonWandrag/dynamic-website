interface Attributes {
  // For any custom attribute
  [key: string]: any;
  // Generic Attributes
  id?: string;
  class?: string;
  style?: string;
}
interface AnchorAttributes extends Attributes {
  href: string;
  target?: string;
  download?: boolean;
}
interface InputAttributes extends Attributes {
  value?: string;
  type: string;
  name?: string;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  maxlength?: string;
  min?: string;
  max?: string;
  multiple?: boolean;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  step?: string;
  autofocus?: boolean;
  height?: string;
  width?: string;
  list?: string;
  autocomplete?: boolean;
}
interface FormAttributes extends Attributes {
  action: string;
  method: string;
}
interface LabelAttributes extends Attributes {
  for?: string;
}
interface ImageAttributes extends Attributes {
  src: string;
  alt: string;
}
