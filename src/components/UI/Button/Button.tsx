import React from 'react';
import { IButtonProps } from './IButton';
import s from './Button.module.css';

const Button: React.FC<IButtonProps> = React.memo(function Button(props) {
	return (
		<button type={props.type} className={s.button} {...props}>
			{props.text}
		</button>
	);
});

export default Button;
