import craft from "@/public/craftman.jpeg";
import bag from "@/public/images/blossomClutch1.2.jpg";
import Image from "next/image";
export default function about(){
    return(
        <div  >
            <div className="about flex font-serif gap-20 justify-center mt-20  " >
                <div className="left w-2/5 ml-2  flex flex-col justify-center">
                    <h1 className="text-2xl ">About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error 
                        dolore dolorem in asperiores officiis alias reiciendis dolorum aliquid minus?
                    </p>
                </div>
                <div className="right mr-2">
                <Image className="rounded-lg" width={200} height={200} src={craft} alt="about_image" />  
                </div>
            </div>






            <div className="about flex font-serif gap-20 justify-center mt-20">
                <div className="left ml-2">
                <Image className="rounded-lg" width={200} height={200} src={bag} alt="About_image" />  
                </div>
                <div className="right w-2/5 mr-2 flex flex-col justify-center  ">
                <h1 className="text-2xl ">About us</h1>
                    <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error 
                        dolore dolorem in asperiores officiis alias reiciendis dolorum aliquid minus?
                        </p>
                </div>
            </div>
            


        </div>
    )
}  
