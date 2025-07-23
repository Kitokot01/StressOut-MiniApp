import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      type={type}
      className={`px-5 py-3 rounded-xl bg-[#D59D80] text-white text-base font-medium shadow-lg hover:bg-[#B6410F] transition-colors ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
