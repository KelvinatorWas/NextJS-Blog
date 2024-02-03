import {
  combineStyles,
  mergeStyles,
} from "@/src/utils/objectStyleManipulation";
import { joinClass } from "@/src/utils/stringManiplation";
import { ChangeEvent } from "react";

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

type TextareaProps = {
  placeholder: string;
  size?: SizeType;
  className?: string;
  baseColors?: ColorsType;
  border?: string;
  resize?: boolean;
  getValue?: (value: string) => void;
  setValue?: string;
};

const Textarea = (props: TextareaProps) => {
  const finalSizeStyle = props.size
    ? `text-${props.size} m-${paddingSizes[props.size]}`
    : `text-sm p-${paddingSizes.sm}`;

  const finalBaseColors = !props.baseColors
    ? combineStyles(DefaultColors)
    : mergeStyles(DefaultColors, props.baseColors);

  const finalStyleClass = `${
    props.resize ? (props.resize ? "" : "resize-none") : "resize-none"
  } ${finalBaseColors}`;
  const finalClassName = props.className || "";

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!props.getValue) return;

    props.getValue(e.target.value);
  };

  return (
    <textarea
      placeholder={props.placeholder}
      className={joinClass(finalSizeStyle, finalStyleClass, finalClassName)}
      onChange={onChange}
      value={props.setValue}
    />
  );
};

export default Textarea;
