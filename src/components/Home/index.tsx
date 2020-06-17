import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import OakButton from '../../oakui/OakButton';
import './style.scss';
import { receiveMessage } from '../../events/MessageService';
import ProjectTile from './ProjectTile';
import TechnologyTile from './TechnologyTile';

const projectsCompleted = require('./projects_completed.json');
const projectsInprogress = require('./projects_inprogress.json');
const projectsPipeline = require('./projects_pipeline.json');
const technologies = require('./technologies.json');

interface Props {
  label?: string;
  history: any;
}
const sectionNames = ['intro', 'projects_completed', 'technologies'];

const Home = (props: Props) => {
  useEffect(() => {
    const { hash } = props.history.location;
    if (hash && document && document.getElementById(hash.substr(1))) {
      // if (hash.substr(1) !== 'intro') {
      setTimeout(() => {
        document
          .getElementById(hash.substr(1))
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      // }
    }
  }, [props.history.location.hash]);
  useEffect(() => {
    sectionNames.map(sectionName => {
      document
        .getElementById(sectionName)
        ?.addEventListener('mouseenter', () => {
          sectionNames.map(item => {
            if (item === sectionName) {
              document
                .getElementById(`link_${item}`)
                ?.classList.add('active-link');
            } else {
              document
                .getElementById(`link_${item}`)
                ?.classList.remove('active-link');
            }
          });
        });
    });
  }, []);
  useEffect(() => {
    receiveMessage().subscribe(event => {
      if (event.name === 'navigate') {
        console.log(event);
        setTimeout(() => {
          document
            .getElementById(event.data)
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
      }
    });
  }, []);

  return (
    <div className="home">
      <header>
        <div>
          <Navigation {...props} />
        </div>
      </header>

      <main>
        <section className="intro" id="intro">
          <div className="overlay">
            <div className="container">
              <div className="header">
                <h1>Open developer community</h1>
                <p className="subtitle">Knowledge should be free for all</p>
              </div>
              {/* <div className="main">
                <p>
                  Join us to learn programming in realtime. Build pages that
                  convert your traffic and leads into more business – even if
                  web design is not really your thing
                </p>
              </div> */}
              <div className="footer">
                <div className="call-to-action">
                  {/* <OakButton theme="primary" variant="animate none">
                    Join the community
                  </OakButton> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects completed" id="projects_completed">
          <div className="container">
            <div className="header">
              <h1>Completed projects</h1>
              <div className="underline" />
            </div>
            <div className="main">
              {projectsCompleted.map(project => {
                return <ProjectTile data={project} />;
              })}
            </div>
          </div>
        </section>
        <section className="projects inprogress" id="projects_inprogress">
          <div className="container">
            <div className="header">
              <h1>Ongoing projects</h1>
              <div className="underline" />
            </div>
            <div className="main">
              {projectsInprogress.map(project => (
                <ProjectTile data={project} />
              ))}
            </div>
          </div>
        </section>
        <section className="projects pipeline" id="projects_pipeline">
          <div className="container">
            <div className="header">
              <h1>Projects in pipeline</h1>
              <div className="underline" />
            </div>
            <div className="main">
              {projectsPipeline.map(project => (
                <ProjectTile data={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="technologies" id="technologies">
          <div className="container">
            <div className="header">
              <h1>Key languages</h1>
              <div className="underline" />
            </div>
            <div className="main">
              {technologies.map(technology => (
                <TechnologyTile data={technology} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
