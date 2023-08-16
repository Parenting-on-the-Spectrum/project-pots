import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import Providers from './providers.jsx';
import Community from './community.jsx'

export default function BasicAccordion(props) {
  return (
    props.resources.length === 0 ?
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
            <Providers providers={props.resources.providers} />
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
            <Community community={props.resources.community} />
          </AccordionDetails>
        </Accordion>
      </div>
  );
}