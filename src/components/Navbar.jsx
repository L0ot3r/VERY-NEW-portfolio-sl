import React from 'react';

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import BtnMailTo from './BtnMailTo';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='nav-brand'>
				<a href='#top' className='text-[#f1f1f1] mb-1 flex items-center'>
					<DiCssdeck size='2.5rem' />{' '}
					<span className='text-3xl ml-1'>Portfolio</span>
				</a>
			</div>
			<div className='nav-links'>
				<li>
					<a href='#projects' className='nav-link'>
						Projets
					</a>
				</li>
				<li>
					<a href='#tech' className='nav-link'>
						Technos
					</a>
				</li>
				<li>
					<a href='#about' className='nav-link'>
						À Propos
					</a>
				</li>
				<li>
					<BtnMailTo title='Contact' />
				</li>
			</div>
			<div className='social-links'>
				<a
					className='social-icons mr-2'
					href='https://github.com/L0ot3r'
					target='_blank'
					rel='noopener noreferrer'
				>
					<AiFillGithub className='text-xl sm:text-[2rem]' />
				</a>
				<a
					className='social-icons mr-2'
					href='https://linkedin.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<AiFillLinkedin className='text-xl sm:text-[2rem]' />
				</a>
				<a
					className='social-icons'
					href='https://instagram.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					<AiFillInstagram className='text-xl sm:text-[2rem]' />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
