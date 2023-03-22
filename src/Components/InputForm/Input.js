
function Input({ name, inputType, label, value, changeHandler}){
    return (
        <>
            <label htmlFor={`${name}-field`}>{`${label}:`}</label>
            <input
                name={`${name}-field ` }
                id={name}
                type={inputType}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </>
    );
}


export default Input;