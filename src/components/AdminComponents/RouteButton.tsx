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
} 

const compareProps =  <T extends Record<string, any>>(a:T, b:T, action=false) => {
  const aKeys = Object.keys(a); 
  const bKeys = Object.keys(b);
  let className:string[] = [];

  aKeys.forEach((v) => {
    const check = bKeys.includes(v);
    if (check && b.hasOwnProperty(v) && action) className.push(`${b[v]}`);
    else if (check && b.hasOwnProperty(v) && !action) className.push(`${a[v]}`);

  })
  return className.join(" ");
}

const combineStyles = <T extends Record<string, string>>(styleObject:T) => {
  let className:string[] = [];

  for (const i in styleObject) className.push(styleObject[i]);
  
  return className.join(" ");
}


const RouteButton = ({
  label,
  baseColors,
  hoverColors,
  href,
}: RouteButtonProps) => { 
  const finalHref = href || "/$a";

  const finalBaseColors = !baseColors ? combineStyles(DefaultColors) : compareProps(DefaultColors, baseColors);
  const finalHoverColors = hoverColors ? compareProps(DefaultColors, hoverColors, true) : "";
  
  console.log("COLOR-HOVER", finalHoverColors)

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
