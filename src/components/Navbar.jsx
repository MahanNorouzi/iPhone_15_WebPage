import { appleImg, bagImg } from "../utils/index";
import { searchImg } from "../utils/index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between w-full px-5 py-5 sm:px-10">
      <nav className="flex w-full screen-max-width">
        <Link to="/">
          <img
            className="cursor-pointer"
            src={appleImg}
            alt="apple"
            width={14}
            height={18}
          />
        </Link>
        <div className="flex justify-center flex-1 max-sm:hidden">
          <ul className="flex justify-center flex-1 max-sm:hidden">
            <li className="px-5 text-sm cursor-pointer text-gray hover:text-white">
              <Link to="/">{t("Store")}</Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray hover:text-white">
              <Link to="/Notfinished">{t("Mac")}</Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray hover:text-white">
              <Link to="/iPhone_15">{t("iPhone")}</Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray hover:text-white">
              <Link to="/AppleID">{t("AppleID")}</Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray hover:text-white">
              <Link to="/Notfinished">{t("Support")}</Link>
            </li>
          </ul>
        </div>
        <div className="relative"></div>
        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className="cursor-pointer"
            src={searchImg}
            alt="search"
            width={18}
            height={18}
          />
          <img
            className="cursor-pointer"
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
