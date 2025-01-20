 import React, { useContext,useState } from "react";
 import cls from "./welcomeHeader.module.scss";
 import dynamic from "next/dynamic";
 import Link from "next/link";
 import { BrandLogo, BrandLogoDark } from "components/icons";
 import SecondaryButton from "components/button/secondaryButton";
import { useAuth } from "contexts/auth/auth.context";
 import { ThemeContext } from "contexts/theme/theme.context";
 import { useRouter } from "next/router";
 import useLocale from "hooks/useLocale";
 import useModal from "hooks/useModal";
 import Company from '../welcomeHeader/company'
 import SunFillIcon from "remixicon-react/SunFillIcon";
 import MoonFillIcon from "remixicon-react/MoonFillIcon";
 import GlobalLineIcon from "remixicon-react/GlobalLineIcon";
 import BankCardLineIcon from "remixicon-react/BankCardLineIcon";
 import NotificationStats from "components/notificationStats/notificationStats";
 import usePopover from "hooks/usePopover";
 const AppDrawer = dynamic(() => import("components/appDrawer/appDrawer"));
 const ProfileDropdown = dynamic(
   () => import("components/profileDropdown/profileDropdown")
 );
 const PopoverContainer = dynamic(() => import("containers/popover/popover"));
 type Props = {};

 export default function WelcomeHeader({}: Props) {
   const { isDarkMode , toggleDarkMode} = useContext(ThemeContext);
   const { push } = useRouter();
   const { t } = useLocale();
   const [appDrawer, handleOpenAppDrawer, handleCloseAppDrawer] = useModal();
   const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => {
     setIsOpen((prev) => !prev);
   };
   const [openLang, anchorLang, handleOpenLang, handleCloseLang] = usePopover();
   const [
    openCurrency,
    anchorCurrency,
    handleOpenCurrency,
    handleCloseCurrency,
  ] = usePopover();
  const { isAuthenticated, user } = useAuth();
   return (
     <div className="welcome-container">
       <header className={cls.header}>
         <div className={cls.navItem}>
           <button className={cls.menuBtn} onClick={handleOpenAppDrawer}>
             menu
           </button>
           <Link href="/" className={cls.brandLogo}>
             {/* {isDarkMode ? <BrandLogoDark /> : <BrandLogo />} */}
             <BrandLogoDark />
           </Link>
         </div>
         <div className={cls.navItem}>
           <div className={cls.actions}>

             <Link href="/welcome" className={cls.itemLink}>
               {t("Home ")}
             </Link>
             <Link href="#" className={cls.itemLink}>
               {t("Services")}
             </Link>
             <Link href="/" className={cls.itemLink}>
               {t("E-Stores")}
             </Link>
             <Link href="/chefs" className={cls.itemLink}>
               {t("Chefs")}
             </Link>
             <Link href="#" className={cls.itemLink}>
               {t("Barter")}
             </Link>
             <Company/>
           </div>
           <div className={cls.actions}>
              <button className={cls.iconBtn} onClick={toggleDarkMode}>
                {isDarkMode ? <MoonFillIcon /> : <SunFillIcon />}
              </button>
              <button className={cls.iconBtn} onClick={handleOpenLang}>
                <GlobalLineIcon />
              </button>
              <button className={cls.iconBtn} onClick={handleOpenCurrency}>
                <BankCardLineIcon />
              </button>
              <NotificationStats />
            </div>
         </div>
         <div className={cls.navItem}>
           <SecondaryButton onClick={() => push("/login")}>
             {t("Login")}
           </SecondaryButton>
         </div>
       </header>

       <AppDrawer open={appDrawer} handleClose={handleCloseAppDrawer} />
     </div>
   );
 }


