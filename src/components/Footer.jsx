import {
  arrowwh,
  instagram,
  linkedin,
  tffooter,
  tffootersm,
  x,
} from "../assets";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Footer = () => {
  return (
    <div className="max-w-full">
      <MobileFooter />
      <DesktopFooter />
    </div>
  );
};

const MobileFooter = () => (
  <div className="block sm:hidden mx-auto bg-black max-w-full">
    <div className="max-h-screen flex flex-col justify-center items-start flex-shrink-0 border-l border-r border-b border-l-edge border-r-edge border-b-edge w-[93.192%] mx-auto mb-4 py-[0.625rem] px-0 gap-4">
      <div className="flex justify-center items-center self-stretch py-[0.15rem]">
        <img src={tffootersm} loading="lazy" alt="TF Footer Small" />
      </div>
      <div className="flex py-0 px-4 flex-col justify-center gap-[1rem] self-stretch">
        <div className="flex w-full justify-between items-center gap-[0.625rem]">
          <div className="w-full h-auto flex justify-between flex-shrink-0 gap-[0.625rem]">
            <ContactButton />
            <LocateUsButton />
            <ArchiveButton />
          </div>
        </div>
        <FooterText />
      </div>
    </div>
  </div>
);

const DesktopFooter = () => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex h-auto py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black">
      <div className="flex justify-center items-center self-stretch tf-footer">
        <img src={tffooter} loading="lazy" alt="TF Footer" />
      </div>
      <div className="w-full h-[1.25rem] flex py-0 px-[46px] justify-between items-center self-stretch">
        <FooterText />
        <div className="flex items-center gap-4">
          <ContactButton />
          <LocateUsButton />
          <ArchiveButton />
        </div>
      </div>
    </div>
  </div>
);

const ContactButton = () => (
  <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex flex-row gap-1 justify-center items-center">
          <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase">
            Contact
          </div>
          <img src={arrowwh} className="w-auto h-2" loading="lazy" alt="Arrow" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-auto max-w-[90%] opacity-100 bg-offwhite rounded-3xl">
        <AlertDialogHeader>
          <AlertDialogDescription>
            <ContactDialogContent />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            <div className="flex flex-row gap-1 justify-center items-center border-solid border-footerbutton border-black border-2 p-2 rounded-3xl px-5 footer-links py-[6px] ">
              <div className="text-black text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
                Continue
              </div>
            </div>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

const LocateUsButton = () => (
  <a
    href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase">
          Locate Us
        </div>
        <img src={arrowwh} className="w-auto h-2" loading="lazy" alt="Arrow" />
      </div>
    </div>
  </a>
);

const ArchiveButton = () => (
  <a
    href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="inline-flex px-[0.5rem] py-[0.63rem] justify-center items-center gap-[0.625rem] rounded-full border-[0.5px] border-solid border-footerbutton footer-links hover:underline decoration-white leading-none my-0">
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold tracking-[0.35px] uppercase">
          Archive
        </div>
        <img src={arrowwh} className="w-auto h-2" loading="lazy" alt="Arrow" />
      </div>
    </div>
  </a>
);

const FooterText = () => (
  <div className="flex justify-center items-start gap-[0.3125rem]">
    <div className="text-[#A1A1A1] font-spacemono text-[0.75rem] sm:text-[1rem] not-italic font-normal leading-normal tracking-[-0.0075rem] uppercase">
      © 2024 TRANSFINITTE. All Rights Reserved.
    </div>
  </div>
);

const ContactDialogContent = () => (
  <div className="flex flex-col items-center gap-4 self-stretch">
    <div className="self-stretch text-black font-spacegrotesk text-[2rem] not-italic font-medium leading-[-0.02rem]">
      Contact
    </div>
    <div className="flex flex-col items-start gap-[6px] self-stretch">
      <div className="self-stretch text-black font-spacegrotesk text-[1rem] not-italic font-light leading-[-0.015rem]">
        Work inquires:{" "}
        <span className="font-bold text-wrap">
          technicalcouncil@pragyan.org
        </span>
      </div>
      <div className="self-stretch text-black font-spacegrotesk text-[0.825rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
        Technical Council of NIT Trichy
      </div>
      <div className="self-stretch text-black font-spacegrotesk text-[0.825rem] not-italic font-bold leading-normal tracking-[-0.011rem]">
        Samarth <span className="font-light">9670664115</span>
        <br />
        Sanjana <span className="font-light">9380872847</span>
        <br />
        Vishnucharan <span className="font-light">7760942275</span>
        <br />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex items-center justify-center gap-3">
          <SocialLink href="" src={instagram} alt="Instagram" />
          <SocialLink href="" src={linkedin} alt="LinkedIn" />
          <SocialLink href="" src={x} alt="X" />
        </div>
      </div>
    </div>
  </div>
);

const SocialLink = ({ href, src, alt }) => (
  <div className="flex items-center gap-3">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} className="max-w-none w-fit" loading="lazy" alt={alt} />
    </a>
  </div>
);

export default Footer;