import {useState} from 'react';
import {useShallow} from 'zustand/react/shallow';
import {useReservationStore} from '../../store/ReservationDataStore.ts';
import Button from '../common/button/Button.tsx';
import Checkbox from '../common/checkbox/Checkbox.tsx';
import './ReservationWorkshopForm.scss';
import TextInput from '../common/text-input/TextInput.tsx';

function ReservationWorkshopForm() {
    const {reservationData, updateReservationData} = useReservationStore(
        useShallow(store => ({reservationData: store.reservationData, updateReservationData: store.updateReservationData}))
    );
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const submitLabel = 'Jetzt für den Workshop anmelden';

    const handleChangePersonalInfo = (key: 'firstName' | 'lastName' | 'email') => {
        return (value: string) => {
            const newReservationData = {
                ...reservationData,
                [key]: value
            };
            updateReservationData(newReservationData);
        };
    };

    const submit = () => {
        console.debug('reservationData', reservationData);
        console.debug('privacyChecked', privacyChecked);
    };

    return (
        <div>
            <h2>Bitte gebe folgende Daten ein, um dich für den
                Workshop anzumelden</h2>
            <div className="form-fields">
                <TextInput label="Vorname" value={reservationData.firstName}
                           onChange={handleChangePersonalInfo('firstName')}/>
                <TextInput label="Nachname" value={reservationData.lastName}
                           onChange={handleChangePersonalInfo('lastName')}/>
                <TextInput label="E-Mail" isEmail value={reservationData.email}
                           onChange={handleChangePersonalInfo('email')}/>

                <Checkbox onChange={setPrivacyChecked}
                          value={privacyChecked}
                          label="Ich stimme  den Datenschutzbestimmungen von ACO Charity e.V. zu."/>
                <Button label={submitLabel} onClick={submit}/>
            </div>
        </div>

    );
}

export default ReservationWorkshopForm;

