import FormDescription from '../components/form-description/FormDescription.tsx';
import WorkshopDescription from '../components/workshop-description/WorkshopDescription.tsx';
import './ToaFormular.scss';

function ToaFormular() {

    return (
        <div className="toa-formular">
            <FormDescription/>
            <WorkshopDescription/>
        </div>
    );
}

export default ToaFormular;
