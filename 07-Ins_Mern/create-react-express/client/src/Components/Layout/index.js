// import react components or needed files for displaying the book results
import React from 'react';

// need to first establish the container component
export function Container({ fluid, children }) {
	return (
		<div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
	);
}

// like bootstrap in now we need to establish the row then col
export function Row({ fluid, children }) {
	return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

// now set up the cols
export function Col({ size, children }) {
  return (<div className={size.split(' ').map(size => 'col-' + size).join(' ')> {children} </div>);
}
