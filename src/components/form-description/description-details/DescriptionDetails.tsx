import './DescriptionDetails.scss';
import {DescriptionDetail} from '../../../model/DescriptionDetail.ts';

const DescriptionDetails = (props: DescriptionDetail) => {
    return (
        <div className="description-details"><strong>{props.category}:</strong><span>{props.detail}</span></div>
    );
};

export default DescriptionDetails;

