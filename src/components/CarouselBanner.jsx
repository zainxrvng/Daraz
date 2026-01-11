import { Carousel } from "flowbite-react";
import StarIcon from "@mui/icons-material/Star";

export default function CarouselBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* carousel  4/5 width on desktop */}
        <div className="lg:col-span-3 h-56 sm:h-64 md:h-80 2xl:h-96 rounded-lg overflow-hidden">
          <Carousel slideInterval={5000} indicators={false}>
            <img
              src="src/assets/pic1.webp"
              className="w-full h-full object-cover"
              alt="slide1"
            />
            <img
              src= "src/assets/pic2.webp"
              className="w-full h-full object-cover"
              alt="slide2"
            />
            <img
              src="src/assets/pic1.webp"
              className="w-full h-full object-cover"
              alt="slide3"
            />
          </Carousel>
        </div>

        {/* right banner  1/5 width on desktop */}
        <div className="lg:col-span-1 bg-gradient-to-b from-[#ffedd6] via-[#ffc3e3] to-white rounded-lg p-4 flex flex-col items-center text-center text-sm">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="src/assets/smalllogo.png"
              alt="logo"
              className="h-6 object-contain"
            />
            <span className="font-semibold">Try Daraz App</span>
          </div>

          <div className="bg-[url('https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png')] bg-cover w-full rounded-md p-3 text-white">
            <div className="flex items-center justify-center gap-1 mb-1">
              <StarIcon sx={{ fontSize: 18 }} />
              <span>4.8 Rated</span>
            </div>
            <p className="mb-2">Download the App now</p>

            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
                className="w-7"
                alt="icon"
              />
              <span className="text-xs">Free shipping</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
                className="w-7"
                alt="icon"
              />
              <span className="text-xs">Exclusive vouchers</span>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              <img
                src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg"
                className="w-20"
                alt="qr"
              />
              <div className="flex flex-col gap-1">
                <img
                  src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png"
                  className="h-7 object-contain"
                  alt="google-play"
                />
                <img
                  src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png"
                  className="h-7 object-contain"
                  alt="app-store"
                />
              </div>
            </div>

            <button className="mt-3 bg-yellow-400 text-black font-semibold px-4 py-1 rounded hover:bg-yellow-500">
              Download the App Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
