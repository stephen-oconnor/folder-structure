import React from 'react';
import { INavigationProps } from './INavigation';

const Navigation: React.FC<INavigationProps> = React.memo(function Navigation(props) {
	return <p>Nav</p>;
});

export default Navigation;
