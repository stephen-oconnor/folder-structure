import React from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/UI/Button/Button';
import TextInput from '../../components/UI/TextInput/TextInput';

function App() {
	return (
		<div>
			<Title title={'Folder Structure'} />
			<Button type={'button'} text={'Click Me'} />
			<TextInput
				label={'First Name'}
				id={'first-name'}
				required={true}
				disabled={true}
				data-test={'hello'}
			/>
		</div>
	);
}

export default App;
