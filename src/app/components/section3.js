// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';
// import Author from './_child/author';
// import 'swiper/css';

// export default function section3() {
//   return (
//     <section className="container mx-auto md:px-20 py-16">
//       <h1 className="text-4xl text-center">Most Popular</h1>
//       <Swiper slidesPerView={2}>
//         <SwiperSlide>{Post()}</SwiperSlide>
//       </Swiper>
//     </section>
//   )
// }

// function Post(){
//     return (
//         <div className="item">
//             <div className="images">
            
//             <Image src={"/images/tree2.png"} width={500} height={350} />


//             </div>
//             <div className="info flex justify-center flex-col py-4">
//             <div className="cat">
//                     <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
//                     <a className="text-gray-800 hover:text-gray-700">-september 25,2023</a>

//                 </div>
//                 <div className="title">
//                     <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">your most unhappy customer are your greatest source of learning</a>

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
// Import "use client" directive at the top of the file
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Author from './_child/author';

export default function section3() {
  return (
    <section className="container mx-auto md:px-20 py-16 bg-rose-200">
      <h1 className="text-4xl text-center">Most Popular</h1>
      <Swiper slidesPerView={2}>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        <SwiperSlide>
          <Post />
        </SwiperSlide>
        {/* Add more SwiperSlides for other posts */}
      </Swiper>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Image src="/images/tree5.png" width={600} height={400} />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
          <a className="text-gray-800 hover:text-gray-700">-september 25, 2023</a>
        </div>
        <div className="title">
          <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">your most unhappy customer are your greatest source of learning</a>
        </div>
        <p className="text-gray-500 py-3">Even the all-powerful pointing has no control about the blind text it is almost uorthographic life one day; however, a small line of blind text by the name of lorem.</p>
        <Author />
      </div>
    </div>
  );
}

