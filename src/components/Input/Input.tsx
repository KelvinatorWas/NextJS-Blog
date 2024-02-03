import {
  combineStyles,
  mergeStyles,
} from "@/src/utils/objectStyleManipulation";
import { joinClass } from "@/src/utils/stringManiplation";

type ColorsType = {
  bgColor?: string;
  borderColor?: string;
  labelColor?: string;
};

const DefaultColors: ColorsType = {
  bgColor: "bg-lblue",
  labelColor: "text-black",
  borderColor: "border-tpurple",
};

type SizeType = "xs" | "sm" | "base" | "lg" | "xl";

const paddingSizes = {
  xs: "1",
  sm: "2",
  base: "3",
  lg: "4",
  xl: "5",
};

type InputProps = {
  placeholder: string;
  size?: SizeType;
  className?: string;
  hoverColors?: ColorsType;
  baseColors?: ColorsType;
  border?: string;
};

const Input = (props: InputProps) => {
  const finalSizeStyle = props.size
    ? `text-${props.size} m-${paddingSizes[props.size]}`
    : `text-sm p-${paddingSizes.sm}`;

  const finalBaseColors = !props.baseColors
    ? combineStyles(DefaultColors)
    : mergeStyles(DefaultColors, props.baseColors);

  const finalHoverColors = props.hoverColors
    ? mergeStyles(DefaultColors, props.hoverColors, true)
    : "";
  
  const finalStyleClass = `${finalBaseColors} ${finalHoverColors}`;
  const finalClassName = props.className || "";

  return (
    <input
      placeholder={props.placeholder}
      className={joinClass(finalSizeStyle, finalStyleClass, finalClassName)}
    />
  );
};

export default Input;
