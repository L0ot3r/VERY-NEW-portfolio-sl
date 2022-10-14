import React from 'react';

const BtnMailTo = () => {
	const sendMailTo = () => {
		window.location.href = 'mailto:sebastien.leoville@gmail.com';
	};

	return (
		<button
			type='button'
			onClick={() => sendMailTo()}
			className='h-9 w-[150px] flex items-center p-3 border text-red-800 border-red-800'
		>
			Envoyer un email
		</button>
	);
};

export default BtnMailTo;
