'use client';

export default function Summary({ipAddress,isp,country,timeZone}){
    return(
        <>
        <div className=" md:divide-x-2 flex flex-col md:flex-row lg:flex-row flex-nowrap max-w-lg w-full bg-white justify-evenly p-7 rounded-xl absolute z-999 top-72">
            <div className="block w-full text-center md:text-left lg:text-left">
                <span className="block uppercase font-semibold text-xs text-dark-grey">ip addresss</span>
                <p className="font-bold text-very-dark-grey pt-2">{ipAddress}</p>
            </div>

            <div className="block w-full text-center md:text-left lg:text-left pl-2 md:pl-2 lg:pl-8">
                <span className="block uppercase font-semibold text-xs text-dark-grey">location</span>
                <p className="font-bold text-very-dark-grey pt-2">{country}</p>
            </div>

            <div className="block w-full text-center md:text-left lg:text-left pl-2 md:pl-2 lg:pl-8">
                <span className="block uppercase font-semibold text-xs text-dark-grey">timzone</span>
                <p className="font-bold text-very-dark-grey pt-2">{timeZone}</p>
            </div>

            <div className="block w-full text-center md:text-left lg:text-left pl-2 md:pl-2 lg:pl-8">
                <span className="block uppercase font-semibold text-xs text-dark-grey">isp</span>
                <p className="font-bold text-very-dark-grey pt-2">{isp}</p>
            </div>

        </div>
        </>
    )
}