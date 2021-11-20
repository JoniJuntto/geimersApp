import React from "react";
import "./SwipeButtons.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from "@material-ui/core";


const SocialArray = () => {


  return (
    <div className="swipeButtons">

      <div>
        <FacebookIcon fontSize="large" />
        <Typography variant='p'>@GeimersApp</Typography>
      </div>
      <div>
        <InstagramIcon fontSize="large" />
        <Typography variant='p'>@GeimersApp</Typography>
      </div>

      <div>
        <TwitterIcon fontSize="large" />
        <Typography variant='p'>@GeimersApp</Typography>
      </div>

    </div>
  );
};

export default SocialArray;
