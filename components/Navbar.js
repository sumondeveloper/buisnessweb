import Image from "next/image";
import Vector from "@/public/assets/Vector.png";
import User from "@/public/assets/User.png";
import Menu from "@/public/assets/Menu.svg";
const navLinks = [
  {
    name: "Features",
    id: 1,
  },
  {
    name: "Pricing",
    id: 2,
  },
  {
    name: "Enterprise",
    id: 3,
  },
  {
    name: "Careers",
    id: 4,
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-auto px-[20px] py-[16px] lg:px-[80px] lg:py-[24px] lg:mx-auto ">
      <div className="flex items-center lg:pl-[74px] gap-x-[56px] ">
        <Image src={Vector} alt="logo" />
        <div className="hidden lg:flex gap-x-[56px]">
          {navLinks.map((item) => (
            <p key={item.id} className="text-[16px] text-[#36485C] font-medium">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        <p
          className="hidden lg:block text-[#36485C]
        font-medium text-[16px] pr-[56px]"
        >
          Open an Account
        </p>
        <div className="flex items-center gap-x-5">
          <Image src={User} alt="user " />
          <span className="hidden lg:block font-medium text-[#36485C]">
            Sign in
          </span>
        </div>
        <div className="lg:hidden block">
          <Image src={Menu} alt="Menu " />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
