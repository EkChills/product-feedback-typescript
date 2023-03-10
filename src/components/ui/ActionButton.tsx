import { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className: string;
  clickAction?:() => void
}

const ActionButton = ({ children, className = 'bg-[#4661E6]', clickAction, ...rest }: Props) => {
  return <button onClick={clickAction} {...rest} className={`w-[9rem] h-[2.75rem]  flex justify-center items-center rounded-lg ${className}`}>
    <span className="text-[.8125rem] sm:text-[.875rem] font-bold text-white">{children}</span>
    </button>;
};

export default ActionButton;
