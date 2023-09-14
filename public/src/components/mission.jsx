import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Fade';

const Mission = (props) => {

  const sizes = {
    font: "1.1rem",
    pads: "1% 20%"
  }

  return (
    <div >

      <Box sx={{ display: 'flex' }}>
        <Typography fontSize={sizes.font} component="div" sx={{ flexGrow: 1 }} padding={'40px'} align="center">
          Parenting on the Spectrum is a non-profit organization dedicated
          to providing support and assistance to families with autistic children.
          Our mission is to empower parents and caregivers with the knowledge, resources,
          and community they need to navigate the unique challenges of raising a child on the autism spectrum.
          We recognize that every child is unique, and believe in the importance of:
          <ul>
            <li>Early intervention</li>
            <li>Enhance the lives of both children and their families</li>
            <li>Maintaining a sense of dignity for each child</li>
            <li>Personalized support</li>
            <li>Evidence-based strategies</li>
            <li>Fostering inclusivity and acceptance</li>
            <li>A person-centered apprach to ABA</li>
          </ul>
        </Typography>
        <Box sx={{ paddingLeft: '50px' }}>
          <img src={props.pic} height="400px" style={{ borderRadius: "50px" }}></img>
        </Box>
      </Box>

      <Zoom in={true} style={{ transitionDelay: '3000ms' }}>
        <div>
          <Typography fontSize={sizes.font} component="div" sx={{ flexGrow: 1 }} padding={sizes.pads} align="center">
            As a non-profit organization, we are deeply committed to making our
            services accessible to all families, regardless of their financial circumstances.
            We actively seek partnerships and funding opportunities to ensure that cost is never
            a barrier to receiving the support and resources they need. Through community collaborations,
            grants, and the generosity of our supporters, we aim to provide affordable
            and high-quality services that positively impact the lives of families affected by autism.</Typography>

          <Typography fontSize={sizes.font} component="div" sx={{ flexGrow: 1 }} padding={sizes.pads} align="center">
            Parenting on the Spectrum is not just an organization; it is a community
            of individuals united by a common goal: to enhance the lives ASD children, and their families.
            We believe in the power of connection, and we actively foster a sense of
            belonging and understanding among our community members. By joining us,
            families gain access to a network of compassionate professionals, fellow parents,
            and individuals with lived experiences who are committed to walking this journey together,
            celebrating achievements, and providing unwavering support every step of the way.</Typography>
        </div>
      </Zoom>

    </div>
  )
}

export default Mission;