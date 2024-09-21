import { aboutus } from "../assets";

const AboutUs = () => {
  return (
    <div>
      <MobileAboutUs />
      <DesktopAboutUs />
    </div>
  );
};

const MobileAboutUs = () => (
  <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
    <div className="max-h-screen flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <Header title="About us" index="(1)" />
      <div className="w-full h-auto border rounded-[8px] p-2 border-[#454545]">
        <img
          src={aboutus}
          alt="about us"
          width="100%"
          height="100%"
          className="object-cover w-full h-full rounded"
          loading="lazy"
        />
      </div>
      <Description />
    </div>
  </div>
);

const DesktopAboutUs = () => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex w-full py-9 px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
      <div className="flex flex-row gap-12">
        <div className="flex max-w-[50%] h-auto flex-col items-start gap-[37px] flex-shrink-0">
          <Header title="About us" index="(1)" />
          <Description />
        </div>
        <div className="w-1/2 h-auto border border-dashed p-2 border-[#454545] rounded-[4px]">
          <img
            src={aboutus}
            alt="about us"
            width="100%"
            height="100%"
            className="object-cover w-full h-full rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

const Header = ({ title, index }) => (
  <div className="flex w-auto h-auto items-start">
    <div className="flex w-auto h-fit flex-col justify-center text-offwhite font-spacegrotesk text-[2rem] sm:text-[3rem] font-normal leading-[60px] tracking-[-2.56px]">
      {title}
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono leading-[28px]">
      {index}
    </div>
  </div>
);

const Description = () => (
  <div className="max-w-fit h-auto text-[#A0A0A0] font-spacemono text-[0.813rem] sm:text-[1rem] text-justify leading-[18px] tracking-[0.6px] self-stretch">
    Welcome to TransfiNITTe'24, NIT Trichy's premier hackathon, hosted by the
    Technical Council and SCIENT. This is where innovation meets action.
    <br />
    <br />
    Building on the success of TransfiNITTe'23, where 300+ participants pushed
    the limits in a 42-hour coding marathon, we're taking it up a notch. With
    500+ participants and 100+ teams expected, TransfiNITTe'24 is set to
    redefine the hackathon experience.
    <br />
    <br />
    This isn't just a competition—it's a platform to create real solutions and
    make an impact. Join us, and be a part of something that truly matters.
  </div>
);

export default AboutUs;