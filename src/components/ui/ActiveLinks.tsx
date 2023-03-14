import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductRequest } from "../../types/storeTypes";
// import {} from 'styled-components/cssprop'

interface Props extends React.ComponentPropsWithRef<'span'> {
  linkArray: ProductRequest[];
  text: string;
  className?:string
  tab?:string;
}

const ActiveLinks = ({linkArray,text,className,tab,...rest}:Props) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    if(text === tab)setActive(true)
    else setActive(false)
  }, [text,tab])
  return (
    <Wrapper active ={active} text={text} {...rest} className={`text-[.8125rem] link-active cursor-pointer font-bold ${tab === text ? 'text-[#3A4374]' : ' text-[hsl(231,33%,75%)]'} ${className}`}>
      {text} ({linkArray.length})
    </Wrapper>
  );
};

interface StyledProps {
  active:boolean;
  text:string;
}

const Wrapper = styled.span<StyledProps>`

    position: relative;

  &::after {
    position: absolute;
    content: "";
    left: -0.2rem;
    right: -0.2rem;
    top: 2.5rem;
    height: 4px;
    background-color: ${props  => props.active  ? props.text == 'in-progress' ? '#AD1FEA' : props.text === 'planned' ? '#F49F85' : '#62BCFA' : 'transparent'};
  }
`;

export default ActiveLinks;
