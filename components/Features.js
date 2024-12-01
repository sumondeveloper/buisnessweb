import fetureimage1 from "@/public/assets/fetureimage1.svg";
import fetureimage2 from "@/public/assets/fetureimage2.svg";
import fetureimage3 from "@/public/assets/fetureimage3.svg";
import Image from "next/image";
import checkmark from "@/public/assets/checkmark.png";
import bluebutton from "@/public/assets/bluebutton.png";
const Features = () => {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col">
        <Image
          src={fetureimage1}
          alt="feture image"
          className="hidden w-1/2 sm:block"
        />
        <div>
          <h3 className="text-[#0085FF] text-[16px] font-medium leading-[24px]">
            Sales Monitoring
          </h3>
          <h1
            className="font-medium text-[24px]
          leading-[36px] text-[#172026] pt-[12px]"
          >
            Simplify your sales monitoring
          </h1>
          <Image
            src={fetureimage1}
            alt="feture image"
            className="pt-[24px]object-cover"
          />
          <p className="py-[24px] text-[#36485C] ">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.{" "}
          </p>
          <ul className="flex flex-col gap-y-3 ">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={checkmark} alt="check" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              {" "}
              <span>
                <Image src={checkmark} alt="check" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={checkmark} alt="check" />
              </span>
              Sed do eiusmod tempor incididunt ut labore{" "}
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] text-[#0085FF] font-medium leading-[24px] ">
            Learn More{" "}
            <span>
              <Image src={bluebutton} alt="Learn more" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
