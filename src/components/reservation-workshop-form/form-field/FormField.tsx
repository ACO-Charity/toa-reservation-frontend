function FormField({label, type, name}) {
    return (
        <div>
            <h4>{label}:</h4>
            <input type={type} name={name}/>
        </div>
    );
}

export default FormField;