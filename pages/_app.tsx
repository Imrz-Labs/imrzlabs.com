import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function ImrzApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  
  return (
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            PageInitial: { width: 0 },
            PageAnimate: { width: '100vw' },
            PageExit: { transition: { duration: 0.1 } },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  )
}

export default ImrzApp
