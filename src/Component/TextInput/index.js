// import "./Container/App.css"
const TextInput = (props) => {
    const { name, type, value, label, changeHandle } = props;

    const changeHandler = (e) => {
        changeHandle(e.target.name, e.target.value)
    }

    return (
        <>
            <label>{label} : </label>
            <input 
                style={{border:"none",borderBottom:"1px solid grey" }}
                name={name}
                type={type}
                value={value}
                onChange={changeHandler}
            /><br />
        </>
    )
}
export default TextInput;