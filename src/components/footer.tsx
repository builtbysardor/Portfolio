import { Link } from "react-router-dom";
import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

const Footer = () => (
  <nav className={cn(styles.paddingX, "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5")}>
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <p className="text-white text-md font-bold">
        &copy; Sardor {new Date().getFullYear()} · Samarkand, Uzbekistan 🇺🇿
      </p>
      <ul className="list-none hidden flex-row sm:flex gap-10">
        {SOCIALS.map((social) => (
          <li key={social.name} className="text-secondary font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition">
            <Link to={social.link} target="_blank" rel="noreferrer noopener">
              <img src={social.icon} alt={social.name} className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Footer;
