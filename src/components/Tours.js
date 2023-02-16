import React from 'react';
import Title from './Title';
import {tours} from '../data';
import Tour from './Tour';

function Tours() {
  const renderedTours = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} />;
  });

  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />

      <div className='section-center featured-center'>{renderedTours}</div>
    </section>
  );
}

export default Tours;
