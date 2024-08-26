import LogoIcon from "@/assets/logo.svg";
import XIcon from "@/assets/social-x.svg";
import InstagramIcon from "@/assets/social-instagram.svg";
import YTIcon from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoIcon className="w-6 h-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href=""
              className="text-white/70 hover:text-white md:text-sm transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white md:text-sm transition"
            >
              Developers
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white md:text-sm transition"
            >
              Company
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white md:text-sm transition"
            >
              Blog
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white md:text-sm transition"
            >
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XIcon className="text-white/40 hover:text-white transition" />
            <InstagramIcon className="text-white/40 hover:text-white transition" />
            <YTIcon className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
