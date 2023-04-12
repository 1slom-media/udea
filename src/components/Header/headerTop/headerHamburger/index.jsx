import { NavLink } from "react-router-dom";
import { Menu } from "./styled-index";
import { useTranslation } from "react-i18next";

function HeaderMenu({ modal, HandelClose, ValLang, HendelChange }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Menu modal={modal === false}>
        <div className="close">
          <i onClick={HandelClose} class="bx bx-x"></i>
        </div>
        <div className="link">
          <ul className="ulLink">
            <li>
              <NavLink to={"/business"}>
                <a onClick={HandelClose} href="#">
                  {t("Header.1")}
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/programs"}>
                <a onClick={HandelClose} href="#">
                  {t("Header.0")}
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sociallife"}>
                <a onClick={HandelClose} href="#">
                  Social life & Campus
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admission"}>
                <a onClick={HandelClose} href="#">
                  Admission
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>
                <a onClick={HandelClose} href="#">
                  News and Events
                </a>
              </NavLink>
            </li>
          </ul>
          <ul className="iconLink">
            <li>
              <select onChange={HendelChange}>
                {ValLang() === "uz" ? (
                  <>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </>
                ) : ValLang() === "ru" ? (
                  <>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                  </>
                ) : ValLang() === "en" ? (
                  <>
                    <option value="en">EN</option>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                  </>
                ) : (
                  <>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </>
                )}
              </select>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-phone"></i>
              </a>
            </li>
            <li>
              <a href="https://lms.udea.uz/register">
                <i class="bx bx-exit"></i>
              </a>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
}

export default HeaderMenu;
