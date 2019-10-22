import React from 'react';
import TextInput from '../../components/UI/TextInput/TextInput';

function App() {
	return (
		<div>
			<TextInput
				label={'First Name'}
				id={'first-name'}
				required={false}
				disabled={false}
				data-test={'hello'}
				placeholder={'Enter some text...'}
				spellCheck={true}
			/>
		</div>
	);
}

export default App;
