import { useRef, useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import GiftBox from '@/components/GiftBox';
import Balloons from '@/components/Balloons';
import Confetti from '@/components/Confetti';
import CakeWithCandle from '@/components/CakeWithCandle';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [cakeVisible, setCakeVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showText, setShowText] = useState(false); // Control visibility of "Happy Bornday"
  const audioRef = useRef(null);
  const [showSecondText, setShowSecondText] = useState(false);

  // Callback when loading screen is complete
  const handleLoadingComplete = () => {
    setLoadingDone(true);
    const timer = setTimeout(() => {
      setCakeVisible(true); // Show the cake after 2 seconds
      setShowText(true); // Show "Happy Bornday" text
    }, 2000);

  };

  // Callback for when the fire is turned off (candle clicked)
  const handleFireOff = () => {
    audioRef.current.play();
    setShowConfetti(true); // Show confetti after fire is off
    setTimeout(() => {
      setShowSecondText(true); // Show the second text after 2 seconds
    }, 2000);
  };

  return (
    <>
      {!loadingDone && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {loadingDone && (
        <div className="birthday-container">
          <Balloons />
          <div className='d-flex flex-column align-items-center'>
            {cakeVisible && <CakeWithCandle onFireOff={handleFireOff} />}

            {/* "Happy Bornday" Text with individual letter animations */}
            {showText && (
              <div className="happy-birthday-text">
                {"Happy Bornday Queen".split("").map((letter, index) => (
                  <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                  </span>
                ))}
              </div>
            )}
            {showSecondText && (
            <div className="second-text">
              "Wishing you the best day ever"
            </div>
          )}
          </div>
          {showConfetti && <Confetti />}

        </div>
      )}
      {/* Background music with infinite loop */}
      <audio ref={audioRef} src="/hbd.mp3" preload="auto" loop />
    </>
  );
}
