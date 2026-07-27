import Image from "next/image";

export default function LogoWatermark({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Image
        src="/logo.png"
        alt=""
        fill
        className="object-contain grayscale contrast-[0.6] brightness-[1.4] sepia-[0.15] hue-rotate-[60deg]"
      />
    </div>
  );
}
