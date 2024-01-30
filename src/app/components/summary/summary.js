

export default function Summary({ipAddress,isp,country,timeZone}){
    return(
        <>
        <div className="flex flex-nowrap max-w-3xl w-full bg-white justify-evenly p-7 rounded-xl">
            <div className="block w-full">
                <span className="block uppercase font-semibold text-xs text-dark-grey">ip addresss</span>
                <p className="font-bold text-very-dark-grey">{ipAddress}</p>
            </div>

            <div className="block w-full">
                <span className="block uppercase font-semibold text-xs text-dark-grey">location</span>
                <p className="font-bold text-very-dark-grey">{country}</p>
            </div>

            <div className="block w-full">
                <span className="block uppercase font-semibold text-xs text-dark-grey">timzone</span>
                <p className="font-bold text-very-dark-grey">{timeZone}</p>
            </div>

            <div className="block w-full">
                <span className="block uppercase font-semibold text-xs text-dark-grey">isp</span>
                <p className="font-bold text-very-dark-grey">{isp}</p>
            </div>

        </div>
        </>
    )
}