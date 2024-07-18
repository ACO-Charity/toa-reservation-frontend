import FormDescription from "../components/form-description/FormDescription.tsx";
import WorkshopDescription from "../components/workshop-description/WorkshopDescription.tsx";

function ToaFormular() {


    return (
        <>

            <h1>Workshop Reservierung</h1>
            <div className="container-box">
                <FormDescription/>
                <WorkshopDescription/>
            </div>
        </>
    )
}


export default ToaFormular
