import { useEffect } from "react";
import { useState } from "react";
import EventCard from "./EventCard";


const EventCards = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('eventData.json')
            .then(r => r.json())
            .then(data => setEvents(data));
    }, [])
    return (
        <div className="text-center py-32">
            <h2>EventCards Cards</h2>
            <p> lor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum veniam unde aut reprehenderit fugiat dolore ducimus, iure saepe rem illum odio iste possimus vel quibusdam repudiandae minus animi natus doloremque a itaque!</p>
            <div className="grid w-full mx-auto px-2 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    events.map(event => (
                        <EventCard
                            key={events.id}
                            event={event}>
                        </EventCard>
                    ))
                }
            </div>
        </div>
    );
};

export default EventCards;