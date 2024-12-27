import BtnPage from "./btnPage";

export default function Pixelgrade() {
  return (
    <section className="flex gap-10 items-center mb-5">
      <div className="w-full">
        <img className="w-full" src="images/pana.png" alt="" />
      </div>
      <div className="w-full space-y-8">
        <h2 className="text-4xl font-bold text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h2>
        <p className=" text-[#89939E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <BtnPage>Learn more</BtnPage>
      </div>
    </section>
  );
}
