"use client";
import { BannerProps } from "@/app/data";
import BannerImageComp from "./Banner";
import { useBannerContext } from "@/app/(context)/BannerContext";

export default function BannersList() {
  const { bannerList } = useBannerContext();
  return (
    <div className=" bg-primary flex flex-col items-center justify-center">
    <main className="grid grid-cols-1 lg:grid-cols-2 p-4  gap-6 lg:p-20">
      {bannerList.map((banner:BannerProps) => (
        <BannerImageComp key={banner.id} banner={banner}/>
      ))}
    </main>
  </div>
    
  )
}