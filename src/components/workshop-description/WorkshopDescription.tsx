import DescriptionDetails from "../form-description/description-details/DescriptionDetails.tsx";

function WorkshopDescription() {

    return (
        <>
            <div className="workshop-description">
                <h2>Wähle bitte mindestens einen Workshop aus</h2>
            </div>

            <div>
                <label>
                    <input type="checkbox"/>
                    <h3>Kimchi Workshop</h3>
                    <DescriptionDetails category="Beginn" detail="15:30 Uhr"/>
                    <DescriptionDetails category="Ende" detail="16:15 Uhr"/>
                    <DescriptionDetails category="Dauer" detail="45 Minuten"/>
                    <p>Tauchen Sie ein in die Welt des koreanischen Kimchi. Erfahren Sie alles über die
                        Fermentationsprozesse und kreieren Sie Ihr eigenes schmackhaftes Kimchi.</p>
                </label>
            </div>
        </>
    );
}

export default WorkshopDescription;