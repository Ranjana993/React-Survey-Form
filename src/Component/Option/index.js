const Option = () => {
    return (
        <>
            {/* <p/> </p> */}
            Choose To Pay :
            <select style={{
                border: "none",
                borderBottom: "1px solid grey",
                width: "9rem"
            }}>
                <option value=""></option>
                <option value=" Credit Card">Credit Card</option>
                <option value=" Debit Card">Debit Card</option>
                <option value=" HathWala Card">HathWala Card</option>

            </select><br />
        </>

    )
}
export default Option;