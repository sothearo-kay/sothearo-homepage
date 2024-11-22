import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="h-32 w-32 rounded-lg border-4 border-gray-200 bg-white dark:border-gray-800">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className="aspect-square rounded-md"
      />
    </div>
  );
};
