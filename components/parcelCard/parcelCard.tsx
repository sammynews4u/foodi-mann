import React from "react";
import cls from "./parcelCard.module.scss";
import Link from "next/link";
import useLocale from "hooks/useLocale";
import FallbackImage from "components/fallbackImage/fallbackImage";
import Image from 'next/image';
type Props = {};

export default function ParcelCard({}: Props) {
  const { t } = useLocale();

  return (
    <Link href="/parcel-checkout" className={cls.story}>
      <div className={cls.wrapper}>
        <span className={cls.title}>{t("door.to.door.delivery")}</span>
        <Image src="https://web1.foodyman.org/_next/image?url=%2Fimages%2Fparcel-3.jpg&w=2048&q=75" alt="Parcel" width={500}height={500}/>
        
      </div>
    </Link>
  );
}
