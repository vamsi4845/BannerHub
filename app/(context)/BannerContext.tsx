'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import banners from '../data';
import { BannerProps } from '../data';
interface BannerContextType {
  bannerList: BannerProps[];
  updateBanner: (updatedBanner: BannerProps) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children}: { children: ReactNode}) {
  const [bannerList, setBannerList] = useState(banners);

  const updateBanner = (updatedBanner: BannerProps) => {
    setBannerList(prevList =>
      prevList.map(banner =>
        banner.id === updatedBanner.id ? updatedBanner : banner
      )
    );
  };

  return (
    <BannerContext.Provider value={{ bannerList,updateBanner }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBannerContext() {
  const context = useContext(BannerContext);
  if (context === undefined) {
    throw new Error('useBannerContext must be used within a BannerProvider');
  }
  return context;
}