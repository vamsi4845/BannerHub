import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import BannerImageComp from "./Banner";
import banners from "@/app/data";
import { useState} from "react";
import { useBannerContext } from "@/app/(context)/BannerContext";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import { BannerProps } from "@/app/data";


export default function Editor({ banner }: { banner: BannerProps }) {
  const [bannerData, setBannerData] = useState(banner);
  const { updateBanner } = useBannerContext();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLImageElement>
  ) => {
    if (
      e.type === "click" &&
      (e.target as HTMLImageElement).tagName === "IMG"
    ) {
      const imageUrl = (e.target as HTMLImageElement).getAttribute("src");
      if (imageUrl) {
        setBannerData((prevData: BannerProps) => ({
          ...prevData,
          image_url: imageUrl,
        }));
      }
    } else if (e.type === "change") {
      const { id, value } = e.target as HTMLInputElement;
      setBannerData((prevData: BannerProps) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSaveChanges = () => {
    updateBanner(bannerData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil 
        className="absolute cursor-pointer text-gray-500 right-3 top-3 z-10"
        />  
      </DialogTrigger>
      <DialogContent className="max-w-xl pl-3 md:h-[95%]">
        <DialogHeader>
          <DialogTitle>
            Edit Banner
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="w-full bg-yellow-200 overflow-hidden relative">
            <BannerImageComp  banner={bannerData} />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Image Attribution: Photo by Xu <span className="underline">FlyD</span>{" "}on{" "}
              <span className="underline"> Unsplash </span>
            </p>
            <div className="flex gap-2 overflow-x-auto">
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    onClick={handleChange}
                    src={banner.image_url}
                    alt={banner.title}
                    width={120}
                    height={120}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <Input
              id="title"
              defaultValue={bannerData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Input
              id="description"
              defaultValue={bannerData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="buttonText"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ButtonText
            </label>
            <Input
              id="buttonText"
              defaultValue={bannerData.buttonText}
              onChange={handleChange}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="w-full bg-emerald-950  font-bold text-md"
                onClick={handleSaveChanges}
              >
                Save Changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// import { Pencil } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import Banner from "./Banner";
// import banners, { BannerProps } from "@/app/data";
// import { useState} from "react";
// import { useBannerContext } from "@/app/(context)/BannerContext";
// import { DialogClose } from "@radix-ui/react-dialog";
// import Image from "next/image";

// export default function Editor({ banner }: { banner: any }) {
//   const [bannerData, setBannerData] = useState(banner);
//  const { updateBanner } = useBannerContext();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLImageElement>
//   ) => {
//     if (
//       e.type === "click" &&
//       (e.target as HTMLImageElement).tagName === "IMG"
//     ) {
//       const imageUrl = (e.target as HTMLImageElement).getAttribute("src");
//       if (imageUrl) {
//         setBannerData((prevData: BannerProps) => ({
//           ...prevData,
//           image_url: imageUrl,
//         }));
//       }
//     } else if (e.type === "change") {
//       const { id, value } = e.target as HTMLInputElement;
//       setBannerData((prevData: BannerProps) => ({
//         ...prevData,
//         [id]: value,
//       }));
//     }
//   };

//   const handleSaveChanges = () => {
//     updateBanner(bannerData);
//     // Close the dialog or show a success message
//   };
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Pencil 
//         className="absolute cursor-pointer text-gray-500 right-3 top-3 z-10"
//         />  
//       </DialogTrigger>
//       <DialogContent className="max-w-xl pl-3 h-full">
//         <DialogHeader>
//           <DialogTitle>
//             Edit Banner
//           </DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4">
//           <div className="w-full bg-yellow-200 overflow-hidden relative">
//             <Banner  banner={bannerData} />
//           </div>
//           <div>
//             <p className="text-sm text-gray-500 mb-2">
//               Image Attribution: Photo by Xu <span className="underline">FlyD</span>{" "}on{" "}
//               <span className="underline"> Unsplash </span>
//             </p>
//             <div className="flex gap-2 overflow-x-auto py-2">
//               {banners.map((banner) => (
//                 <div
//                   key={banner.id}
//                   className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden"
//                 >
//                   <Image
//                     onClick={handleChange}
//                     src={banner.image_url}
//                     alt={banner.title}
//                     width={120}
//                     height={120}
//                     className="cursor-pointer"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Title
//             </label>
//             <Input
//               id="title"
//               defaultValue={bannerData.title}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Description
//             </label>
//             <Input
//               id="description"
//               defaultValue={bannerData.description}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="buttonText"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               ButtonText
//             </label>
//             <Input
//               id="buttonText"
//               defaultValue={bannerData.buttonText}
//               onChange={handleChange}
//             />
//           </div>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button
//                 className="w-full bg-emerald-950  font-bold text-md"
//                 onClick={handleSaveChanges}
//               >
//                 Save Changes
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
