import DescriptionDetails from '../form-description/description-details/DescriptionDetails';

interface WorkshopCheckboxProps {
    label: string;
    details: { category: string; detail: string }[];
    description: string;
}

const WorkshopCheckbox: React.FC<WorkshopCheckboxProps> = ({label, details, description}) => {
    return (
        <div className="workshop-checkbox">
            <label>
                <input type="checkbox"/>
                <div className="workshop-checkbox-content">
                    <h3>{label}</h3>
                    {details.map((detail, index) => (
                        <DescriptionDetails key={index} category={detail.category} detail={detail.detail}/>
                    ))}
                    <p>{description}</p>
                </div>
            </label>
        </div>
    );
};

export default WorkshopCheckbox;