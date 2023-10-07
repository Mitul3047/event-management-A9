import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getstoredBooking } from "../../Utility/LocalStorage";
import DashboardCard from "./DashboardCard";



const Dashboard = () => {
    const events = useLoaderData();
 const [eventBooked, setEventBooked] = useState([])

    useEffect(() => {
        const storedBookingIds = getstoredBooking();
        if (events.length > 0) {
            const bookedEvent = [];
            for (const id of storedBookingIds) {
                const event = events.find(event => event.id === id);
                if (event) {
                    bookedEvent.push(event)
                }
            }
            setEventBooked(bookedEvent)
        }
    }, [])

    console.log(events);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>Dashboard</h1>
                <div>
                    {
                        eventBooked.map(event =>( <DashboardCard
                        event={event} key={event.id}></DashboardCard>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;