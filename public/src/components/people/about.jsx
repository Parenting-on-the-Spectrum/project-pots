import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Individual from './individual.jsx';

const About = (props) => {

  return (
    <div >
      {props.people.map((i) => (
        <Individual postnomials={i.postnomials.join(', ')} name={i.name} picture={i.picture} key={i._id} />
      ))}
    </div>
  )
}

export default About;