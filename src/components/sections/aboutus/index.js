import React, {useRef, useEffect} from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import jasonwood from './img/jasonwood.png'
import './aboutus.scss'


const About = () => {

    // useEffect(() => {
    //     Events.scrollEvent.register('begin', function(to, element) {
    //         console.log('begin', arguments);
    //     });
       
    //     Events.scrollEvent.register('end', function(to, element) {
    //     console.log('end', arguments);
    //     });

    //     return () => {
    //         Events.scrollEvent.remove('begin');
    //         Events.scrollEvent.remove('end');
    //     }
    // })

//     const ref = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         console.log(entry)

//         if (entry.isIntersecting) {
//           //do your actions here
//           //entry.tra
//           console.log(entry.target.dataset.color)
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//   }, [ref]);

    return(
        <React.Fragment>
            <Element name="about" className="about" >
                <section className="section-item about"  id="about" data-color="grey">
                    <div className="about__box">
                        <div className="about__img">
                            <img src={jasonwood} alt=""/>
                        </div>
                        <div className="about__text">
                            <h2 className="about__title">about me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <strong>Jason Wood</strong>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="portfolio" className="portfolio" >
                <section className="section-item about"  id="about" data-color="grey">
                    <div className="about__box">
                        <div className="about__img">
                            <img src={jasonwood} alt=""/>
                        </div>
                        <div className="about__text">
                            <h2 className="about__title">about me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <strong>Jason Wood</strong>
                        </div>
                    </div>
                </section>
            </Element>
            <Element name="contact" className="contact" >
                <section className="section-item about"  id="about" data-color="grey">
                    <div className="about__box">
                        <div className="about__img">
                            <img src={jasonwood} alt=""/>
                        </div>
                        <div className="about__text">
                            <h2 className="about__title">about me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p><p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <strong>Jason Wood</strong>
                        </div>
                    </div>
                </section>
            </Element>
        </React.Fragment>
    )
}

export default About