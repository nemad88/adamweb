import { ContactRow } from "./components/ContactRow";
import {
  AtIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
} from "./components/Icons";
import { ObfuscatedEmail } from "./components/ObfuscatedEmail";
import { ObfuscatedPhone } from "./components/ObfuscatedPhone";
import ProfileImage from "./components/ProfileImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <div className="flex flex-col items-center gap-6 max-w-full w-full sm:w-auto px-4 py-8 bg-zinc-800/80 rounded-2xl shadow-xl border border-zinc-600">
        <ProfileImage />
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-center mb-0.5 bg-gradient-to-r from-cyan-400 via-gray-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
          ADAM NEMETH
        </h1>
        <p className="text-xs sm:text-sm text-center text-gray-500 font-medium mb-1">
          Digital solutions, simply.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <ContactRow
            icon={<AtIcon />}
            label="Email"
            value={<ObfuscatedEmail />}
            href="#email"
          />
          <ContactRow
            icon={<PhoneIcon />}
            label="Phone"
            value={<ObfuscatedPhone />}
            href="#callme"
          />
          <ContactRow
            icon={<LinkedInIcon />}
            label="LinkedIn"
            value="linkedin.com/in/nemadam/"
            href="https://www.linkedin.com/in/nemadam/"
          />
          <ContactRow
            icon={<GitHubIcon />}
            label="GitHub"
            value="github.com/nemad88"
            href="https://github.com/nemad88"
          />
        </div>
      </div>
    </div>
  );
}
