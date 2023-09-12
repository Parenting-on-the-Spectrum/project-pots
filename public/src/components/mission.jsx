import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';


const Mission = (props) => {

  const sizes = {
    font: "1.1rem",
    pads: "1% 20%"
  }

  return (
    <Box >

<Box sx={{display: 'flex'}}>
<Typography fontSize={sizes.font} component="div" sx={{ flexGrow: 1 }} padding={'40px'} align="center">
        Parenting on the Spectrum is a non-profit organization dedicated
        to providing support and assistance to families with autistic children.
        Our mission is to empower parents and caregivers with the knowledge, resources,
        and community they need to navigate the unique challenges of raising a child on the autism spectrum.
        With a deep understanding of the complexities of autism and a commitment to fostering inclusivity and acceptance,
        we strive to enhance the lives of both children and their families.

        At Parenting on the Spectrum, we recognize that every child on the autism spectrum is unique,
        and we embrace a person-centered approach in our services. We believe in the importance of early intervention,
        personalized support, and evidence-based strategies to optimize each child's development and well-being.
        Our team of experienced professionals, including ABA therapists, psychologists, and educators,
        work collaboratively to design individualized plans and offer comprehensive programs
        that address the specific needs of each family we serve.</Typography>
        <Box sx={{paddingLeft: '50px'}}>
      <img src={props.pic} height="400px" style={{borderRadius: "50px"}}></img>
    </Box>
</Box>

    <div>


      <Typography fontSize={sizes.font} component="div" sx={{ flexGrow: 1 }} padding={sizes.pads} align="center">
        We understand that being a parent or caregiver of a child on the spectrum can be both
        rewarding and challenging. That's why we provide a wide range of support services
        designed to empower families. From educational workshops and counseling sessions to
        support groups and advocacy, we strive to create a nurturing and understanding
        environment where families can share experiences, gain knowledge,
        and build a strong support network. We are dedicated to promoting the well-being
        of parents and caregivers, recognizing that their own self-care is vital to effectively supporting their child.</Typography>


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
    </Box>
  )
}

export default Mission;