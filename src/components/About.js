import React, {useEffect, useRef, useState} from 'react';
import lb from './img/layback.jpeg'
import '../styles/About.css'

const Li = (props) => {
  return (
    <li className='list-item'>
      {props.value}
    </li>
  )
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

        // Calculate the distance from the element's top and bottom to the viewport
        const topDistance = rect.top;
        const bottomDistance = windowHeight - rect.bottom;

        // Calculate the opacity based on the distance from the viewport
        let opacity = 1;

        /* This creates the fade-in */
        if (topDistance > 0) {
          opacity = 1 - Math.abs(topDistance) / windowHeight;
        }

        /* This creates the fade-out */
        // if (bottomDistance > 0) {
        //   opacity = 1.2 - Math.abs(bottomDistance) / windowHeight;
        // }

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

        <div className='about-sub' id='experience'>
          <h1>Experience</h1>

          <div id='experience-inner'>
            <ul>
              <li className='sub-list'>
                <i className='job-title'>2yrs - Web Developer / Manager</i>
                <b className='job'> - Mountain West Wholesale</b>
                <ul className='sub-sub-list'>
                  <Li value='Managed website and internal real estate webapp development.'/>
                  <Li value='Designed and built Python webscraper for use with real estate webapp.'/>
                  <Li value='Managed multiple employees and 20+ subcontractors on a daily basis.'/>
                  <Li value='Increased sales 20%, sold average $75k/month.'/>
                </ul>
              </li>

              <li className='sub-list'>
                <i className='job-title'>4yrs - Foreman</i>
                <b className='job'> - Tile Ram</b>
                <ul className='sub-sub-list'>
                  <Li value='Performed and oversaw $3m+ of operations over 4 years.'/>
                  <Li value='Managed daily operations at site, keeping team production moving at optimal pace.'/>
                  <Li value='Managed employees and interacted with customers to demonstrate high standards and mitigate issues effectively.'/>
                </ul>
              </li>

              <li className='sub-list'>
                <i className='job-title'>1yr - Gearhead</i>
                <b className='job'> - Backcountry.com</b>
                <ul className='sub-sub-list'>
                  <Li value='Handled customer service and sales via phone and chat.'/>
                  <Li value='Resolved customer escalations with poise.'/>
                  <Li value='Ranked top 5 in sales every month worked.'/>
                  <Li value='Never missed a productivity quota.'/>
                </ul>
              </li>
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
