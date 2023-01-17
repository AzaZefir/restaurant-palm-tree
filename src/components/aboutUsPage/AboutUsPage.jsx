import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const AboutUsPage = () => {
  return (
    <div class="wrapper">
      <Header/>
      <main>
        <section class="about d-flex">
          <span class="about-greeting">About us</span>
        </section>
        <section class="about-info">
          <div class="container">
            <div class="about-info_top d-flex">
              <img src="./image/about-page-firstPic.png" alt="" />
              <div>
                <span>Идея создания</span>
                <p>
                  Dreams, he found himself transformed in his bed into a horrible vermin. He lay on
                  his armour-like back, and if he lifted his head a little .
                </p>
                <p>
                  Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
                  sustainable try-hard brooklyn authentic live-edge. Showed a lady fitted out with a
                  fur hat and fur boa who sat upright, raising a heavy fur muff thatcovered the
                  whole of her lower arm towards the viewer.
                </p>
              </div>
            </div>
            <div class="about-info_bottom d-flex">
              <img src="./image/about-page-secondPic.png" alt="" />
              <div>
                <span>Основатель</span>
                <p>
                  Dreams, he found himself transformed in his bed into a horrible vermin. He lay on
                  his armour-like back, and if he lifted his head a little .
                </p>
                <p>
                  Humblebrag la croix, pok pok aesthetic fam flexitarian wayfarers health goth
                  sustainable try-hard brooklyn authentic live-edge. Showed a lady fitted out with a
                  fur hat and fur boa who sat upright, raising a heavy fur muff thatcovered the
                  whole of her lower arm towards the viewer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutUsPage