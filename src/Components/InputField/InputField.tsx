interface Input{
    value:string;
    label?:string;
    placeholder?:string;
    type:string;
    textColor?:string;
    borderColor?:string;
    id:string;
    className:string;
    onChange:any;
}
    const InputField = ({ value, label,className, borderColor, textColor,placeholder, type, onChange,id }:Input) => {
        return(
        <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
        value={value}
        type={type}
        className={className}
        id={id}
        placeholder={placeholder ?placeholder:'Please enter your text here'}
        style={{color: textColor? textColor : 'pink', borderColor: borderColor ? borderColor: '#8B0000'}}
        onChange={onChange}
        />
        </div>
    );
    };
export default InputField; 
