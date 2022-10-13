import React from 'react';
import { DiReact, DiFirebase, DiZend } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';
import { SiNextdotjs, SiAdobephotoshop } from 'react-icons/si';

const Technologies = () => {
	return (
		<div id='tech' className='pt-2'>
      <div className='section md:mt-[140px]'>
				<h3 className='section-title'>Technologies</h3>
      </div>
			<div className='section'>
				<p className='section-text'>
					Mon expérience acquise au fil des projets durant mon apprentissage me
					permet de mieux appréhender les différentes technologies dans le
					domaine du Front-End, tout en ayant les connaissances nécessaire en
					Back-end pour pouvoir vous proposer une prestation unique et un projet
					complet.
				</p>
				<ul className='tech-list'>
					<li className='tech-list-item'>
						<div className='tech-icons-container'>
							<DiReact size='2.5rem' />
							<SiNextdotjs size='2rem' />
						</div>
						<div className='tech-text-container'>
							<h4 className='tech-text-title'>Front-End</h4>
							<p className='tech-text-p'>
								Expérience avec
								<br />
								React.js et Next.js
							</p>
						</div>
					</li>
					<li className='tech-list-item'>
						<div className='tech-icons-container'>
							<DiFirebase size='2.5rem' />
						</div>
						<div className='tech-text-container'>
							<h4 className='tech-text-title'>Back-End</h4>
							<p className='tech-text-p'>
								Expérience avec
								<br />
								Node.js et Database
							</p>
						</div>
					</li>
					<li className='tech-list-item'>
						<div className='tech-icons-container'>
							<CgFigma size='1.5rem' />
							<SiAdobephotoshop size='1.5rem' />
						</div>
						<div className='tech-text-container'>
							<h4 className='tech-text-title'>UI/UX</h4>
							<p className='tech-text-p'>
								Expérience avec
								<br />
								Des outils tel que Figma, AI et Photoshop etc..
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Technologies;
