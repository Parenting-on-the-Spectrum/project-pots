import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Providers from './providers.jsx';
import Community from './community.jsx'
import Services from './services.jsx';

export default function BasicAccordion(props) {
  const [commune, setCommune] = useState([]);
  const [provide, setProvide] = useState([]);
  const [service, setService] = useState([])

  const recs = () => {
    axios.get('/resources')
      .then((info) => {
        setCommune(info.data.community);
        setProvide(info.data.providers);
      })
      .catch((err) => err.stack)
  }

  useEffect(() => {
    recs();
  }, []);

  let lengths = () => {
    return commune.length === 0
    && provide.length === 0
    && service.length === 0;
  }

  return (
    lengths() ?
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      : <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Providers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Providers providers={provide} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Community Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Community community={commune} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Services services={service} />
          </AccordionDetails>
        </Accordion>
      </div>
  );
}