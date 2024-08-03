"use client";
import { BannerProps } from "@/app/data";
import BannerImageComp from "./Banner";
import { useBannerContext } from "@/app/(context)/BannerContext";
import Link from "next/link";
import { MountainIcon, PencilIcon } from "lucide-react";

export default function BannersList() {
  const { bannerList } = useBannerContext();
  return (
    <div className=" bg-primary flex flex-col items-center justify-center">
        <Link href="#" className=" pl-[45%] md:pl-0 flex items-center justify-center text-secondary pt-6" prefetch={false}>
          <MountainIcon className="h-7 w-7 text-secondary"   />
          {/* <PencilIcon/> */}
          <span className="text-3xl   text-secondary font-bold tracking-tighter  md:block m-2">  Banner Hub</span>
        </Link>
    <main className="grid grid-cols-1 lg:grid-cols-2 p-2  gap-6">
      {bannerList.map((banner:BannerProps) => (
        <BannerImageComp key={banner.id} banner={banner}/>
      ))}
    </main>
  </div>
    
  )
}