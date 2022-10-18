import React from 'react';
import { BtnMain } from '.';
import CV from '../assets/Images/cv.pdf';

const Hero = () => {
	return (
		<div className='section-flex'>
			<div className='section-left'>
				<h2 className='section-title'>
					Sébastien Léoville <br />
					Vous accueil sur son Portfolio
					{/* Bienvenue sur <br />
					Mon Portfolio Personnel */}
				</h2>
				<p className='section-text'>
					Mon objectif principal est d&apos;associer ma passion pour les
					technologies et le code, qui me fascinent depuis ma decouverte de
					l&apos;informatique pendant mes jeunes années, à mon envie de fournir
					le service dont vous avez besoin pour développer de votre activité.
				</p>

				<div className='flex flex-col sm:flex-row gap-2 justify-between'>
					<BtnMain
						title='En savoir plus'
						onClick={() =>
							window.open(
								'https://github.com/L0ot3r',
								'_blank',
								'noopener,noreferrer'
							)
						}
						style={`btn-back w-full sm:w-[262px]
						h-8 sm:h-[54px]`}
					/>
					<a href={CV} target='_blank' rel='noopener, noreferrer'>
						<BtnMain
							title='Mon CV'
							style={`btn-back w-full sm:w-[150px]
						h-8 sm:h-[54px]`}
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
