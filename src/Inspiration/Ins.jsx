import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Ins = () => {
    return (
        <div className="my-16">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#8A3324]">Our Inspiration</h1>
                <p className="text-xs md:text-base px-8 md:px-24 py-2 md:py-6" >At Cibo, we are inspired by the worlds rich tapestry of flavors, the joy of shared meals, and the magic of culinary exploration. Our journey is shaped by a few key sources of inspiration</p>
            </div>
{/* -----------------   1   ------------------ */}
            <div className="mb-4 flex flex-col md:flex-row gap-6 px-10 md:px-36 " >

               <div className='flex-1 '>
               <div data-aos="fade-right">
                    <div className="">
                         <img className="  rounded-3xl" 
                         src="https://i.ibb.co/rF9hYxR/global-cuisine.png" alt="" />
                    </div>
                </div>
               </div>
            
                <div className='flex-1'>
                <div data-aos="fade-left">
                    <div className=" ">
                         <h1 className='text-3xl font-bold mb-6 md:mt-12'>Global Cuisine</h1>
                         <p>We draw inspiration from the diversity of global cuisines. From the bold spices of India to the comforting flavors of Italian pasta, we explore the worlds culinary traditions to create unique, unforgettable tastes.</p>
                     </div>
                </div>
                </div>

               
            </div>

{/* -----------------   2   ------------------ */}

<div className="flex mb-4 flex-col md:flex-row-reverse  gap-6 px-10 md:px-36 " >
<div className='flex-1 '>
<div data-aos="fade-left">
     <div className="">
          <img className="  rounded-3xl" 
          src="https://i.ibb.co/bdCH8KP/bb.jpg" alt="" />
     </div>
 </div>
</div>

 <div className='flex-1'>
 <div data-aos="fade-right">
     <div className=" ">
          <h1 className='text-3xl font-bold mb-6 md:mt-12'>Artistry in Every Food</h1>
          <p>We consider each dish a work of art. Just as an artist selects colors, shapes, and textures to create a masterpiece, our chefs craft each dish with precision and passion, ensuring it is as pleasing to the eyes as it is to the palate.</p>
      </div>
 </div>
 </div>
</div> 

{/* -----------------   3  ------------------- */}
<div className="mb-4 flex flex-col md:flex-row gap-6 px-10 md:px-36 " >

<div className='flex-1 '>
<div data-aos="fade-right">
     <div className="">
          <img className="  rounded-3xl" 
          src="https://i.ibb.co/KxfHPKm/goppa.jpg" alt="" />
     </div>
 </div>
</div>

 <div className='flex-1'>
 <div data-aos="fade-left">
     <div className=" ">
          <h1 className='text-3xl font-bold mb-6 md:mt-12'>Family and Tradition</h1>
          <p>The warmth of shared family meals and the heritage of generations are at the core of our brand. We cherish the traditions of our culinary past and seek to pass on the love and respect for food and beverage to future generations.</p>
      </div>
 </div>
 </div>


</div>


{/* -----------------   4   ------------------ */}

<div className="flex mb-4 flex-col md:flex-row-reverse  gap-6 px-10 md:px-36 " >
<div className='flex-1 '>
<div data-aos="fade-left">
     <div className="">
          <img className="  rounded-3xl" 
          src="https://i.ibb.co/bgzNvSv/innnn.webp" alt="" />
     </div>
 </div>
</div>

 <div className='flex-1'>
 <div data-aos="fade-right">
     <div className=" ">
          <h1 className='text-3xl font-bold mb-6 md:mt-12'>Innovation and Creativity</h1>
          <p>We constantly push the boundaries of creativity and innovation in the kitchen. We are inspired by the challenge of reinventing classic dishes and creating new culinary experiences that surprise and delight.</p>
      </div>
 </div>
 </div>
</div> 



        </div>
    );
};

export default Ins;