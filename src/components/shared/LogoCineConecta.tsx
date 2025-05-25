import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 300, height = 300 }) => {
  return (
    <div className="bg-transparent flex items-center justify-center">
      <Image src="/images/LogoModerno.png" alt="Logo CineConecta" width={width} height={height} />
    </div>
  );
};

export default Logo;