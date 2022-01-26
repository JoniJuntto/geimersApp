import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { Paper } from '@material-ui/core';
import { useAuth,db } from "../firebase";
import { collection, setDoc, doc, getDoc, onSnapshot } from "@firebase/firestore";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const currentUser = useAuth();


  useEffect(
    () =>
        onSnapshot(collection(db, "users"), (snapshot) =>
            setPeople(snapshot.docs.map(doc => doc.data()))
        ),
    []
);

const getLikesData = async (direction, singlePerson) => {
  if(direction === 'right'){
  const docRef = doc(db, "likes", currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
      handleLike(docSnap.data(), singlePerson);
  } else {
      // doc.data() will be undefined in this case
      alert('EI KÄYTTÄJÄÄ');
  }
}else{
  console.log("nothing")
}
}

const handleLike = async (data, singlePerson) =>{
  const docRef = doc(db, "likes", currentUser.uid);
    if(Object.keys(data).length === 0){
      const payload = {
        id: currentUser.uid,
        liked:[
          singlePerson
        ]
      }
      await setDoc(docRef, payload);
    }else{
        const payload = {
            //Here's the info of the other person
            id: currentUser.uid,
            liked: [
              ...data.liked, singlePerson
            ]
        };
        await setDoc(docRef, payload);
      }
        
}

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => getLikesData(dir, person )}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <Paper className="paper">
                <h3>{person.name}</h3>
                <h2>{person.bio}</h2>
              </Paper>
              
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
