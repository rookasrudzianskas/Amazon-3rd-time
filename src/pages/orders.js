import React from 'react';
import Header from "../components/Header";
import {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Orders = ({orders}) => {

    const [user] = useAuthState(auth);
    console.log(user);
    const userDisplayName = `${user?.displayName ? user?.displayName : "Your"}`;

    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">{`${userDisplayName } ${" "} Orders 👇 `} </h1>
                {user ? (
                    <h2>x Orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 spacy-y-4">

                </div>
            </main>
        </div>
    );
};

export default Orders;

export
