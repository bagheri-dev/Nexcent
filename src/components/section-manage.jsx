import Membership from "/images/svgs/Icon-member.svg";
import NationalAssociations from "/images/svgs/Icon-national.svg";
import ClubsAndGroups from "/images/svgs/Icon-clubs.svg";

export default function Manage() {
  return (
    <section>
      <div className="flex flex-col gap-3 mb-5">
      <h2 className="text-4xl font-bold text-center text-[#4D4D4D]">Manage your entire community in a single system</h2>
      <p className="text-center text-[#89939E]">Who is Nextcent suitable for?</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 items-center justify-center text-center p-10">
          <img className="w-16 h-14" src={Membership} alt="" />
          <h3 className="text-3xl font-bold text-[#4D4D4D]">Membership Organisations</h3>
          <p className="text-[#89939E]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center text-center p-10">
          <img className="w-16 h-14" src={NationalAssociations} alt="" />
          <h3 className="text-3xl font-bold text-[#4D4D4D]">National Associations</h3>
          <p className="text-[#89939E]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center text-center p-10">
          <img className="w-16 h-14" src={ClubsAndGroups} alt="" />
          <h3 className="text-3xl font-bold text-[#4D4D4D]">Clubs And Groups</h3>
          <p className="text-[#89939E]">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </section>
  );
}
