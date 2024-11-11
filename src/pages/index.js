import { useState } from 'react';
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

  // Callback when loading screen is complete
  const handleLoadingComplete = () => {
    setLoadingDone(true);
    const timer = setTimeout(() => {
      setCakeVisible(true); // Show the cake after 2 seconds
    }, 2000);
  };

  // Callback for when the fire is turned off (candle clicked)
  const handleFireOff = () => {
    setShowConfetti(true); // Show confetti after fire is off
  };

  return (
    <>
      {!loadingDone && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {loadingDone && (
        <div className="birthday-container">
          <Balloons />
          {cakeVisible && <CakeWithCandle onFireOff={handleFireOff} />}
          {showConfetti && <Confetti />}
        </div>
      )}
    </>
  );
}
