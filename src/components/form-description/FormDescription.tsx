import DescriptionDetails from './description-details/DescriptionDetails.tsx';

function FormDescription() {

    return (
        <div className="form-description">
            <h1>Workshop Reservierung</h1>
            <p>Erleben Sie einen spannenden Nachmittag voller kulinarischer Entdeckungen und lernen Sie die Kunst der
                asiatischen Küche in unseren
                Workshops. Wir bieten drei intensive und praxisorientierte Workshops.</p>
            <h3>Zeitplan der Workshops</h3>
            <DescriptionDetails category="Datum" detail="12. Oktober 2024"/>
            <DescriptionDetails category="Beginn" detail="15:30 Uhr"/>
            <DescriptionDetails category="Dauer" detail="Jeweils 30 Minuten pro Workshop"/>
            <DescriptionDetails category="Pause" detail="10 Minuten zwischen den Workshops"/>
            <DescriptionDetails category="Ende" detail="18:00 Uhr"/>
        </div>
    );
}

export default FormDescription;

