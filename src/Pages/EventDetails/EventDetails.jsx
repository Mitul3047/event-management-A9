import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Swal from 'sweetalert2';
import { saveBooking, getstoredBooking } from "../../Utility/LocalStorage";

const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const event = events.find(event => event.id === parseInt(id));

    const handleBooking = () => {
        const storedBookings = getstoredBooking();
        const exists = storedBookings.find(eventId => eventId === parseInt(id));
        
        if (exists) {
            // Card has been added before
            Swal.fire(
                'Opps!',
                'Card has been added before!',
                'error'
            );
        } else {
            // Card has not been added before, add it to local storage
            saveBooking(parseInt(id));
            Swal.fire(
                'Good job!',
                'Card has been added successfully!',
                'success'
            );
        }
    }

    return (
        <div className="py-4">
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row md:px-0 px-4 justify-center items-center ">
            <img className="md:w-96  rounded-2xl" src={event.banner_img} alt="" />
            <button onClick={handleBooking} className="btn btn-secondary">Book Now</button>
            </div>
        </div>
    );
};

export default EventDetails;
