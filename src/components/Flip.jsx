import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const calculateDaysToGo = (targetDate) => {
  const currentDate = new Date();
  const target = new Date(targetDate);
  const timeDifference = target - currentDate;
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};

const Flip = () => {
  const targetDate = '2024-10-18';
  const daysLeft = calculateDaysToGo(targetDate);
  const dateRef = useRef(null);
  const daysLeftRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(dateRef.current, {
      delay: 10,
      duration: 0.8,
      rotateX: 90,
      opacity: 0,
      transformOrigin: "top",
      ease: "power1.in",
      onComplete: () => {
        dateRef.current.style.display = 'none';
        daysLeftRef.current.style.display = 'block';
      },
    })
    .to(daysLeftRef.current, {
      duration: 0.8,
      rotateX: 0,
      opacity: 1,
      transformOrigin: "bottom",
      ease: "power1.out",
    })
    .to(daysLeftRef.current, { delay: 8 }) // Stay visible for 8 seconds
    .to(daysLeftRef.current, {
      duration: 0.8,
      rotateX: 90,
      opacity: 0,
      transformOrigin: "top",
      ease: "power1.in",
      onComplete: () => {
        daysLeftRef.current.style.display = 'none';
        dateRef.current.style.display = 'block';
      },
    })
    .to(dateRef.current, {
      duration: 0.8,
      rotateX: 0,
      opacity: 1,
      transformOrigin: "bottom",
      ease: "power1.out",
    })
    .to(dateRef.current, { delay: 10 }); // Stay visible for 10 seconds
  }, []);

  return (
    <div>
      <div ref={dateRef} className='text-[#A1A1A1] font-spacemono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase'>
        OCT 18-20 2024 | GJCH
      </div>
      <div ref={daysLeftRef} className='text-[#A1A1A1] font-spacemono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase hidden'>
        {`${daysLeft} days to go`}
      </div>
    </div>
  );
};

export default Flip;