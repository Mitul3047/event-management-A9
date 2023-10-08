import { useLoaderData } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getstoredBooking } from "../../Utility/LocalStorage";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    const events = useLoaderData();
    const [eventBooked, setEventBooked] = useState([]);

    useEffect(() => {
        const storedBookingIds = getstoredBooking();
        if (events.length > 0) {
            const bookedEvent = [];
            for (const id of storedBookingIds) {
                const event = events.find(event => event.id === id);
                if (event) {
                    bookedEvent.push(event);
                }
            }
            setEventBooked(bookedEvent);
        }
    }, [events]);

    return (
        <div>
            <Navbar />
            <div>
                <div className="">
                    <img className="h-[80vh] w-full" src="https://i.ibb.co/D9M46YQ/adi-goldstein-Hli3-R6-LKibo-unsplash.jpg" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {eventBooked.length === 0 ? (
                        <p className="text-center text-purple-500
                         text-4xl col-span-3 py-10">No Booking Events</p>
                    ) : (
                        eventBooked.map(event => (
                            <DashboardCard event={event} key={event.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
