import Image from "next/image"
import Author from "./_child/author"

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10 bg-rose-300">
        <h1 className="text-bold text-4xl py-12 text-center">Latest post</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 bg-red-300">
        {Post({ imageSrc: "/images/tree1.png" })}
        {Post({ imageSrc: "/images/tree2.png" })}
        {Post({ imageSrc: "/images/tree3.png" })}
        {Post({ imageSrc: "/images/tree4.png" })}
        {Post({ imageSrc: "/images/tree5.png" })}
        {Post({ imageSrc: "/images/tree6.png" })}
    

        </div>
    </section>
  )
}

function Post(){
    return (
        <div className="item">
            <div className="images">
            
            <Image src={"/images/tree2.png"} width={500} height={350} />


            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                    <a className="text-orange-600 hover:text-orange-700">Business,Travel</a>
                    <a className="text-gray-800 hover:text-gray-700">-september 25,2023</a>

                </div>
                <div className="title">
                    <a className="text-xl font-bold text-gray-800 hover:text-gray-600 ">your most unhappy customer are your greatest source of learning</a>

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