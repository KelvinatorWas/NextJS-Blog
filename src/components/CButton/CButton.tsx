'use client'
import { joinClass } from '@/src/utils/stringManiplation';
import css from './CButton.module.css'

type btnType = "red" | "yellow" | "green" | "white" | "blue" | "";
type outlineType = "ored" | "oyellow" | "ogreen" | "owhite" | "";


type CButtonProp = {
  label: string;
  className?: string;
  style?: btnType;
  onClick?: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const DefaultCButton:CButtonProp = {
  label: "",
  className: css.btn,
  style: "",
  onClick: undefined,
};

export const CButton = ({label, className, style, onClick}:CButtonProp) => {
  const btn = {
    ...DefaultCButton,
    label,
    style,
    onClick
  };

  return (
    <button
      className={joinClass(css.btn, className ? className : btn.className!, css[btn.style!])}
      onClick={(e) => btn.onClick ? btn.onClick(e) : () => {}}
    >
      {btn.label}
    </button>
  )
}
