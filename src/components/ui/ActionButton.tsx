import { ReactNode } from "react";

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className: string;

}

const ActionButton = ({ children, className = 'bg-[#4661E6]', ...rest }: Props) => {
  return <button {...rest} className={`w-[9rem] h-[2.75rem]  flex justify-center items-center rounded-lg ${className}`}>
    <span className="text-[.8125rem] sm:text-[.875rem] font-bold text-white">{children}</span>
    </button>;
};

export default ActionButton;
