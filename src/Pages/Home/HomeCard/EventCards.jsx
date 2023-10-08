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
            <h2 className="text-purple-500 text-4xl">Our Events</h2>
            <p className="text-center py-10 text-gray-500">
                Planning and executing social events requires a keen eye for detail and a passion for creating unforgettable moments. Our dedicated team at [Your Event Management Company Name] specializes in curating a wide range of social gatherings, from weddings and birthdays to corporate parties and community gatherings. With years of experience, we meticulously coordinate every aspect of your event, from venue selection and décor to entertainment and catering.
            </p>

            <div className="grid w-full mx-auto px-2 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    events.map(event => (
                        <EventCard
                            key={event.id}
                            event={event}>
                        </EventCard>
                    ))
                }
            </div>
        </div>
    );
};

export default EventCards;