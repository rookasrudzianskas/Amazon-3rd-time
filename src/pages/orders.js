import React from 'react';
import Header from "../components/Header";
import db, {auth} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const Orders = ({orders}) => {

    const [user] = useAuthState(auth);
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

// basically node js
export async function getServerSideProps(context, user) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get the user logged in credentials in here
    const session = user;
    if(!session) {
        return {
            props: {}
        };
    }
    //will get all the ordrrs for the user
    // firebase db
    const stripeOrders = await db.collection('users').doc(await session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    // stripe orders in here
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({

        }))
    )

}
