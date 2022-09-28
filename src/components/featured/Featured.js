import React from 'react'

import './Featured.css'
import FeaturedCard from './FeaturedCard'


const Featured = () => {
    return (
        <section className='recent padding'>
        <div className='container'>
        <div className='heading'>
        <h1>Recent Property Listed </h1>
      </div>
          <FeaturedCard />
        </div>
      </section>
    )
}

export default Featured
