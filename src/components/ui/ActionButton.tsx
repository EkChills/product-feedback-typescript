import { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className: string;
  clickAction?:() => void
  defVal?:boolean;
}

const ActionButton = ({ children,defVal, className = 'bg-[#4661E6]', clickAction, ...rest }: Props) => {
  return <button onClick={clickAction} {...rest} className={` h-[2.75rem]  ${defVal ? 'w-[9rem]' : null} flex justify-center items-center rounded-lg ${className}`}>
    <span className="text-[.8125rem] sm:text-[.875rem] font-bold text-white">{children}</span>
    </button>;
};

export default ActionButton;
