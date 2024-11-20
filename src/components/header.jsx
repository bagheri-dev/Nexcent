import BtnPage from "./btnPage";
import Logo from "/public/images/svgs/logo.svg";
export default function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-28">
          <div className="flex gap-3 items-center">
            <img src={Logo} alt="" />
            <p className="text-4xl font-bold">Nexcent</p>
          </div>
          <div className="flex gap-12 items-center">
            <ul className="flex gap-12">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
            <BtnPage>Register Now</BtnPage>
          </div>
        </div>
      </div>
    </header>
  );
}
