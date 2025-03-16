import Image from "next/image"; // Import Next.js Image component

interface BannerProps {
  images: {
    src: string;
    name: string;
  }[];
  speed: number;
}

export function ImageSection({ images, speed }: BannerProps) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className="images" style={imagesStyle}>
      {images.map(({ src, name }, index) => (
        <div key={index} className="image"> {/* Added 'key={index}' */}
          <Image
            src={src}
            alt={name}
            width={150}    // Set the width of the image
            height={160}   // Set the height of the image
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function Banner({ images, speed }: BannerProps) {
  return (
    <div className="banner-wrapper">
      <div className="wrapper">
        <ImageSection images={images} speed={speed} />
        <ImageSection images={images} speed={speed} />
      </div>
    </div>
  );
}
