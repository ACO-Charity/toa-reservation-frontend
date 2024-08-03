import '../ReservationWorkshop.scss'

function FormField({label, type, name, placeholder}) {
    return (
        <div className="form-field">
            {type === 'checkbox' ? (
                <label className="checkbox-label">
                    <input type={type} name={name} className="checkbox-input"/>
                    <span className="checkbox-text">{label}</span>
                </label>
            ) : (
                <>
                    <label htmlFor={name}>{label}:</label>
                    <input type={type} name={name} id={name} placeholder={placeholder}/>
                </>
            )}
        </div>
    );
}

export default FormField;