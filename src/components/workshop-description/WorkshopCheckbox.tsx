import DescriptionDetails from '../form-description/description-details/DescriptionDetails';
import './WorkshopCheckbox.scss';

interface WorkshopCheckboxProps {
    label: string;
    details: { category: string; detail: string }[];
    description: string;
}

const WorkshopCheckbox = ({label, details, description}: WorkshopCheckboxProps) => {
    return (
        <div className="workshop-checkbox">
            <div className="workshop-checkbox-content">
                <input type="checkbox" className="checkbox-box"/>
                <h3>{label}</h3>
            </div>
            {details.map((detail, index) => (
                <DescriptionDetails key={index} category={detail.category} detail={detail.detail}/>
            ))}
            <p>{description}</p>

        </div>

    );
};

export default WorkshopCheckbox;