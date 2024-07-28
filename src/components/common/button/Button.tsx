import './Button.scss';

export interface ButtonProps {
    type?: 'primary' | 'secondary';
    label: string;
    onClick: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={`aco-btn ${props.type ?? 'primary'}`} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default Button;