import React, { useMemo } from "react";
import cls from "./shopBanner.module.scss";
import { IShop } from "interfaces";
import useLocale from "hooks/useLocale";
import FallbackImage from "components/fallbackImage/fallbackImage";
import SecondaryButton from "components/button/secondaryButton";
import { useRouter } from "next/router";
import one from '../shopBanner/one.webp'
import two from '../shopBanner/two.webp'
import three from '../shopBanner/three.webp'
import four from '../shopBanner/four.webp'
import Image from 'next/image';


type Props = {
  data: IShop[];
};

export default function ShopBanner({ data }: Props) {
  const { t } = useLocale();
  const { push } = useRouter();

  const photos = useMemo(() => {
    return data.slice(0, 4);
  }, [data]);

  return (
    <div className={cls.container}>
      <div className="container">
        <div className={cls.wrapper}>
          <div className={cls.collage}>
            {/* {photos.map((item) => (
              <div key={"collage-" + item.id} className={cls.item}>
                <FallbackImage
                  src={item.background_img}
                  alt={item.translation?.title}
                />
              </div>
            ))} */}
            <Image src={one} alt="" width={330}height={280}/>
            <Image src={two} alt="" width={330}height={280}/>
            <Image src={three} alt="" width={330}height={280}/>
            <Image src={four} alt="" width={330}height={280}/>
          </div>
          <div className={cls.body}>
            <h1 className={cls.title}>{t("shop.banner.title")}</h1>
            <p className={cls.desc}>{t("shop.banner.desc")}</p>
            <div className={cls.actions}>
              <SecondaryButton onClick={() => push("/shop")}>
                {t("order.now")}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
