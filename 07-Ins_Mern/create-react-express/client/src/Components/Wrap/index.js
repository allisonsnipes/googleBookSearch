// import react components or needed files for formatting the page

import React from 'react';

// using react bootstrap we need to have a wrapper just like the project
function Wrapper(props) {
	return (
		<div className="container" style={{ textAlign: 'center' }}>
			{' '}
			{props.children}{' '}
		</div>
	);
}

export default Wrapper;
