function ButtonComponent({onClick = () => {}, label = "", className="", disabled=() => {}}){
    return <button  className={className} onClick={onClick} disabled={disabled}>{label}</button>
}
export default ButtonComponent;