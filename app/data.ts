export interface BannerProps {
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


const banners: BannerProps[] = [
    {
      id: "1",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:
        "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/landscape.png",
      image_url:
        "https://images.unsplash.com/photo-1607246749144-7bc0e401623c?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw0fHxKYXBhbmVzZSUyMGZvb2R8ZW58MHx8fHwxNzIyNTA2Mzc4fDA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=820&w=820",
      styles: {
        title: "text-2xl text-secondary font-bold w-[300px] mt-10",
        description: "mt-4 text-secondary",
        footer:"mt-auto mb-1",
        button: "text-yellow-500 bg-secondary font-bold text-md",
        image: " absolute w-[300px] h-[300px]  rounded-full overflow-hidden transform translate-x-[47px] translate-y-[28px] bottom-2 right-0",
      },
    },
     {
      id: "2",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:"https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/landscape.png",
      image_url:
        "https://images.unsplash.com/photo-1607247098729-accb1f156620?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw2fHxKYXBhbmVzZSUyMGZvb2R8ZW58MHx8fHwxNzIyNTA2Mzc4fDA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=500&w=500",
      styles: {
        title: "text-2xl font-medium w-[300px] mt-14 text-primary",
        description: "mt-10",
        footer:"mt-8",
        button: "text-primary bg-sky-400 font-bold text-md",
        image:"absolute w-[180px] h-[180px]  rounded-full overflow-hidden transform translate-x-[56px] translate-y-[25px] bottom-24 right-24",
      },
    },
    {
      id: "3",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:
        "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/3/landscape.png",
      image_url:
        "https://images.unsplash.com/photo-1672459601936-8e6a42116e1e?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHwxMHx8SmFwYW5lc2UlMjBmb29kfGVufDB8fHx8MTcyMjUwNjM3OHww&ixlib=rb-4.0.3&crop=edges&fit=crop&h=735&w=493",
      styles: {
        title: "text-2xl font-bold w-[300px] mt-10 text-secondary",
        description: "mt-4 text-secondary",
        footer:"mt-auto mb-1",
        button: " bg-inherit text-secondary hover:bg-inherit font-bold text-md px-4 py-2 ml-2 rounded-full",
        image:"absolute w-[177px] h-[262px] overflow-hidden transform translate-x-[24px] translate-y-[24px] bottom-12 right-16 rounded-t-full",
      },
    },
    {
      id: "4",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:"https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/18/landscape.png",
      image_url:"https://images.unsplash.com/photo-1554136478-4d88f73654da?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw1fHxyYW1lbnxlbnwwfHx8fDE3MjI1MDYzNTZ8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=556&w=556",
      styles: {
        title: "text-2xl font-bold text-orange-500 w-[300px] mt-10",
        description: "mt-4 text-primary",
        footer:"mt-auto ",
        button: "bg-orange-500 font-bold text-md text-primary",
        image:"absolute w-[240px] h-[320px] overflow-hidden transform bottom-0 right-0",
      },
    },
    {
      id: "5",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:
        "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/landscape.png",
        image_url:"https://images.unsplash.com/photo-1558554970-1e3279cd745d?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw4fHxSYW1lbnxlbnwwfHx8fDE3MjI1MDYzNzh8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=733&w=733",
      styles: {
        title: "text-2xl font-bold mb-2 text-primary w-[200px] mt-10",
        description: "mt-4 text-primary mb-4",
        footer:"mt-3 mb-1 ml-60",
        button: " bg-inherit text-secondary font-bold text-md",
        image:"absolute w-[260px] h-[220px] overflow-hidden transform translate-x-[28px] translate-y-[28px] bottom-24 right-8",
      },
    },
    {
      id: "6",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:"https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/17/landscape.png" ,
      image_url:"https://images.unsplash.com/photo-1530260626688-048279320445?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHwyfHxqYXBhbmVzZSUyMGN1aXNpbmV8ZW58MHx8fHwxNzIyNTgyMjUzfDA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=710&w=710",
           styles: {
        title: "text-2xl font-bold mb-2 text-orange-500 w-[300px] mt-10",
        description: "mt-4",
        footer:"mt-auto",
        button: " bg-orange-500  font-bold text-md",
        image:"absolute w-[180px] h-[180px] rounded-xl overflow-hidden rotate-45  bottom-28 right-12",

      },
    },
    {
      id: "7",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:
        "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/7/landscape.png",
        image_url:"https://images.unsplash.com/photo-1478749485505-2a903a729c63?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHwyfHxyYW1lbnxlbnwwfHx8fDE3MjI1MDYzNTZ8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=587&w=592",
      styles: {
        title: "text-2xl font-bold mb-2 text-cyan-200 w-[300px] mt-10",
        description: "mb-4 text-primary",
        footer:"mt-auto",
        button: "bg-orange-500 font-bold text-md",
        image:"absolute w-[212px] h-[212px] overflow-hidden rounded-bl-[30px] rounded-tr-[30px] transform translate-x-[27px] translate-y-[28px] bottom-20 right-12",
      },
    },
    {
      id: "8",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:
        "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/8/landscape.png",
        image_url:"https://images.unsplash.com/photo-1593357897684-3464383fe8f3?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw3fHxUZW1wdXJhfGVufDB8fHx8MTcyMjU3OTk0OXww&ixlib=rb-4.0.3&crop=edges&fit=crop&h=540&w=535",
      styles: {
        title: "text-2xl font-bold mb-2 text-primary w-[300px] mt-14",
        description: "mb-4 text-primary",
        footer:"mt-4 mb-1",
        button: "bg-orange-500 font-bold text-md",
        image:"absolute w-[173px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] overflow-hidden transform translate-x-[27px] translate-y-[37px] bottom-24 right-8",
      },
    },
    {
      id: "9",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:"https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/14/landscape.png",
      image_url:"https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHwzfHxyYW1lbnxlbnwwfHx8fDE3MjI1MDYzNTZ8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=900&w=663",
            styles: {
        title: "text-2xl font-bold mb-2 text-primary w-[300px] mt-10",
        description: "mb-4 text-primary",
        footer:"mt-auto",
        button: "bg-primary text-stone-600 font-bold text-md",
        image:"absolute w-[220px] h-[320px] rounded-l-[40px] overflow-hidden transform bottom-0 right-0",
      },
    },
    {
      id: "10",
      title: "Authentic Japanese Cuisine",
      description: "Indulge in Traditional Dishes",
      buttonText: "Explore Now",
      template_url:"https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/12/landscape.png",
      image_url:"https://images.unsplash.com/photo-1672459601936-8e6a42116e1e?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHwxMHx8SmFwYW5lc2UlMjBmb29kfGVufDB8fHx8MTcyMjUwNjM3OHww&ixlib=rb-4.0.3&crop=edges&fit=crop&h=520&w=520",
      styles: {
        title: "text-2xl font-bold mb-2 text-red-500 w-[200px] mt-9",
        description: "mb-4 text-secondary",
        footer:"mt-auto",
        button: "bg-red-500 text-primary",
        image:"absolute w-[190px] h-[200px]  rounded-full overflow-hidden transform translate-x-[12px] translate-y-[38px] bottom-24 right-4",
      },
    },
  ];

  export default banners;