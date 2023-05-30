
import lb from './img/layback.jpeg'
import React, {useEffect, useRef} from 'react';

const Li = (props) => {
  return (
    <li className='listItem'>
      {props.value}
    </li>
  )
}
const About = () => {
  const targetRef = useRef(null);

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

        if (topDistance < 0) {
          opacity = 1.25 - Math.abs(topDistance) / windowHeight;
        } else if (bottomDistance < 0) {
          opacity = 1.25 - Math.abs(bottomDistance) / windowHeight;
        }

        element.style.opacity = opacity > 0 ? opacity : 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      className='content'
      id='about'
      style={{backgroundImage: `url(${lb})`}}
    >
    
    <div ref={targetRef} className='fade-in'>

      <div
        className='about-sub'
        id='experience'>
        <h2>
          Experience
        </h2>

        <ul>
          <li className='sub-list'>
            <i className='job-title'>6mo - Systems Engineer Intern</i>
            <b className='job'> - Rapid Reboot</b>
            <ul>
              <Li value='Software and hardware testing.'/>
              <Li value='Assembly and repair of medical devices.'/>
              <Li value='Designed and prototyped custom CMS.'/>
            </ul>
          </li>

          <li className='sub-list'>
          <i className='job-title'>2yrs - Web Developer & General Manager</i>
            <b className='job'> - Mountain West Wholesale</b>
            <ul>
              <Li value='Website and internal webapp development.'/>
              <Li value='Designed and built python webscraper for use with real estate tracker.'/>
              <Li value='Managed employees and subcontractors on a daily basis.'/>
              <Li value='Improved sales 25% and implemented improved inventory systems.'/>

            </ul>
          </li>

          <li className='sub-list'>
            <i className='job-title'>4yrs - Foreman</i>
            <b className='job'> - Irving Unlimited / Tile Ram</b>
            <ul>
              <Li value='Software and hardware testing.'/>
              <Li value='Assembly and repair of medical devices.'/>
              <Li value='Designed and prototyped custom CMS.'/>
            </ul>
          </li>

          <li className='sub-list'>
            <i className='job-title'>1yr - Gearhead</i>
            <b className='job'> - Backcountry.com</b>
            <ul>
              <Li value='Software and hardware testing.'/>
              <Li value='Assembly and repair of medical devices.'/>
              <Li value='Designed and prototyped custom CMS.'/>
            </ul>
          </li>

        </ul>
      </div>

      <div className='about-sub' id='about-me'>
        <h2>
          About me
        </h2>
        <p>
          I'm a recent CS Graduate. I'm interested in all things
          digital. I like web development, high performance computing,
          and video games. This is my webpage that I made using React.
          As you can see it is pretty cool. I'm going to test things out
          and make this a great website.
        </p>
        <p>
          Outside of work and school, I'm interested in everything outdooors.
          I'm an active climber, cyclist, and backcountry skier. 
        </p>
      </div>

    </div>
    </div>
  )
}

export default About
