import { ICONS, IMAGES, INavLinks, navLinks } from "@app/config";
import { languages, useLang } from "@app/context/language";
import { styles } from "@app/styles/styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MainNav = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();
    const { setLangauge } = useLang();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 ${
                scrolled ? "bg-primary" : "bg-transparent"
            } max-w-[100vw] `}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <a
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img
                        src={IMAGES.me}
                        alt="logo"
                        className="w-9 h-9 object-contain rounded-full overflow-hidden"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        Rafik &nbsp;
                        <span className="sm:block hidden"> | Portfolio</span>
                    </p>
                </a>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((nav: INavLinks) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{t(nav.title)}</a>
                        </li>
                    ))}
                    <li>
                        <select
                            onChange={(e) =>
                                setLangauge(e.target.value as languages)
                            }
                            defaultValue={i18n.language}
                            className="bg-[transparent] border-2 border-white text-secondary">
                            <option
                                value={languages.ENGLISH}
                                className="flex flex-row justify-between bg-primary">
                                {t("english")}{" "}
                                <img
                                    src={IMAGES.en}
                                    className="rounded-full w-10 h-10 "
                                />
                            </option>
                            <option
                                value={languages.FRENCH}
                                className="flex flex-row justify-between bg-primary">
                                {t("french")}{" "}
                                <img
                                    src={IMAGES.fr}
                                    className="rounded-full w-10 h-10"
                                />
                            </option>
                            <option
                                value={languages.ARABIC}
                                className="flex flex-row justify-between bg-primary">
                                {t("arabic")}{" "}
                                <img
                                    src={IMAGES.ar}
                                    className="rounded-full w-10 h-10"
                                />
                            </option>
                            <option
                                value={languages.DEUTSCH}
                                className="flex flex-row justify-between bg-primary">
                                {t("german")}{" "}
                                <img
                                    src={IMAGES.de}
                                    className="rounded-full w-10 h-10"
                                />
                            </option>
                        </select>
                    </li>
                </ul>
                <div className="sm:hidden   flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? ICONS.close : ICONS.menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                        active === nav.title
                                            ? "text-white"
                                            : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}>
                                    <a href={`#${nav.id}`}>{t(nav.title)}</a>
                                </li>
                            ))}
                            <li>
                                <select
                                    onChange={(e) =>
                                        setLangauge(e.target.value as languages)
                                    }
                                    defaultValue={i18n.language}
                                    className="bg-[transparent] border-2 border-white text-secondary">
                                    <option
                                        value={languages.ENGLISH}
                                        className="flex flex-row justify-between bg-primary">
                                        {t("english")}{" "}
                                        <img
                                            src={IMAGES.en}
                                            className="rounded-full w-10 h-10 "
                                        />
                                    </option>
                                    <option
                                        value={languages.FRENCH}
                                        className="flex flex-row justify-between bg-primary">
                                        {t("french")}{" "}
                                        <img
                                            src={IMAGES.fr}
                                            className="rounded-full w-10 h-10"
                                        />
                                    </option>
                                    <option
                                        value={languages.ARABIC}
                                        className="flex flex-row justify-between bg-primary">
                                        {t("arabic")}{" "}
                                        <img
                                            src={IMAGES.ar}
                                            className="rounded-full w-10 h-10"
                                        />
                                    </option>
                                    <option
                                        value={languages.DEUTSCH}
                                        className="flex flex-row justify-between bg-primary">
                                        {t("german")}{" "}
                                        <img
                                            src={IMAGES.de}
                                            className="rounded-full w-10 h-10"
                                        />
                                    </option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
