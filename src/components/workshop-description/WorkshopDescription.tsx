import {WorkshopType} from '../../enum/WorkshopType.ts';
import {WorkshopDetails} from '../../model/WorkshopDetails.ts';
import ReservationWorkshopForm from '../reservation-workshop-form/ReservationWorkshopForm.tsx';
import WorkshopCheckbox from './WorkshopCheckbox.tsx';
import './WorkshopDescription.scss';

function WorkshopDescription(): JSX.Element {
    const descriptions: WorkshopDetails[] = [
        {
            type: WorkshopType.KIMCHI,
            duration: '45 Minuten',
            begin: '15:30 Uhr',
            end: '16:15 Uhr',
            description: 'Tauchen Sie ein in die Welt des koreanischen Kimchi. Erfahren Sie alles über die Fermentationsprozesse und kreieren Sie Ihr eigenes schmackhaftes Kimchi.'
        },
        {
            type: WorkshopType.DUMPLING,
            duration: '45 Minuten',
            begin: '16:25 Uhr',
            end: '17:10 Uhr',
            description: 'Lernen Sie die Geheimnisse der perfekten Dumplings kennen. Wir zeigen Ihnen, wie Sie die Teighüllen richtig zubereiten und füllen können.'
        },
        {
            type: WorkshopType.PULLED_NOODLES,
            duration: '45 Minuten',
            begin: '17:20 Uhr',
            end: '18:05 Uhr',
            description: 'Meistern Sie die Kunst der handgezogenen Nudeln, eine beeindruckende Technik der chinesischen Küche. In diesem Workshop lernen Sie die richtigen Handgriffe und Techniken, um elastische und gleichmäßige Nudeln zu ziehen.'
        }
    ];

    return (
        <>
            <div className="workshop-background">
                <h2>Wähle bitte mindestens einen Workshop aus</h2>

                {
                    descriptions.map(detail => {
                        return <WorkshopCheckbox workshopDetail={detail} key={detail.type}/>;
                    })
                }
                <ReservationWorkshopForm/>
            </div>


        </>
    );
}

export default WorkshopDescription;