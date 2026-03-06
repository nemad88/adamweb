import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-1 rounded-full bg-linear-to-br from-indigo-500/30 to-purple-500/30 blur-md animate-glow-pulse" />
      <Image
        src="/profile.jpeg"
        alt="Profile photo"
        className="relative w-32 h-32 rounded-full object-cover ring-2 ring-white/10"
        width={128}
        height={128}
        priority
      />
    </div>
  );
}
