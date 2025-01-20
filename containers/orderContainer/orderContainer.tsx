import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { Order } from "interfaces";
import OrderProducts from "components/orderProducts/orderProducts";
import OrderInfo from "components/orderInfo/orderInfo";
import OrderImage from "components/orderImage/orderImage";
import cls from "./orderContainer.module.scss";

type Props = {
  data?: Order;
  loading: boolean;
};

export default function OrderContainer({ data, loading }: Props) {
  const isDesktop = useMediaQuery("(min-width:1140px)");

  return (
    <div className={cls.ordersSections}>
       <div className={cls.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126451.93815313259!2d3.324160671837376!3d6.596380755668529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d02f6f46a07%3A0xa0a34e59d3c23b9a!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1698434398456!5m2!1sen!2sng"
                        width="100%"
                        height="950"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
    {/* <div className={cls.root}> */}
      {/* {!loading && (
        <Grid container spacing={isDesktop ? 4 : 1.5}>
          <Grid item xs={12} md={7} spacing={isDesktop ? 4 : 1.5}>
             <OrderProducts data={data} /> 
           {!!data?.image_after_delivered && <OrderImage data={data} />}
           
          </Grid> */}
          <div className={cls.info}>
          <Grid item xs={12} md={5}>
            <OrderInfo data={data} />
          </Grid>
        </div>
        {/* </Grid>
      )} */}
    {/* </div> */}
    </div>
  );
}
