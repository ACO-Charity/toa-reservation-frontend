import '../workshop-description/WorkshopDescription.scss'
import '../reservation-workshop-form/form-field/FormField.tsx'
import FormField from "./form-field/FormField.tsx";

function ReservationWorkshopForm() {

    return (
        <div>
            <h2>Bitte gebe folgende Daten ein, um dich für den
                Workshop anzumelden</h2>
            <form>
                <FormField label="Vorname*" type="text" name="vorname" placeholder="z.B. Max"/>
                <FormField label="Nachname*" type="text" name="nachname" placeholder="z.B. Mustermann"/>
                <FormField label="E-Mail*" type="email" name="email" placeholder="z.B. max.mustermann@mail.de"/>
                <FormField label="Ich stimme den Datenschutzbestimmungen von ACO Charity e.V. zu."
                           type="checkbox"
                           name="terms"/>
                <button type="submit">Jetzt für den Workshop anmelden</button>
            </form>
        </div>

    );
}

export default ReservationWorkshopForm;

