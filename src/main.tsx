import { useState } from 'react';

import arrowDown from './assets/images/icon-arrow-down.svg'
import transformDesktop from './assets/images/desktop/image-transform.jpg'
import standOutDesktop from './assets/images/desktop/image-stand-out.jpg'

import './Main.css';

function Main() {
  return (
    <div id='content'>
      <section id='heroSection'>
        <h1>We are creatives</h1>
        <img src={arrowDown} alt="Arrow Down"></img>
      </section>
      <section id='capabilities'>
        <div className='capability'> 
          <div className='text'>
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button type='button'>Learn more</button>
          </div>
          <img src={transformDesktop} alt='Transform' loading='lazy'></img>
        </div>
        <div className='capability'>
          <img src={standOutDesktop} alt='Stand out' loading='lazy'></img>
          <div className='text'>
            <h2>Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            <button type='button'>Learn more</button>
          </div>
        </div>
      </section>
      <section>
        Graphic design
        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.

        Photography
        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
      </section>
      <section>
        Client testimonials

        We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
        Emily R.
        Marketing Director

        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
        Thomas S.
        Chief Operating Officer

        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        Jennie F.
        Business Owner
      </section>
    </div>
  )
}

export default Main;