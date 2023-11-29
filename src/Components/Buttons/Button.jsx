function ButtonComponent({onClick = () => {}, label = "", className=""}){
    return <button  className={className} onClick={onClick} >{label}</button>
}
export default ButtonComponent;