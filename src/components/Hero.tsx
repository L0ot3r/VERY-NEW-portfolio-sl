import React from 'react';
import { BtnMain } from '../components';

const Hero = () => {
	return (
		<div className='section-flex'>
			<div className='section-left'>
				<h2 className='section-title'>
					Bienvenue sur <br />
					Mon Portfolio Personnel
				</h2>
				<p className='section-text'>
					Mon objectif principal est d&apos;associer ma passion pour
					les technologies et le code, qui me fascinent depuis ma decouverte de
					l&apos;informatique pendant mes jeunes années, à mon envie de fournir
					le service dont vous avez besoin pour développer de votre activité.
				</p>

				<BtnMain 
					title='En savoir plus' 
					onClick={() => window.open(
						'https://github.com/L0ot3r',
						'_blank',
						'noopener,noreferrer'
					)}
					style='btn-back w-full sm:w-[262px]
					h-8 sm:h-[64px]'
				/>
			</div>
		</div>
	);
};

export default Hero;
