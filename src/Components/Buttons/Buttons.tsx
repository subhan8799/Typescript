import styled from 'styled-components'
interface button{
     name?: string
     onClick?: any
     className?: string,
     text?:string,
     disabled?: any
}
export const Signbtn =({name,onClick,className,text,disabled}:button) =>{
    return(
        <MyButton onClick={onClick} disabled={disabled}>{text}</MyButton>
    )
}
const MyButton = styled.button`
   color: white;
   border-radius: 7px;
   background-color: darkgray
 
`; 