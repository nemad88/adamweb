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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100">
      <div className="flex flex-col items-center gap-6 max-w-full w-full sm:w-auto px-4 py-8 bg-white/80 rounded-2xl shadow-xl border border-blue-100">
        <ProfileImage />
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-center mb-0.5 bg-gradient-to-r from-blue-800 via-gray-700 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
          ADAM NEMETH
        </h1>
        <p className="text-xs sm:text-sm text-center text-gray-400 font-medium mb-1">
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
