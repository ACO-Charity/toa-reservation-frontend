import WorkshopCheckbox from './WorkshopCheckbox.tsx';
import './WorkshopDescription.scss'
import ReservationWorkshopForm from "../reservation-workshop-form/ReservationWorkshopForm.tsx";

function WorkshopDescription(): JSX.Element {
    const kimchiDetails = [
        {category: 'Beginn', detail: '15:30 Uhr'},
        {category: 'Ende', detail: '16:15 Uhr'},
        {category: 'Dauer', detail: '45 Minuten'},
    ];

    const dumplingsDetails = [
        {category: 'Beginn', detail: '16:25 Uhr'},
        {category: 'Ende', detail: '17:10 Uhr'},
        {category: 'Dauer', detail: '45 Minuten'},
    ];

    const noodlesDetails = [
        {category: 'Beginn', detail: '17:20 Uhr'},
        {category: 'Ende', detail: '18:05 Uhr'},
        {category: 'Dauer', detail: '45 Minuten'},
    ];

    return (
        <>
            <div className="workshop-background">
                <h2>Wähle bitte mindestens einen Workshop aus</h2>

                <WorkshopCheckbox
                    label="Kimchi Workshop"
                    details={kimchiDetails}
                    description="Tauchen Sie ein in die Welt des koreanischen Kimchi. Erfahren Sie alles über die Fermentationsprozesse und kreieren Sie Ihr eigenes schmackhaftes Kimchi."
                />
                <WorkshopCheckbox
                    label="Dumplings Workshop"
                    details={dumplingsDetails}
                    description="Lernen Sie die Geheimnisse der perfekten Dumplings kennen. Wir zeigen Ihnen, wie Sie die Teighüllen richtig zubereiten und füllen können."
                />
                <WorkshopCheckbox
                    label="Hand Pulled Noodles Workshop"
                    details={noodlesDetails}
                    description="Meistern Sie die Kunst der handgezogenen Nudeln, eine beeindruckende Technik der chinesischen Küche. In diesem Workshop lernen Sie die richtigen Handgriffe und Techniken, um elastische und gleichmäßige Nudeln zu ziehen."
                />
                <ReservationWorkshopForm/>
            </div>


        </>
    );
}

export default WorkshopDescription;