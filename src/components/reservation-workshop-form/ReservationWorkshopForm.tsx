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
                <FormField label="Ich stimme den AGB und den Datenschutzbestimmungen von ACO Charity e.V. zu."
                           type="checkbox"
                           name="terms"/>
                <input type="submit" value="Jetzt für den Workshop anmelden"/>
            </form>
        </div>

    );
}

export default ReservationWorkshopForm;

