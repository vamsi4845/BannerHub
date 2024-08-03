"use client";
import BannerImageComp from "./BannerImageComp";
import { useBannerContext } from "@/app/BannerContext";

export default function BannersList() {
  const { bannerList } = useBannerContext();
  return (
    <div className=" bg-primary flex flex-col items-center justify-center">
    <main className="grid grid-cols-1 lg:grid-cols-2 p-4  gap-6 lg:p-20">
      {bannerList.map((banner:any) => (
        <BannerImageComp key={banner.id} banner={banner}/>
      ))}
    </main>
  </div>
    
  )
}