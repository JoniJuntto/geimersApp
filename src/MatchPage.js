import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { Paper } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

function TinderCards() {

    const handleHome = () => history.push('/');
    const history = useHistory();
    const [people, setPeople] = useState([
        {
            name: "Anna Maxim",
            url: "https://images.unsplash.com/photo-1635248694749-a71de5139ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80",
            latestGame: 'Minecraft',
            bio: "Seikkailupelit miellyttävät!",
            nicknames: [{
                BattleNet: "Annawow92",
                Playstation: "AnnaPS5",
            }]
        },
        
    ]);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <Paper className="paper">
                                <h1>NEW FRIEND</h1>
                                <h2>{person.name}</h2>
                            </Paper>
                            
                        </div>
                        <div> 
                        <h1>Play with {person.name}</h1>
                        <h2>Here is {person.name}'s nicknames:</h2>
                        {person.nicknames.map((nick)=>(
                            <div>
                                <h3>Blizzard: {nick.BattleNet}</h3>
                                <h3>PSN: {nick.Playstation}</h3>
                            </div>
                        ))
                        
                        }

                        <IconButton className="swipeButtons__right" onClick={handleHome}>
                                <DoneIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </TinderCard>
                    
                ))}
            </div>
        </div>
    );
}

export default TinderCards;