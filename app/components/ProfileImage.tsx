import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpeg"
      alt="Profile photo"
      className="w-28 h-28 rounded-full shadow-lg border-4 border-white object-cover mb-2"
      width={112}
      height={112}
      loading="lazy"
      priority={false}
    />
  );
}
