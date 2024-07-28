import {WorkshopType} from '../../enum/WorkshopType.ts';
import {DescriptionDetail} from '../../model/DescriptionDetail.ts';
import {WorkshopDetails} from '../../model/WorkshopDetails.ts';
import {useReservationData} from '../../store/ReservationDataStore.ts';
import DescriptionDetails from '../form-description/description-details/DescriptionDetails';
import './WorkshopCheckbox.scss';

interface WorkshopCheckboxProps {
    workshopDetail: WorkshopDetails;
}

const WorkshopCheckbox = ({workshopDetail}: WorkshopCheckboxProps) => {
    const {reservationData, toggleWorkshop} = useReservationData();
    const checked = reservationData.selectedWorkshops.includes(workshopDetail.type);

    const details: DescriptionDetail[] = [
        {category: 'Beginn', detail: workshopDetail.begin},
        {category: 'Ende', detail: workshopDetail.end},
        {category: 'Dauer', detail: workshopDetail.duration}
    ];

    const getLabelByWorkshopType = (workshopType: WorkshopType): string => {
        switch (workshopType) {
            case WorkshopType.KIMCHI:
                return 'Kimchi Workshop';
            case WorkshopType.DUMPLING:
                return 'Dumplings Workshop';
            case WorkshopType.PULLED_NOODLES:
                return 'Hand Pulled Noodles Workshop';
            default:
                return '';
        }
    };

    const toggleCheckbox = () => {
        toggleWorkshop(workshopDetail.type);
    };

    return (
        <div className="workshop-checkbox">
            <div className="workshop-checkbox-content">
                <input type="checkbox" className="checkbox-box"
                       onChange={toggleCheckbox}
                       checked={checked}/>
                <h3>{getLabelByWorkshopType(workshopDetail.type)}</h3>
            </div>
            {details.map((detail, index) => (
                <DescriptionDetails key={index} category={detail.category} detail={detail.detail}/>
            ))}
            <p>{workshopDetail.description}</p>

        </div>

    );
};

export default WorkshopCheckbox;