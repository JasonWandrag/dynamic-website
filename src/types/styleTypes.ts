interface Padding {
  padding?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBlockEnd?: string;
  paddingBlockStart?: string;
  paddingInlineEnd?: string;
  paddingInlineStart?: string;
}
interface Border {
  borderBottomColor?: string;
  borderBottomStyle?: string;
  borderBottomWidth?: string;
  borderImageOutset?: string;
  borderImageRepeat?: string;
  borderImageSlice?: string;
  borderImageSource?: string;
  borderImageWidth?: string;
  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: string;
  borderRightColor?: string;
  borderRightStyle?: string;
  borderRightWidth?: string;
  borderTopColor?: string;
  borderTopStyle?: string;
  borderTopWidth?: string;
  borderBlockEndColor?: string;
  borderBlockEndStyle?: string;
  borderBlockEndWidth?: string;
  borderBlockStartColor?: string;
  borderBlockStartStyle?: string;
  borderBlockStartWidth?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderEndEndRadius?: string;
  borderEndStartRadius?: string;
  borderInlineEndColor?: string;
  borderInlineEndStyle?: string;
  borderInlineEndWidth?: string;
  borderInlineStartColor?: string;
  borderInlineStartStyle?: string;
  borderInlineStartWidth?: string;
  borderStartEndRadius?: string;
  borderStartStartRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
}
interface Outline {
  outlineColor?: string;
  outlineOffset?: string;
  outlineStyle?: string;
  outlineWidth?: string;
}
interface Margin {
  margin?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBlockEnd?: string;
  marginBlockStart?: string;
  marginInlineEnd?: string;
  marginInlineStart?: string;
}
interface Size {
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  resize?: string;
  aspectRatio?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
}
interface Box {
  display?: string;
  boxSizing?: string;
  visibility?: string;
  boxShadow?: string;
  opacity?: string;
}
interface Typography {
  lineBreak?: string;
  color?: string;
  direction?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontVariantCaps?: string;
  fontVariantEastAsian?: string;
  fontVariantLigatures?: string;
  fontVariantNumeric?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  tabSize?: string;
  textAlign?: string;
  textAlignLast?: string;
  textDecorationColor?: string;
  textDecorationLine?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  textIndent?: string;
  textOverflow?: string;
  textShadow?: string;
  textSizeAdjust?: string;
  textTransform?: string;
  verticalAlign?: string;
  whiteSpace?: string;
  wordBreak?: string;
  wordSpacing?: string;
  fontFeatureSettings?: string;
  fontKerning?: string;
  fontOpticalSizing?: string;
  fontPalette?: string;
  fontSynthesisSmallCaps?: string;
  fontSynthesisStyle?: string;
  fontSynthesisWeight?: string;
  fontVariationSettings?: string;
  textOrientation?: string;
  textRendering?: string;
  writingMode?: string;
  textAnchor?: string;
  textCombineUpright?: string;
  textDecorationSkipInk?: string;
  textEmphasisColor?: string;
  textEmphasisPosition?: string;
  textEmphasisStyle?: string;
  textUnderlineOffset?: string;
  textUnderlinePosition?: string;
}
interface FlexParent {
  justifyItems?: string;
  alignContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  columnCount?: string;
  columnGap?: string;
  columnSpan?: string;
  columnWidth?: string;
  rowGap?: string;
}
interface FlexChild {
  justifySelf?: string;
  order?: string;
  alignSelf?: string;
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
}
interface GridParent {
  gridAutoColumns?: string;
  gridAutoFlow?: string;
  gridAutoRows?: string;
  gridTemplateAreas?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  justifyItems?: string;
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  columnCount?: string;
  columnGap?: string;
  columnSpan?: string;
  columnWidth?: string;
  rowGap?: string;
}
interface GridChild {
  gridArea?: string;
  gridColumnEnd?: string;
  gridColumnStart?: string;
  gridRowEnd?: string;
  gridRowStart?: string;
  justifySelf?: string;
  order?: string;
  alignSelf?: string;
}
interface Position {
  position?: string;
  right?: string;
  top?: string;
  bottom?: string;
  left?: string;
  float?: string;
  zIndex?: string;
}
interface Background {
  backgroundAttachment?: string;
  backgroundClip?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOrigin?: string;
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  backgroundRepeatX?: string;
  backgroundRepeatY?: string;
  backgroundSize?: string;
  backgroundBlendMode?: string;
}
interface Animation {
  animation?: string;
  animationDelay?: string;
  animationDirection?: string;
  animationDuration?: string;
  animationFillMode?: string;
  animationIterationCount?: string;
  animationName?: string;
  animationPlayState?: string;
  animationTimingFunction?: string;
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
}
interface Table {
  borderCollapse?: string;
  captionSide?: string;
  emptyCells?: string;
  tableLayout?: string;
}
interface GeneratedContent {
  content?: string;
  counterIncrement?: string;
  counterReset?: string;
  quotes?: string;
}
interface Mouse {
  scrollBehavior?: string;
  scrollMarginBlockEnd?: string;
  scrollMarginBlockStart?: string;
  scrollMarginBottom?: string;
  scrollMarginInlineEnd?: string;
  scrollMarginInlineStart?: string;
  scrollMarginLeft?: string;
  scrollMarginRight?: string;
  scrollMarginTop?: string;
  scrollPaddingBlockEnd?: string;
  scrollPaddingBlockStart?: string;
  scrollPaddingBottom?: string;
  scrollPaddingInlineEnd?: string;
  scrollPaddingInlineStart?: string;
  scrollPaddingLeft?: string;
  scrollPaddingRight?: string;
  scrollPaddingTop?: string;
  scrollSnapAlign?: string;
  scrollSnapStop?: string;
  scrollSnapType?: string;
  scrollbarGutter?: string;
  cursor?: string;
  pointerEvents?: string;
  touchAction?: string;
}
interface Media {
  objectFit?: string;
  objectPosition?: string;
}
interface Transformation {
  perspective?: string;
  perspectiveOrigin?: string;
  transform?: string;
  transformOrigin?: string;
  backfaceVisibility?: string;
}
interface List {
  listStyleImage?: string;
  listStylePosition?: string;
  listStyleType?: string;
}
interface SVG {
  fill?: string;
  fillOpacity?: string;
  fillRule?: string;
  stroke?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeMiterlimit?: string;
  strokeOpacity?: string;
  strokeWidth?: string;
}
interface OtherStyles {
  backdropFilter?: string;
  backgroundBlendMode?: string;
  filter?: string;
}
