import React from 'react'
import BestCard from "./BestCard"
import './Best.css'

const Best = () => {
    return (
        <section className='featured background'>
        <div className='container'>
        <div className='heading'>
        <h1>Featured Property Types </h1>
        <p>Find All Type of Property.</p>
      </div>
          <BestCard/>
        </div>
      </section>
    )
}

export default Best
