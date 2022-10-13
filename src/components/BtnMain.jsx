import React from 'react';


const BtnMain = ({ title, onClick, style }) => {
	return (
		<div className={`${style}`}>
			{title}
			<button
				className='btn-front'
				onClick={onClick}
			>
				{title}
			</button>
		</div>
	);
};

export default BtnMain;
