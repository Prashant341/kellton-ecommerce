import './form-input.style.scss'
const FormInput=({name,placeholder,type,handleChange,value})=>
{
    return(
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value?value:''}
        />
    )
}
export default FormInput