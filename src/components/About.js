import React, {useEffect, useRef, useState} from 'react';
import lb from './img/layback.jpeg'
import '../styles/About.css'

import Job from './Job.js';


const List = (props) => {
  return (
    <li className='sub-list'>
    <i className='job-title'>{props.title}</i>
    <ul className='sub-sub-list'>
      {props.experience.map(exp => (
        <li className='list-item'>{exp}</li>
      ))}
    </ul>
  </li>
  );
}


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
              I'm a recent CS graduate in search of a career in environmental data science.
              I possess a wide range of skills, I'm an exceptional problem solver, and I'm easy to work with.
              I've spent a lot of my life in the outdoors, and I've gained a
              huge appreciation for our natural resources and environment, and hope to apply my skills
              in the field, specifically to the fields of Marine Biology and Oceanography.
              I'm currently in the job market, as well as applying to masters programs in Data Science.
            </p>
            <p>
              Outside of my career interests, I'm an avid climber, skier, and cyclist.
              I'm a big fan of Star Wars, and all sci-fi in general. I'm easy to get along with, 
              friendly, and great with teams. I was born in the Bay Area, but moved to Utah when I was young
              and have been here ever since. While the world class climbing and skiing has spoiled me,
              my childhood experiences at the Monterey Bay Aquarium had a deep and lasting impact on me.
              They're what drive me towards ocean science, even now.
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
                ]}
              />

              <List
                title='Projects'
                experience={[
                  'Captone - built a compiler, assembler and virtual machine.',
                  'Python data analysis of 20 years of Iron Man Championship data.',
                  'SQL database design and construction.',
                  '4 player chess - built in Python.'
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
                title='Data Engineer and Manageer'
                company='Mountain West Wholesale'
                time='3yrs'
                experience={[
                  'Built application utilizing Python, Selenium, and MongoDB to gather valuable foreclosure data.',
                  'Compiled and analyzed sales data to balance ordering by throughput – stocking more of what sells.',
                  'Developed and implemented streamlined warehouse processes to reduce waste and increase inventory tracking.',
                  'Boosted sales 15% qoq using modern web marketing tactics and toolkits.'
                ]}
              />

              <Job
                title='Foreman'
                company='Tile Ram'
                time='4yrs'
                experience={[
                  'Led commercial and residential demolition operations over 4 years in California, Utah, Nevada, and Idaho.',
                  'Oversaw daily operations at site, keeping team production moving at optimal pace',
                  'Reworked positions and workflow based on individual abilities and production targets.'
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
