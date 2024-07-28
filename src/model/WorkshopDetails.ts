import {WorkshopType} from '../enum/WorkshopType.ts';

export interface WorkshopDetails {
    type: WorkshopType;
    description: string;
    begin: string;
    end: string;
    duration: string;
}