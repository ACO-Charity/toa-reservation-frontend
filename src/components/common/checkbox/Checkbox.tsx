import './Checkbox.scss';

export interface CheckboxProps {
    label?: string;
    value?: boolean;
    onChange: (value: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {

    const toggleCheckbox = () => {
        props.onChange(!props.value);
    };

    return (
        <div className="aco-checkbox">
            <label>
                <input type="checkbox" checked={props.value} onChange={toggleCheckbox}/>
                {props.label}
            </label>
        </div>
    );
};

export default Checkbox;