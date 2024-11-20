import Logo1 from "/images/Logo01.png";
import Logo2 from "/images/Logo02.png";
import Logo3 from "/images/Logo03.png";
import Logo4 from "/images/Logo04.png";
import Logo5 from "/images/Logo05.png";
import Logo6 from "/images/Logo06.png";
import Logo7 from "/images/Logo07.png";

export default function SectionClients() {
  return (
    <div className="flex flex-col gap-3 mb-5">
      <h2 className="text-center text-4xl font-bold text-[#4D4D4D]">Our Clients</h2>
      <p className="text-center text-[#89939E]">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-between py-14">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
        <img src={Logo7} alt="" />
      </div>
    </div>
  );
}
