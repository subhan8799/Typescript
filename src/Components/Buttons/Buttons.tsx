import styled from 'styled-components';
interface button{
     name?: string
     onClick?: any
     className?: string,
     text?:string,
     disabled?: boolean,
     color?:string,
     borderColor?:string,
     backgroundcolor?:string,
     types?: string
}
const coloursList :any = {
    white: 'white' , yellow: 'yellow', gray: 'gray', blue:'blue', green:'green'
}
export const Signbtn =({backgroundcolor,borderColor,color,onClick,disabled,types, text}:button) =>{
    return(
        <MyButton backgroundcolor={backgroundcolor} borderColor={borderColor} color={color} onClick={onClick} disabled={disabled} types={types}>{text}</MyButton>
    )
}
const MyButton = styled.button<{borderColor?:string, backgroundcolor?:string, text?:string, color?:string, onClick?:any,disabled?:boolean , types?: string}>`
   color: ${(props: button) => props.color? coloursList[props.color] : 'white'};
   border-color:${(props: button) => props.borderColor?props.borderColor:'white'};
   background-color: grey;
   border-radius: 7px;
   width: 85px;
   height: 40px;
   margin: 13px 0em;
   background: 'red'
   text:${(props:button) => props.text}
   types: ${(props:button) => props.types? props.types :'button' }
`; 