import Image from 'next/image';

export default function Card({
  children,
  className,
  imageSrc,
  altText,
}: {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
  altText?: string;
}) {
  return (
    <div className={`bg-gray-300 rounded-lg shadow-md p-4 ${className || ''}`}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={altText || 'Imagem do Card'}
          width={400} 
          height={200} 
          className="rounded-t-lg mb-4"
        />
      )}
      {children}
    </div>
  );
}
