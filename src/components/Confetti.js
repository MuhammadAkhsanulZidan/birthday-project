// components/Confetti.js
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function BirthdayConfetti() {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} />;
}
