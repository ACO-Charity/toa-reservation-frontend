import './TextInput.scss';
import {ChangeEvent} from 'react';

export interface TextInputProps {
    label: string;
    isEmail?: boolean;
    value?: string;
    onChange: (text: string) => void;
    error?: string;
    placeholder?: string;
}

const TextInput = (props: TextInputProps) => {

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    };

    return (
        <div className={`aco-textinput ${props.error && 'error'}`}>
            <label>{props.label}:</label>
            <input type={props.isEmail ? 'email' : 'text'}
                   value={props.value ?? ''}
                   placeholder={props.placeholder}
                   onChange={handleChangeText}/>
        </div>
    );
};

export default TextInput;