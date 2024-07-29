import {create} from 'zustand';
import {WorkshopType} from '../enum/WorkshopType.ts';
import {ReservationData} from '../model/ReservationData.ts';

interface ReservationDataStore {
    reservationData: ReservationData;
    updateReservationData: (toUpdate: ReservationData) => void;
    toggleWorkshop: (workshopType: WorkshopType) => void;
}

const initialState: ReservationData = {selectedWorkshops: [], firstName: '', lastName: '', email: ''};

export const useReservationStore = create<ReservationDataStore>((set) => ({
    reservationData: structuredClone(initialState),
    updateReservationData: (toUpdate: ReservationData) => set(() => ({reservationData: toUpdate})),
    toggleWorkshop: (workshopType: WorkshopType) => set((prev) => {
        let workshops = prev.reservationData.selectedWorkshops;
        if (workshops.includes(workshopType)) {
            workshops = workshops.filter(workshop => workshop !== workshopType);
        } else {
            workshops.push(workshopType);
        }
        return {
            ...prev,
            reservationData: {
                ...prev.reservationData,
                selectedWorkshops: workshops
            }
        };
    })
}));