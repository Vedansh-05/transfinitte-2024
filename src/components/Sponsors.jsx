import { sponsors } from "../constants";

const Sponsors = () => {
  return (
    <div>
      <MobileSponsors sponsors={sponsors} />
      <DesktopSponsors sponsors={sponsors} />
    </div>
  );
};

const MobileSponsors = ({ sponsors }) => (
  <div className="block sm:hidden mx-auto bg-black max-w-[93.194%]">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <Header title="Sponsors" count={3} />
      {sponsors.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  </div>
);

const DesktopSponsors = ({ sponsors }) => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex py-9 px-[2.875rem] flex-col items-start gap-[2.875rem] bg-black border-r border-l border-r-edge border-l-edge">
      <Header title="Sponsors" count={3} />
      {sponsors.map((category) => (
        <Category key={category.id} category={category} isDesktop />
      ))}
    </div>
  </div>
);

const Header = ({ title, count }) => (
  <div className="flex items-start">
    <div className="text-offwhite font-spacegrotesk text-[2rem] sm:text-[4rem] font-normal not-italic leading-[3.75rem]">
      {title}
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-[#A1A1A1] font-spacemono text-[18px] sm:text-[1.125rem] not-italic font-normal leading-[28px]">
      ({count})
    </div>
  </div>
);

const Category = ({ category, isDesktop }) => (
  <div className="flex w-full flex-col items-start gap-[50px]">
    <div className="text-offwhite text-right font-spacegrotesk text-[2rem] not-italic font-normal leading-8">
      {category.name}
    </div>
    <div
      className={`flex ${
        isDesktop ? "items-center justify-around" : "flex-col items-center justify-center"
      } gap-[0.625rem] self-stretch flex-wrap`}
    >
      {category.data.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  </div>
);

const SponsorCard = ({ sponsor }) => (
  <div className="flex flex-col w-fit items-center justify-center gap-2 self-center">
    <img
      src={sponsor.imgurl}
      alt={sponsor.name}
      className="max-w-[120px] sm:w-fit sm:h-fit grayscale"
      loading="lazy"
    />
  </div>
);

export default Sponsors;