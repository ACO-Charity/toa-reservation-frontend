import {WorkshopType} from '../enum/WorkshopType.ts';

export interface ReservationData {
    firstName: string;
    lastName: string;
    email: string;
    selectedWorkshops: WorkshopType[];
}