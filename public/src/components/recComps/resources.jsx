import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Modal, Box } from "@mui/material";

import Providers from './providers.jsx';
import Community from './community.jsx';

const Resources = (props) => {

  return (
    <div>
      <Providers providers={props.resources.providers}/>
      <Community community={props.resources.community}/>
    </div>

  )
}

export default Resources;