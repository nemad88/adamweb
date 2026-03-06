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
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background glow effect */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/8 blur-[120px] animate-glow-pulse pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto px-6 py-12">
        <div className="animate-fade-in-up">
          <ProfileImage />
        </div>

        <h1
          className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-center text-white text-pretty animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Adam Nemeth
        </h1>

        <p
          className="mt-3 text-base text-zinc-500 font-medium tracking-wide animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Digital solutions, simply.
        </p>

        <div
          aria-hidden="true"
          className="mt-10 w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        />

        <div
          className="mt-8 flex flex-col gap-3 w-full animate-fade-in-up"
          style={{ animationDelay: "0.35s" }}
        >
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
            value="linkedin.com/in/nemadam"
            href="https://www.linkedin.com/in/nemadam/"
          />
          <ContactRow
            icon={<GitHubIcon />}
            label="GitHub"
            value="github.com/nemad88"
            href="https://github.com/nemad88"
          />
        </div>
      </main>
    </div>
  );
}
