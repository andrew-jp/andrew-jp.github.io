import React, {useEffect, useRef, useState} from 'react';
import lb from './img/layback.jpeg'
import '../styles/About.css'

import Job from './Job.js';

const About = () => {
  const targetRef = useRef(null);

  /** Fade-in with scroll for about section */
  useEffect(() => {
    const handleScroll = () => {
      const element = targetRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const topDistance = rect.top;
        let opacity = 1;
        if (topDistance > 0) {
          opacity = 1 - Math.abs(topDistance) / windowHeight;
        }
        element.style.opacity = opacity > 0 ? opacity : 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [btnName, setBtnName] = useState('Hide Content');
  const [visState, setVisState] = useState('visible');
  const minAbout = () => {
    if (btnName === 'Hide Content') {
      setVisState('hidden')
      setBtnName('Show Content')  
    } else {
      setVisState('visible')
      setBtnName('Hide Content')  
    }
  }

  return (
    <div
      className='about-content'
      id='about'
      style={{backgroundImage: `url(${lb})`}}
    >
      
      <div
        className='about-fade-in'
        ref={targetRef}
        style={{visibility: `${visState}`}}  
      >
        <div
          className='about-sub'
          id='about-me'
        >
          <h1>About me</h1>  
          <div className='about-me-inner'>
            <p>
              &emsp;&emsp;I'm a recent CS graduate in search of a career in software. I possess a wide range
              of skills, I'm an exceptional problem solver, and I'm easy to work with. My favorite
              language is Python, altough I love Java too. This site was built using Node.js/React.js.
              While I'm certainly capable of front-end work given a design, what I really enjoy is
              complex backend work.
            </p>
            <p>
              &emsp;&emsp;Outside of my career interests, I'm an avid climber, skier, and cyclist.
              I'm a big fan of Star Wars, and all sci-fi in general. I'm easy to get along with, 
              friendly, and great with teams.
            </p>
          </div>
        </div>

        <div className='about-sub' id='education'>
          <h1>Education</h1>

          <div id='experience-inner'>
            <ul>
              <Job
                time='2023'
                title='B.S. Computer Science'
                company='Utah Valley University'
                experience={[
                  'Cum Laude',
                  '3.6 GPA',
                  'Captone: built a compiler, assembler and virtual machine.',
                ]}
              />
            </ul>
          </div>
        </div>


        <div className='about-sub' id='experience'>
          <h1>Experience</h1>

          <div id='experience-inner'>
            <ul>
              <Job
                title='Web Developer'
                company='Mountain West Wholesale'
                time='3yrs'
                experience={[
                  'Built application utilizing Python, Selenium, and MongoDB to gather valuable foreclosure data.',
                  'Compiled and analyzed sales data to balance ordering by throughput – stocking more of what sells.',
                  'Developed and implemented streamlined warehouse processes to reduce waste and increase inventory tracking.',
                  'Built C#/SQL inventory manager to improve tracking and accountability.'
                ]}
              />

              <Job
                title='Foreman'
                company='Tile Ram'
                time='4yrs'
                experience={[
                  'Managed millions of dollars in demolition operations over 4 years. ',
                  'Oversaw daily operations at site, keeping team production moving at optimal pace',
                  'Reworked positions and workflow based on individual abilities and production targets. '
                ]}
              />

              <Job 
                title='Gearhead'
                company='Backcountry.com'
                time='1yr'
                experience={[
                  'Handled customer service and sales via phone and chat.',
                  'Resolved customer escalations with poise.',
                  'Ranked top 5 in sales every month worked.',
                  'Never missed a productivity quota.'
                ]}
              />

            </ul>
          </div>
        </div>


      </div>
      <button
        className='min-about-btn'
        onClick={minAbout}
      >
        {btnName}
      </button>
    </div>
  )
}

export default About
