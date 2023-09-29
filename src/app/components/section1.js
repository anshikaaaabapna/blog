// import Image from "next/image"
// import Author from "./_child/author"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// "use client";

// export default function section1() {
    
//   return (
//     <section className="py-16" >
//         <div className="container mx-auto md:px-20">
//             <h1 className="font-bold text-4xl pb-12 text-center">
//                 Trending
//             </h1>
//             <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//            </Swiper>
//             {Slide()}
//         </div>

//     </section>
//   )
// }
// function Slide(){
//     return(
//         <div className="grid md:grid-cols-2">
//             <div className="image">
//                 <Image src={"/images/tree1.png"} width={600} height={600} />

//             </div>
//             <div className="info flex justify-center flex-col">
//                 <div className="cat">
//                     <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
//                     <a className="text-gray-800 hover:text-gray-700">-september 25,2023</a>

//                 </div>
//                 <div className="title">
//                     <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">your most unhappy customer are your greatest source of learning</a>

//                 </div>
//                 <p className="text-gray-500 py-3"> Even the all powerful pointing has no control about the blind text it is almost
//                     uorthographic life one day however a small line of blind text by the name of loream
//                     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
//                 </p>
//                 <Author />

//             </div>
//         </div>
//     )
// }
"use client"; // Place this at the top of the file

import Image from "next/image"
import Author from "./_child/author"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper';

export default function section1() {
    SwiperCore.use([Autoplay])
    
  return (
    <section className="container mx-auto md:px-20 py-16 bg-rose-300" >
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">
                Trending
            </h1>
            <Swiper
      
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }}
     
    >
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      <SwiperSlide>{Slide()}</SwiperSlide>
      
      {/* ... */}
    </Swiper>
            
        </div>

    </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2 bg-rose-300">
            <div className="image">
                <Image src={"/images/tree1.png"} width={600} height={600} />

            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
                    <a className="text-gray-800 hover:text-gray-700">-september 25,2023</a>

                </div>
                <div className="title">
                    <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 ">your most unhappy customer are your greatest source of learning</a>

                </div>
                <p className="text-gray-500 py-3"> Even the all powerful pointing has no control about the blind text it is almost
                    uorthographic life one day however a small line of blind text by the name of loream
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </p>
                <Author />
            </div>
        </div>
    )
}

