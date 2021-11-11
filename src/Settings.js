import { onSnapshot, collection } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import {db} from "./firebase";

export default function Settings() {

    const [users, setUsers] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "users"), (snapshot) =>
                setUsers(snapshot.docs.map(doc => doc.data()))
            ),
        []
    );


    return (
        <div>
            <h1>Omat asetukset</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.bio}</h2>
                </div>
            ))}
        </div>
    );
}