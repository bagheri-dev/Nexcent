export default function Helping () {
    return (
        <section className="flex items-center justify-between py-7 mb-5">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-[#4D4D4D]">Helping a local <br /> <span className="text-[#28CB8B]">business reinvent itself</span></h2>
                <p className=" text-[#89939E]">We reached here with our hard work and dedication</p>
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
                <div className="flex items-center gap-5">
                    <img src="/images/svgs/Icon-members.svg" alt="" />
                    <div>
                        <p className="text-2xl text-[#4D4D4D]">2,245,341</p>
                        <span className="text-[#717171]">Members</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <img src="/images/svgs/Icon-clubs2.svg" alt="" />
                    <div>
                        <p className="text-2xl text-[#4D4D4D]">46,328</p>
                        <span className="text-[#717171]">Clubs</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <img src="/images/svgs/Icon-event-bookings.svg" alt="" />
                    <div>
                        <p className="text-2xl text-[#4D4D4D]">828,867</p>
                        <span className="text-[#717171]">Event Booking</span>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <img src="/images/svgs/Icon-payments.svg" alt="" />
                    <div>
                        <p className="text-2xl text-[#4D4D4D]">1,926,436</p>
                        <span className="text-[#717171]">Payments</span>
                    </div>
                </div>
            </div>
        </section>
    )
}