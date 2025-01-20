import { Gallery } from "interfaces";
import { SwiperRef} from "swiper/react";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import FallbackImage from "components/fallbackImage/fallbackImage";
import getImage from "utils/getImage";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Mousewheel, Pagination } from "swiper";
import cls from "./productGalleries.module.scss";
// import { AuthContainer } from 'containers/auth/auth';

type Props = {
  galleries?: Gallery[];
};

export default function ProductGalleries({ galleries = [] }: Props) {
  const { t } = useTranslation();
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className={cls.wrapper}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        mousewheel={true}
        modules={[Pagination,]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {galleries?.map((gallery) => (
          <SwiperSlide key={gallery?.id}>
            <div className={cls.imageWrapper}>
              <FallbackImage
                fill
                src={getImage(gallery?.path)}
                alt={t("gallery")}
                sizes="320px"
                quality={90}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
