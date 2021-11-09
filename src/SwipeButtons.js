import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

const SwipeButtons = () => {

    const history = useHistory();
    const handleHome = () => history.push('/home');
    const handleTrending = () => history.push('/trending');
    const handleSettings = () => history.push('/settings');
    const handleMatch = ()=> history.push('/match');

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__left" onClick={handleHome}>
        <ClearIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning" onClick={handleTrending}>
        <SportsEsportsIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={handleSettings}>
        <SettingsIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={handleMatch}>
        <DoneIcon fontSize="large" />
      </IconButton>

    </div>
  );
};

export default SwipeButtons;
