export interface ITextInputProps extends React.HTMLAttributes<HTMLInputElement> {
	id: string;
	required: boolean;
	label: string;
	disabled: boolean;
	name?: string;
	minlength?: number;
	maxlength?: number;
	size?: number;
	placeholder?: string;
	readOnly?: boolean;
	pattern?: string;
}
