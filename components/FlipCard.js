import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const FlipCard = ({ imageUrl, altText, backContent, width = 300, height = 275 }) => {
  return (
    <div
      className="group mx-auto [perspective:1000px]"
      style={{ height: `${height}px`, width: `${width}px`, maxWidth: `${width}px` }} // Apply dynamic styles here
    >
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-700 ease-flip [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of the card */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden">
          <Image
            src={imageUrl} // Use imageUrl prop here, not hardcoded path
            alt={altText}
            width={width}
            height={height}
            className="h-full w-full object-cover"
            onError={(e) => { e.target.src = `https://placehold.co/${width}x${height}/cccccc/333333?text=Image+Error`; }} // Basic fallback
          />
        </div>
        {/* Back of the card */}
        {/* Changed dark:bg-gray-800 to dark:bg-theme-base-300 */}
        <div className="absolute inset-0 rounded-xl bg-gray-700 dark:bg-theme-base-300 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-4 text-center">
          <p className="text-lg text-white dark:text-gray-200">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;