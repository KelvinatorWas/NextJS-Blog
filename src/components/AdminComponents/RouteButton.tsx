import Link from "next/link";

type BaseColorsType = {
  bgColor?: string;
  borderColor?: string;
  labelColor?: string;
};

type HoverColorsType = {
  hoverBgColor?: string;
  hoverBorderColor?: string;
  hoverLabelColor?: string;
};

type RouteButtonProps = {
  label: string;
  baseColors?: BaseColorsType;
  hoverColors?: HoverColorsType;
  href?: string;
};

const DefaultBaseColors: BaseColorsType = {
  bgColor: "bg-lblue",
  labelColor: "text-black",
  borderColor: "border-tpurple",
} 

const DefaultHoverColors: HoverColorsType = {
  hoverBgColor: "bg-lblue",
  hoverLabelColor: "text-black",
  hoverBorderColor: "border-tpurple",
} 


const compareProps =  <T extends Record<string, any>>(a:T, b:T) => {
  const aKeys = Object.keys(a); 
  const bKeys = Object.keys(b);
  let className:string[] = [];

  aKeys.forEach((v) => {
    const check = bKeys.includes(v);
    if (check && b.hasOwnProperty(v)) className.push(b[v]);
    else className.push(a[v]);

  })
  return className.join(" ");
}

const combineStyles = <T extends Record<string, string>>(styleObject:T) => {
  let className:string[] = [];

  for (const i in styleObject) className.push(i);
  
  return className.join(" ");
}


const RouteButton = ({
  label,
  baseColors,
  hoverColors,
  href,
}: RouteButtonProps) => { 
  const finalHref = href || "/$a";

  const finalBaseColors = !baseColors ? combineStyles(DefaultBaseColors) : compareProps(DefaultBaseColors, baseColors);
  const finalHoverColors = !hoverColors ? "" : compareProps(DefaultHoverColors, hoverColors);
  
  const finalStyleClass = `
    ${finalBaseColors} 
    ${finalHoverColors}
  `;

  return (
    <Link href={finalHref}>
    <div
      className="
      flex p-3 items-center h-12
      bg-lblue rounded-sm mt-3 
      border-b-2 border-tpurple
      "
      >
      <span className="flex font-bold text-sm select-none">{label}</span>
    </div>
    </Link>
  );
};

export default RouteButton;
