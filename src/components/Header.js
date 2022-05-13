import React from 'react'
import './Header.css';
import meet from '../images/client-meet.svg';
import databiz from '../images/client-databiz.svg';
import maker from '../images/client-maker.svg';
import audiophile from '../images/client-audiophile.svg';

export default function Header() {
  return (
    <main className='header-main'>
      
     <div className='hero-img'>

       </div>
<div className='header-content'>

  <div className='header-upper' >

 
  <div   className='header-content-heading' >
    <h2>Make <br className='header-break'/> remote work</h2>
  </div>

  <div className='header-content-body'>
Get your team in sync. no matter your location. Streamline processes, create team rituals, and watch productivity soar.
  </div>

  <button className='header-content-btn'>
    Learn more
  </button>

  </div>

<div className='header-content-clients'>
<img  src={databiz} alt="client" />
<img  src={audiophile} alt="client" />
<img  src={meet} alt="client" />
<img  src={maker} alt="client" />
</div>
</div>
    </main>





  )
}
