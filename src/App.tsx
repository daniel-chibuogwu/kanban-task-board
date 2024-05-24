import { useState } from 'react';
// import Board from '@/components/Board';
// import LogoDark from '@/assets/logo-dark.svg';
import { motion } from 'framer-motion';
import { cn } from './lib/utils';

// function App() {
//   const [showSideNav, setShowSideNav] = useState(true);
//   const variants = {
//     open: {
//       width: 300,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 300, damping: 30 },
//     },
//     closed: {
//       width: 0,
//       opacity: 0,
//       transition: { type: 'spring', stiffness: 400, damping: 40 },
//     },
//   };
//   return (
//     <div className="relative flex min-h-screen overflow-hidden">
//       <AnimatePresence>
//         {showSideNav && (
//           <motion.nav
//             layout
//             className="relative z-50 h-screen border-r border-border bg-white pl-8 pr-6 pt-8"
//             variants={variants}
//             initial="closed"
//             animate={showSideNav ? 'open' : 'closed'}
//             exit="closed"
//           >
//             <div className="">
//               <LogoDark />
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//       <motion.div className="grow" layout>
//         <Board showNav={showSideNav} setShowNav={setShowSideNav} />
//       </motion.div>
//     </div>
//   );
// }
type slideNumberType = 1 | 2 | 3 | 4;
type SlideDetailsType = {
  id: slideNumberType;
  value: string;
  title: string;
  color: string;
  bgColor: string;
};

const DATA: SlideDetailsType[] = [
  {
    id: 1,
    value: '200+',
    title: 'Speakers',
    color: '#00c0a3',
    bgColor: 'bg-[#00c0a3]',
  },
  {
    id: 2,
    value: '11,000+',
    title: 'In-person attendees',
    color: '#ff5c35',
    bgColor: 'bg-[#ff5c35]',
  },
  {
    id: 3,
    value: '5,000+',
    title: 'Prizes to be won',
    color: '#00a6bf',
    bgColor: 'bg-[#00a6bf]',
  },
  {
    id: 4,
    value: '10,000+',
    title: 'Livestreams',
    color: '#f62d71',
    bgColor: 'bg-[#f62d71]',
  },
];

const GRADIENTS = {
  1: 'before:from-[#00c0a3] before:to-[#00a6bf] after:from-[#fcead7] after:to-[#00c0a3]',
  2: 'before:from-[#ffbc4b] before:to-[#ff5c35] after:from-[#ff5c35] after:to-[#fcead7]',
  3: 'before:from-[#00a6bf] before:to-[#00c0a3] after:from-[#fcead7] after:to-[#00a6bf]',
  4: 'before:from-[#ff5c35] before:to-[#f62d71] after:from-[#f62d71] after:to-[#fcead7]',
};

function App() {
  const [currentSlide, setCurrentSlide] = useState<slideNumberType>(1);
  const [rotation, setRotation] = useState(135);

  const handleButtonClick = (slideID: slideNumberType) => {
    setCurrentSlide(slideID);
    setRotation(rotation + 360); // Increase rotation by 45 degrees
  };

  const variants = {
    initial: { rotate: -45 },
    rotated: (custom: number) => ({ rotate: custom }), // Dynamic rotation for right semicircle
  };

  return (
    <div className="grid h-screen place-content-center bg-[#fcead7]">
      <div className="relative grid size-[389px]  place-content-center overflow-hidden rounded-full bg-transparent">
        <motion.div
          initial="initial"
          variants={variants}
          custom={rotation}
          animate="rotated"
          transition={{ duration: 0.5, ease: 'circOut' }}
          className={cn(
            'absolute left-0 top-0 z-10 size-full before:absolute before:-top-1/2 before:right-0 before:block before:size-full before:bg-gradient-to-tl after:absolute after:right-0 after:top-1/2 after:block after:size-full after:bg-gradient-to-tl',
            GRADIENTS[currentSlide],
          )}
        ></motion.div>

        {/* Substracting 1 from the currentslide because the data an array an index starts from 0 */}
        <div
          className={cn(
            'z-20 grid size-[277px] place-content-center rounded-full bg-white  p-5 text-center font-black text-teal-700 transition-all',
            `text-[${DATA[currentSlide - 1].color}]`,
          )}
        >
          <div>
            <h1 className="text-6xl tracking-tight">
              {DATA[currentSlide - 1].value}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-widest">
              {DATA[currentSlide - 1].title}
            </p>
            {/* Nav buttons */}
            <div className="flex translate-y-16 justify-center space-x-1.5">
              {DATA.map(d => (
                <button
                  key={d.id}
                  className={cn(
                    {
                      [`${d.bgColor} border-none`]: d.id === currentSlide,
                    },
                    'size-3 rounded-full border-2 border-teal-900 transition-all duration-300',
                  )}
                  onClick={() => handleButtonClick(d.id)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
