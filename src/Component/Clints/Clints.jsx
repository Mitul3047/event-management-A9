import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Clints = () => {
    const [clints, setclints] = useState([]);

    useEffect(() => {
        fetch('clints.json')
            .then((r) => r.json())
            .then((data) => setclints(data));
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-purple-500 text-center text-4xl mb-32 ">Happy Clients</h2>
            <Marquee direction="left" autoFill="true" speed={60}>
                <div className="flex ">
                    {clints.map((clint) => (
                        <div key={clint.id} className=" w-96 pb-6 space-y-4 text-center bg-base-100 shadow-xl">

                            <div className="flex justify-center items-center">
                                <img className="w-60 h-60 rounded-full" src={clint.img} alt={clint.name} />
                            </div>
                            <div >
                                <h2 >{clint.name}</h2>
                                <p className="px-4 ">{clint.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Clints;
