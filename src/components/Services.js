import React from 'react';
import Title from './Title';
import Service from './Service';
import {services} from '../data';

function Services() {
  const renderedServices = services.map((service) => {
    return <Service key={service.id} {...service} />;
  });
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>{renderedServices}</div>
    </section>
  );
}

export default Services;

