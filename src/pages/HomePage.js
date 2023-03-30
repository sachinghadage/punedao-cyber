import React, { Fragment } from 'react'
import {HeroSection} from '../components/HeroSection'
import {TimeAndPlace} from '../components/TimeAndPlace'
import {Speakers} from '../components/Speakers'
import {Applications} from '../components/Applications'
import {ParallaxEffect} from '../components/ParallaxEffect'
import {TimeLine} from '../components/TimeLine'
import {KeyPoints} from '../components/KeyPoints'
import {Sponsorships} from '../components/Sponsorships'
export const HomePage = () => {
  return (
    <Fragment>
<HeroSection/>
<TimeAndPlace/>
<Speakers/>
<ParallaxEffect/>
<Applications/>
<KeyPoints/>
<TimeLine/>
<Sponsorships/>
     </Fragment>
  )
}
