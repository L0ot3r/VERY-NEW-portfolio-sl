import React, { useEffect, useState } from 'react';
import { BgAnim, Footer, Hero, Layout, Projects, Technologies } from './components';
import { client } from './utils/lib/client';

const App = () => {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    const fetchProjects = async () => {
      const query = `*[_type == 'project'] | order(_createdAt desc)`;
      const projects = await client.fetch(query)
      setProjects(projects)
    }
    fetchProjects()
  }, [])


	return (
		<Layout>
			<div className='section-grid'>
        <div className='section-flex'>
          <Hero />
        </div>
        <BgAnim className='hidden md:static' />
      </div>
      <Projects projects={projects} />
      <Technologies />

    <footer>
      <Footer />
    </footer>
		</Layout>
	);
};

export default App;
