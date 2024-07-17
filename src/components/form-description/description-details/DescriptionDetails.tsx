import './DescriptionDetails.scss';

export interface DescriptionDetailsProps {
    category: string;
    detail: string;
}

const DescriptionDetails = (props: DescriptionDetailsProps) => {
    return (
        <div className="description-details"><strong>{props.category}:</strong><span>{props.detail}</span></div>
    );
};

export default DescriptionDetails;

