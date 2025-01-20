import React from "react";
import cls from "./v3.module.scss";
import useLocale from "hooks/useLocale";
import FallbackImage from "components/fallbackImage/fallbackImage";
import SecondaryButton from "components/button/secondaryButton";
import { useRouter } from "next/router";
import { BrandLogoDark } from "components/icons";
import foodlogo from '../parcelCard/foodlogo.png'
import Image from 'next/image';

type Props = {};

export default function ParcelCard({}: Props) {
  const { t } = useLocale();
  const { push } = useRouter();

  return (
    <div className={cls.container}>
      <div className="container">
        <div className={cls.wrapper}>
          <FallbackImage fill src="/images/parcel-3.jpg" alt="Parcel" />
          <div className={cls.backdrop} />
          <div className={cls.brandLogo}>
            {/* <BrandLogoDark /> */}
            <Image src={foodlogo}alt='' width={380}height={90}/>
          </div>
          <div className={cls.body}>
            <h1 className={cls.title}>{t("door.to.door.delivery")}</h1>
            <p className={cls.caption}>{t("door.to.door.delivery.service")}.</p>
            <p className={cls.caption}>We offer Delivery Services across a wide range of regions, check to see if we deliver to your areas,
            contact us to see available delivery zones or use our delivery apps or website.</p>
            <div className={cls.actions}>
              <button onClick={() => push("/contact")} className="learned">
                {t("Learn more")}
              </button>
            </div>
          </div>
        </div>
        <div className={cls.space} />
      </div>
    </div>
  );
}
