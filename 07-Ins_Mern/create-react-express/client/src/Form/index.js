// import react components or needed files for displaying form
import React from 'react';

function SeachForm(props) {
	// set up the parameter variables for the  props and
	let { query, handleInputChange, handleFormSubmit } = props;
	return (
		<form>
			<div className="form-group" />
			<input className="form-control" id="" />
			<div className="">
				<button onClick={handleFormSubmit} type="submit">
					Search
				</button>
			</div>
		</form>
	);
}

export default SeachForm;
