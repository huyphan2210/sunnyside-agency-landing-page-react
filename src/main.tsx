import arrowDown from './assets/images/icon-arrow-down.svg'
import transformDesktop from './assets/images/desktop/image-transform.jpg'
import standOutDesktop from './assets/images/desktop/image-stand-out.jpg'

import graphicDesign from './assets/images/desktop/image-graphic-design.jpg'
import photography from './assets/images/desktop/image-photography.jpg'
import graphicDesignMobile from './assets/images/mobile/image-graphic-design.jpg'
import photographyMobile from './assets/images/mobile/image-photography.jpg'

import emily from './assets/images/image-emily.jpg'
import jenny from './assets/images/image-jennie.jpg'
import thomas from './assets/images/image-thomas.jpg'

import cone from './assets/images/desktop/image-gallery-cone.jpg'
import milkBottles from './assets/images/desktop/image-gallery-milkbottles.jpg'
import orange from './assets/images/desktop/image-gallery-orange.jpg'
import sugarCubes from './assets/images/desktop/image-gallery-sugarcubes.jpg'

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
          <img src={transformDesktop} alt='Transform' loading='lazy'></img>
          <div className='text'>
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button type='button'>
              Learn more
              <div></div>
            </button>
          </div>
          <img src={transformDesktop} alt='Transform' loading='lazy'></img>
        </div>
        <div className='capability'>
          <img src={standOutDesktop} alt='Stand out' loading='lazy'></img>
          <div className='text'>
            <h2>Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            <button type='button'>
              Learn more
              <div></div>
            </button>
          </div>
        </div>
      </section>
      <section id='designs'>
        <div className='design'>
          <img src={graphicDesignMobile} alt='Graphic Design' loading='lazy'></img>
          <img src={graphicDesign} alt='Graphic Design' loading='lazy'></img>
          <div>
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
          </div>
        </div>
        <div className='design'>
          <img src={photographyMobile} alt='Photography' loading='lazy'></img>
          <img src={photography} alt='Photography' loading='lazy'></img>
          <div>
            <h2>Photography</h2>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </section>
      <section id='clients'>
        <h2>Client testimonials</h2>
        <div className='testimonials'>
          <div className='testimonial'>
            <img src={emily} alt='Emily R.' loading='lazy'></img>
            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <div className='detail'>
              Emily R.
              <label><small>Marketing Director</small></label>
            </div>
          </div>
          <div className='testimonial'>
            <img src={thomas} alt='Thomas S.' loading='lazy'></img>
            <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
            <div className='detail'>
              Thomas S.
              <label><small>Chief Operating Officer</small></label>
            </div>
          </div>
          <div className='testimonial'>
            <img src={jenny} alt='Jennie F.' loading='lazy'></img>
            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <div className='detail'>
              Jennie F.
              <label><small>Business Owner</small></label>
            </div>
          </div>
        </div>
      </section>
      <section id='creativeImgs'>
        <img src={milkBottles} alt='Milk Bottles' loading='lazy'></img>
        <img src={orange} alt='Orange' loading='lazy'></img>
        <img src={cone} alt='Cone' loading='lazy'></img>
        <img src={sugarCubes} alt='Sugar Cubes' loading='lazy'></img>
      </section>
    </div>
  )
}

export default Main;