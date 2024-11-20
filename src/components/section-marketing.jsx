import BtnPageNoBg from "./btnPage02";

export default function Marketing() {
  return (
    <section className="mb-5">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-center text-[#4D4D4D]">
          Caring is the new marketing
        </h2>
        <p className="text-center text-[#89939E]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who`s joining the community, read about
          how our community are increasing their membership income and lot`s
          more.
        </p>
      </div>
      <div className="flex gap-5 items-center mt-5">
        <div className="p-10 text-center text-[#717171]">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <BtnPageNoBg>Readmore</BtnPageNoBg>
        </div>
        <div className="p-10 text-center text-[#717171]">
            <p>What are your safeguarding responsibilities and how can you manage them?</p>
            <BtnPageNoBg>Readmore</BtnPageNoBg>
        </div>
        <div className="p-10 text-center text-[#717171]">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <BtnPageNoBg>Readmore</BtnPageNoBg>
        </div>
      </div>
    </section>
  );
}
