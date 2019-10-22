import React from 'react';
import { ITextInputProps } from './ITextInput';
import s from './TextInput.module.css';

const TextInput: React.FC<ITextInputProps> = React.memo(function TextInput(props) {
	return (
		<React.Fragment>
			<label htmlFor={props.id} className={s.label}>
				{props.label}
			</label>
			<input type={'text'} className={s.input} id={props.id} {...props} />
		</React.Fragment>
	);
});

export default TextInput;
