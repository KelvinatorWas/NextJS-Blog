import {
  combineStyles,
  mergeStyles,
} from "@/src/utils/objectStyleManipulation";
import Link from "next/link";

type ColorsType = {
  bgColor?: string;
  borderColor?: string;
  labelColor?: string;
};

type RouteButtonProps = {
  label: string;
  baseColors?: ColorsType;
  hoverColors?: ColorsType;
  href?: string;
};

const DefaultColors: ColorsType = {
  bgColor: "bg-lblue",
  labelColor: "text-black",
  borderColor: "border-tpurple",
};

const RouteButton = ({
  label,
  baseColors,
  hoverColors,
  href,
}: RouteButtonProps) => {
  const finalHref = href || "/";

  const finalBaseColors = !baseColors
    ? combineStyles(DefaultColors)
    : mergeStyles(DefaultColors, baseColors);
  const finalHoverColors = hoverColors
    ? mergeStyles(DefaultColors, hoverColors, true)
    : "";

  const finalStyleClass = `${finalBaseColors} ${finalHoverColors}`;

  return (
    <Link href={finalHref}>
      <div
        className={`flex p-3 items-center h-12 ${finalStyleClass} rounded-sm mt-3 border-b-2`}
      >
        <span className="flex font-bold text-sm select-none">{label}</span>
      </div>
    </Link>
  );
};

export default RouteButton;
