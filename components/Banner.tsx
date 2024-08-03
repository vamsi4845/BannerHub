"use client";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import { BannerProps } from "@/app/data";
import Editor from "@/components/Editor";



export default function Banner ({ banner }: { banner: BannerProps })  {
  return (
    <Card
      key={banner.id}
      style={{
        backgroundImage: `url(${banner.template_url})`,
      }}
      className="relative w-[550px] h-[320px] flex flex-col overflow-hidden bg-cover rounded-none bg-no-repeat border-none p-4"
    >
      <CardContent className="flex flex-col justify-between">
        <p className={banner.styles.title}>{banner.title}</p>
        <p className={banner.styles.description}>{banner.description}</p>
             <Editor banner={banner}/>
        <div className={banner.styles.image}>
          <Image width={550} height={320} src={banner.image_url} alt="logo" className="w-full h-full object-cover"  priority/>
        </div>
      </CardContent>
      <CardFooter className={banner.styles.footer}>
        <Button className={banner.styles.button}>{banner.buttonText}</Button>
      </CardFooter>
    </Card>
  );
};


