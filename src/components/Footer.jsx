import React from 'react';
import BtnMailTo from './BtnMailTo';

const Footer = () => {
	return (
		<div
			className='flex justify-center items-center p-6 text-black h-[120px] mt-14 bg-slate-900'
		>
			<BtnMailTo title='Envoyez moi un mail' />
		</div>
	);
};

export default Footer;
