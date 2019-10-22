import React from 'react';
import { ITitleProps } from './ITitle';
import s from './Title.module.css';

const Title: React.FC<ITitleProps> = React.memo(function Title(props) {
	return <h1 className={s.title}>{props.title}</h1>;
});

export default Title;
