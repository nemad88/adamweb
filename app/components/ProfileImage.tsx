import Image from "next/image";

const profileImageClassName =
  "w-28 h-28 rounded-full shadow-lg border-4 border-white object-cover mb-2";

export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpeg"
      alt="Profile photo"
      className={profileImageClassName}
      width={112}
      height={112}
      loading="lazy"
      priority={false}
    />
  );
}
