import BtnPage from "./btnPage"
import image from '/images/svgs/Illustration.svg'
export default function SectionSlider() {
  return (
    <section>
      <div className="flex justify-between items-center gap-3 mb-5">
        <div className="w-full space-y-10 p-14">
          <h1 className="text-6xl">
            Lessons and insights <span className="text-[#28CB8B]">from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <BtnPage>Register</BtnPage>
        </div>
        <div className="w-full p-14">
          <img className="w-full" src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}
