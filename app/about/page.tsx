import craft from "@/public/craftman.jpeg";
import bag from "@/public/images/blossomClutch1.2.jpg";
import Image from "next/image";
export default function about(){
    return(
        <div className="lg:w-full md:w-full w-4/5 m-auto text-sm lg:text-lg   "  >
            <div className=" about lg:flex  md:flex grid font-serif gap-20 flex-row-reverse justify-center mt-20  " >
            <div className=" right  mb-4 ">
          <Image className="rounded-lg mx-auto h-auto w-full lg:w-auto lg:h-96 md:w-auto md:h-96  "  src={craft} alt="about_image" />  
               </div>
                <div className="left lg:w-2/5 md:w-2/5  text-center  flex flex-col justify-center ">
                    <h1 className="text-2xl ">About us</h1>
                    <p  >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error 
                        dolore dolorem in asperiores officiis alias reiciendis dolorum aliquid minus?
                    </p>
                </div>
               
            </div>






            <div className="about lg:flex md:flex grid font-serif  gap-20 justify-center mt-20">
          
                
           
                <div className="left  mb-4">
                <Image className="rounded-lg mx-auto  h-auto w-full  " src={bag} alt="About_image" />  
                </div>
                <div className="right text-center lg:w-2/5 md:w-2/5 mr-2 flex flex-col justify-center mb-4   ">
                <h1 className="text-2xl">About us</h1>
                    <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error 
                        dolore dolorem in asperiores officiis alias reiciendis dolorum aliquid minus?
                        </p>
                </div>
             
            </div>
            


        </div>
    )
}  
