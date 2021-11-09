import React from "react";
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

export default function Home(){
    return(
        <div>
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}