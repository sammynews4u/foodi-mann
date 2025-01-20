/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import cls from "./v2.module.scss";
import { Grid, useMediaQuery } from "@mui/material";
import { BrandLogo, BrandLogoDark } from "components/icons";
import { ThemeContext } from "contexts/theme/theme.context";
import Link from "next/link";
// import { META_TITLE } from "constants/config";
import FacebookCircleFillIcon from "remixicon-react/FacebookCircleFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import { useSettings } from "contexts/settings/settings.context";
import useLocale from "hooks/useLocale";
import foodlogo from './foodlogo.png'
import Image from 'next/image';

type Props = {};

export default function Footer({}: Props) {
  const { t } = useLocale();
  const { isDarkMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:576px)");
  const { settings } = useSettings();
  const isReferralActive = settings.referral_active == 1;

  return (
<footer className={cls.footer}>
  <div className={cls.footerTop}>
    <div className={cls.gridContainer}>
      
      <div className={cls.logoSection}>
      <Link href="/" className={cls.brandLogo}>
             {/* {isDarkMode ? <BrandLogoDark /> : <BrandLogo />} */}
             <BrandLogoDark />
           </Link>
        <p>
          FoodiMann brings together multiple vendors, brands, or suppliers,
          providing customers with a diverse selection of products in one
          convenient or multiple locations. FoodiMann offers fresh produce,
          packaged foods, meats, dairy, bakery items, beverages, pantry
          staples, cleaning supplies, personal care products, and many more.
        </p>
        <a href={`tel:${settings?.phone}`} className={cls.phone}>
          {settings?.phone}
        </a>
        <p className={cls.address}>{settings?.address_text}</p>
      </div>

      {/* Links Sections */}
      <div className={cls.linksSection}>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="/welcome">{t("home")}</Link>
            </li>
            <li>
              <Link href="/about">{t("About Us")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("Contact Us")}</Link>
            </li>
            <li>
              <Link href="/careers">{t("Careers")}</Link>
            </li>
            <li>
              <Link href="/help">{t("FAQ")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("News & Event")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/businesses">{t("Businesses")}</Link>
            </li>
            <li>
              <Link href="/request-kiosk">{t("Partners")}</Link>
            </li>
            <li>
              <Link href="/referrals">{t("Affiliates")}</Link>
            </li>
            <li>
              <Link href="/deliver">{t("Delivery Mann")}</Link>
            </li>
            <li>
              <Link href="/chefs">{t("Chefs")}</Link>
            </li>
            <li>
              <Link href="#">{t("Barter")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Statutory</h3>
          <ul>
            <li>
              <Link href="#">{t("Terms of Use")}</Link>
            </li>
            <li>
              <Link href="#">{t("Private Policy")}</Link>
            </li>
            <li>
              <Link href="#">{t("Refund Policy")}</Link>
            </li>
            <li>
              <Link href="#">{t("Cookies Policy")}</Link>
            </li>
            <li>
              <Link href="#">{t("Compliance")}</Link>
            </li>
            <li>
              <Link href="/recipes">{t("Security Policies")}</Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
      {/* Social and App Links */}
      <div className={cls.socialSection}>
        <div className={cls.appSection}>
          <a href={settings?.customer_app_ios} target="_blank" rel="noopener noreferrer">
            <img src="/images/app-store.webp" alt="App store" />
          </a>
          <a href={settings?.customer_app_android} target="_blank" rel="noopener noreferrer">
            <img src="/images/google-play.webp" alt="Google play" />
          </a>
        </div>
        <div className={cls.social}>
          <a href={settings?.instagram_url} target="_blank" rel="noopener noreferrer">
            <InstagramLineIcon />
          </a>
          <a href={settings?.twitter_url} target="_blank" rel="noopener noreferrer">
            <TwitterFillIcon />
          </a>
          <a href={settings?.facebook_url} target="_blank" rel="noopener noreferrer">
            <FacebookCircleFillIcon />
          </a>
        </div>
        <p>{t("follow.us")}</p>
      </div>
    
  </div>

  <div className={cls.bottom}>
    {/* <p>&copy; {new Date().getFullYear()} {settings?.footer_text}</p> */}

    <p>Copyright © 2024 Alright Reserve NextSoft-Group</p>
    <div>
      <Link href="/privacy">{t("privacy.policy")}</Link>
      <Link href="/terms">{t("terms")}</Link>
    </div>
  </div></footer>
  )}
