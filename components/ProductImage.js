import Image from "next/image";

export default function ProductImage({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
