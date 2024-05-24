import { useState } from 'react';
import Board from '@/components/Board';
import LogoDark from '@/assets/logo-dark.svg';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showSideNav, setShowSideNav] = useState(true);
  const variants = {
    open: {
      width: 300,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    closed: {
      width: 0,
      opacity: 0,
      transition: { type: 'spring', stiffness: 400, damping: 40 },
    },
  };
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <AnimatePresence>
        {showSideNav && (
          <motion.nav
            layout
            className="relative z-50 h-screen border-r border-border bg-white pl-8 pr-6 pt-8"
            variants={variants}
            initial="closed"
            animate={showSideNav ? 'open' : 'closed'}
            exit="closed"
          >
            <div className="">
              <LogoDark />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div className="grow" layout>
        <Board showNav={showSideNav} setShowNav={setShowSideNav} />
      </motion.div>
    </div>
  );
}

export default App;
