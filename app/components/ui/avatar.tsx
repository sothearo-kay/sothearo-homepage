import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-2xl ring-4 ring-common-border ring-offset-4 ring-offset-background duration-500 max-sm:h-20 max-sm:w-20 max-sm:rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        priority
        className="aspect-square"
      />
    </div>
  );
};
