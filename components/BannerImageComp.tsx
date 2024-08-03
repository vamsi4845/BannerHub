"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import html2canvas from "html2canvas";
import EditorBannerTemplateBS from "./EditorBannerTemplateBS";

interface Banner {
  id: string;
  template_url: string;
  title: string;
  description: string;
  image_url: string;
  buttonText: string;
  styles: {
    title: string;
    description: string;
    image: string;
    footer: string;
    button: string;
  };
}

interface BannerImageCompProps {
  banner: Banner;
}

export interface BannerImageCompHandle {
  capture: () => Promise<HTMLCanvasElement>;
}

const BannerImageComp = forwardRef<BannerImageCompHandle, BannerImageCompProps>(({ banner }, ref) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    capture() {
      if (bannerRef.current) {
        return html2canvas(bannerRef.current);
      }
      return Promise.reject(new Error("No element to capture"));
    }
  }));

  return (
    <Card
      ref={bannerRef}
      key={banner.id}
      style={{
        backgroundImage: `url(${banner.template_url})`,
      }}
      className="relative w-[550px] h-[320px] flex flex-col overflow-hidden bg-cover rounded-none bg-no-repeat border-none p-4"
    >
      <CardContent className="flex flex-col justify-between">
        <p className={banner.styles.title}>{banner.title}</p>
        <p className={banner.styles.description}>{banner.description}</p>
             <EditorBannerTemplateBS banner={banner}/>
        <div className={banner.styles.image}>
          <img src={banner.image_url} alt="logo" className="w-full h-full object-cover" />
        </div>
      </CardContent>
      <CardFooter className={banner.styles.footer}>
        <Button className={banner.styles.button}>{banner.buttonText}</Button>
      </CardFooter>
    </Card>
  );
});

export default BannerImageComp;


