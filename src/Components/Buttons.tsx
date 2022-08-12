interface button{
     name?: string
     onClick: any
     className?: string,
     text?:string
}
export const Signbtn =({name,onClick,className,text}:button) =>{
    return(
        <button onClick={onClick} className={className}>{text}</button>
    )
}