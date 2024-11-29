import HeroArrow from "@/public/assets/Arrow-Right.png";
import Image from "next/image";
import Gradiants from "@/public/assets/Gradients.svg";
import Image1 from "@/public/assets/Image.png";
import GoogleLogo from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import CNN from "@/public/assets/CNN.svg";
import Clutch from "@/public/assets/Clutch.svg";

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1
          className="text-center 
text-[32px] text-[#172026] font-medium leading-[40px] lg:text-[64px] lg:leading-[72px]"
        >
          Start monitoring your website like a pro
        </h1>
        <p className="text-[#36485C] font-midium text-[16px] text-center leading-[27px] pt-6 lg:text-[18px] lg:leading-[28px]">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>
        <div className="flex w-full gap-8 pt-8 items-center justify-center">
          <button className="bg-[#4328EB] px-[32px] py-[16px]font-medium text-[18px] leading-[24px] text-white h-[56px] rounded-[5px] w-[160px]lg:w-fit">
            Try for free
          </button>
          <button className="text-[#4328EB] font-medium text-[16px] leading-[24px] flex items-center gap-x-2 justify-center">
            View Pricing
            <span className="bg-[#D5CFFA80] h-[26px] w-[26px] flex items-center justify-center rounded-[30px]">
              <Image src={HeroArrow} alt="learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center mt-3">
        <Image
          src={Gradiants}
          alt="Hero gradiant"
          className="min-h-[500px] w-full object-cover opacity-[0.8] rounded-md lg:h-auto"
        />
        <div className="absolute bottom-10 top-0 flex w-full flex-col items-center ">
          <Image
            src={Image1}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%] object-cover"
          />

          <div className="flex w-full flex-col lg:flex-row items-center gap-5 lg:justify-between lg:container lg:px-20">
            <h1 className="text-[16px] leading-[27px] text-white font-medium text-center lg:text-[18px]">
              Trusted by these companies
            </h1>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={GoogleLogo} alt="Google logo" />
              <Image src={Slack} alt="slack" />
              <Image src={Trustpilot} alt="Trustpilot" />
              <Image src={CNN} alt="CNN" />
              <Image src={Clutch} alt="Clutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
