import Image from 'next/image';

interface MbButtonProps {
  text: string;
  iconSrc?: string; // Ruta a imagen opcional
}

export const MbButton: React.FC<MbButtonProps> = ({ text, iconSrc }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 px-4 py-2 w-full border border-white/40 text-white rounded-md hover:border-white hover:bg-white/10 transition-all duration-200"
    >
      {iconSrc ? (
        <Image src={iconSrc} alt="icon" width={16} height={16} />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
      <span className="text-lg font-medium">{text}</span>
    </button>
  );
};
