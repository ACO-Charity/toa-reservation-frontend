import '../workshop-description/WorkshopDescription.scss'
import '../reservation-workshop-form/form-field/FormField.tsx'
import FormField from "./form-field/FormField.tsx";

function ReservationWorkshopForm() {

    return (
        <div>
            <h2>Bitte gebe folgende Daten ein, um dich für den
                Workshop anzumelden</h2>
            <form>
                <FormField label="Vorname" type="text" name="vorname"/>
                <FormField label="Nachname" type="text" name="nachname"/>
                <FormField label="E-Mail" type="email" name="email"/>
            </form>
        </div>

    );
}

export default ReservationWorkshopForm;

