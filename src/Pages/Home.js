import React from "react";
import Header from '../components/Header';
import SwipeButtons from '../components/SwipeButtons';
import TinderCards from '../components/TinderCards';


export default function Home(){
    return(
        <div>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}