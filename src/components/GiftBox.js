// components/GiftBox.js
import { motion } from 'framer-motion';

export default function GiftBox() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="gift-box"
    >
      🎁
    </motion.div>
  );
}
