import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
    const { id, name, card_img, banner_img, price, short_description } = event;
    const imgStyle = {
        backgroundImage: `url(${card_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#000000B2',
        backgroundBlendMode: 'darken',

    };
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={card_img}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        $95.00
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    With plenty of talk and listen time, voice-activated Siri access, and an
                    available wireless charging case.
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/eventdetails/${id}`}>
                    <button
                        className="block w-full select-none rounded-lg btn bg-purple-500 text-white"
                        type="button"
                    >
                        Event Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventCard;