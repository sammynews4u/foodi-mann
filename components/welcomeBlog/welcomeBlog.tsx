import React from "react";
import cls from "./welcomeBlog.module.scss";
import { Grid } from "@mui/material";
import { IBlog } from "interfaces";
import FallbackImage from "components/fallbackImage/fallbackImage";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";
import useLocale from "hooks/useLocale";
import { useSettings } from "contexts/settings/settings.context";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
type Props = {
  data?: IBlog;
};

export default function WelcomeBlog({ data }: Props) {
  const { t } = useLocale();
  const { settings } = useSettings();

  // if (data) {
    return (
      <div className={cls.container}>
        <div className="welcome-container">
            <div className={cls.header}>
              <h3 className={cls.heading}>{t("Latest Adverts")}</h3>  
              <Link href="/blog" className={cls.link}>
                <span className={cls.text}>{t("see.all")}</span>
                <ArrowRightLineIcon />
              </Link>
            </div>
          <div className={cls.wrapper}>
            <div>
                <a
                  href={settings?.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls.socialCard}
                >
                  <InstagramLineIcon />
                  <div className={cls.label}>
                    <span className={cls.text}>{t("view.our.insta")}</span>
                    <ArrowRightLineIcon />
                  </div>
                </a>
           </div>
              <Swiper  className=''
            modules={[Pagination, Autoplay]}
                        spaceBetween={5}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        loop={true}
                        speed={300} 
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            900: {
                                slidesPerView: 1
                            },
                            1100: {
                                slidesPerView: 1
                              },
                            }}>
                              <SwiperSlide>
              {/* <Grid item xs={12} md={8}> */}
                <div className={cls.card}>
                  <div className={cls.badge}>
                    <span className={cls.text}>{t("ads")}</span>
                  </div>
                  <h3 className={cls.title}>Broccoli Bacon Salad</h3>
                  <div className={`${cls.body} ${cls.small}`}>
                    This easy chicken and broccoli casserole is <br /> a quick
                    one-skillet dinner fix that&apos;s a guaranteed <br /> crowd
                    pleaser.
                  </div>
                  <div className={cls.float}>
                    <FallbackImage
                      src="/images/broccoli.png"
                      alt="Broccoli Bacon Salad"
                      width={200}height={200}
                    />
                  </div>
                </div>
              {/* </Grid> */}
              </SwiperSlide>
              <SwiperSlide>
              {/* <Grid item xs={12} md={8}> */}
                <div className={cls.card}>
                  <div className={cls.badge}>
                    <span className={cls.text}>{t("ads")}</span>
                  </div>
                  <h3 className={cls.title}>Broccoli Bacon Salad</h3>
                  <div className={`${cls.body} ${cls.small}`}>
                    This easy chicken and broccoli casserole is <br /> a quick
                    one-skillet dinner fix that&apos;s a guaranteed <br /> crowd
                    pleaser.
                  </div>
                  <div className={cls.float}>
                    <FallbackImage
                      src="/images/broccoli.png"
                      alt="Broccoli Bacon Salad"
                      width={200}height={200}
                    />
                  </div>
                </div>
             
              </SwiperSlide>
              </Swiper>
           
          </div>
        </div>
      </div>
    )};
  // } else {
  //   return <div></div>;
  // }

