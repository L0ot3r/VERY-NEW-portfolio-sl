import React from 'react';

const BtnMailTo = ({title}) => {
	const sendMailTo = () => {
		window.location.href = 'mailto:sebastien.leoville@gmail.com';
	};

	return (
		<button
			type='button'
			onClick={() => sendMailTo()}
			className='nav-link'
		>
			{title}
		</button>
	);
};

export default BtnMailTo;
