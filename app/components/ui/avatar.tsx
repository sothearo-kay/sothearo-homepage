import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="mr-2 overflow-hidden rounded-2xl ring-4 ring-common-border ring-offset-4 ring-offset-background transition-[box-shadow] duration-500 max-sm:float-right max-sm:h-14 max-sm:w-14 max-sm:rounded-full">
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
