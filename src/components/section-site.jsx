import BtnPage from "./btnPage";

export default function SiteFooter() {
  return (
    <section className="flex justify-between items-center mb-5">
      <div className="w-full">
        <img className="w-full" src="images/rafiki.png" alt="" />
      </div>
      <div className="w-full space-y-6">
        <h2 className="text-4xl font-bold text-[#4D4D4D]">How to design your site footer like we did</h2>
        <p className="text-[#89939E]">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <BtnPage>Learn more</BtnPage>
      </div>
    </section>
  );
}
