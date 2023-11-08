import React from 'react';
import { Typography, Modal, Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Fade';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Individual = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Zoom in={true} style={{ transitionDelay: `${props.delay}ms` }}>
      <Box sx={{ margin: '3%', justifyContent: 'center' }}>
        <img src={props.picture}
          alt={props.name} width="250" height="250" justify-content="center" style={{ borderRadius: '15px' }} ></img>
        <Card sx={{ minWidth: 275, borderRadius: '10px' }}>
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              {props.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.postnomials}
            </Typography>
            <Button><InfoOutlinedIcon onClick={handleOpen} /> </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Placeholder
                </Typography>
              </Box>
            </Modal>
          </CardContent>
        </Card>
      </Box>
    </Zoom>
  )
}

export default Individual;