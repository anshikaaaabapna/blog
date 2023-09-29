import Author from "./_child/author"
import Image from "next/image"

export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16 bg-pink-300">
        <div className="grid lg:grid-cols-2">
            <div className="item">
            <h1 className="text-4xl  py-12 font-bold">Business</h1>
            <div className="flex flex-col gap-6">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                

            </div>
            </div>
            <div className="item">
            <h1 className="text-4xl  py-12 font-bold">Travel</h1>
            <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            
            
            </div>
            </div>

           
        </div>
      
    </section>
  )
}
 function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Image src="/images/tree6.png" className="rounded" width={300} height={250} />

            </div>
            <div className="info flex justify-center flex-col">
            <div className="cat">
          <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
          <a className="text-gray-800 hover:text-gray-700">-september 25, 2023</a>
        </div>
        <div className="title">
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">your most unhappy customer are your greatest source of learning</a>
        </div> 
        <Author />

            </div>

        </div>
    )
 }