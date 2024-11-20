import Logo1 from "/images/Logo01.png";
import Logo2 from "/images/Logo02.png";
import Logo3 from "/images/Logo03.png";
import Logo4 from "/images/Logo04.png";
import Logo5 from "/images/Logo05.png";
import Logo6 from "/images/Logo06.png";

export default function TimSmith() {
  return (
    <section className="flex items-center py-5 gap-5 mb-5">
      <div className="w-6/12">
        <img className="w-full" src="/public/images/svgs/tesla.svg" alt="" />
      </div>
      <div className="w-full space-y-5">
        <p className="text-[#717171]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-[#28CB8B]">Tim Smith</p>
        <p className="text-[#89939E]">British Dragon Boat Racing Association</p>
      <div className="flex gap-8">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
        <button className="flex items-center gap-6 text-[#28CB8B]">Meet all customers <img src="/public/images/svgs/Right.svg" alt="" /></button>
      </div>
      </div>
    </section>
  );
}
