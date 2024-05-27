import { Link, NavLink, useLocation } from "react-router-dom";
import { Links } from "../shared/data/data";
import { lang_logo } from "../assets";
import { Logo } from "./Logo";
import UIButton from "../shared/ui/uiButton/UIButton";

const Header = () => {
  const location = useLocation();

  return (
    <div className="bg-light-1 py-4">
      <div className="container flex-between">
        <Logo />
        <div className="flex-between gap-8">
          {Links.map((link) => (
            <NavLink
              key={link.label}
              to={link.link}
              className={`${
                location.pathname === link.link
                  ? "text-blue"
                  : "hover:text-blue"
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-6 items-center text-blue">
          <img
            className="cursor-pointer"
            src={lang_logo}
            width={16}
            height={16}
            alt="language"
          />
          <Link to={""}>Войти</Link>
          <UIButton>Регистрация</UIButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
