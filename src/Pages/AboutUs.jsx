import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from '../Assets/Images/aboutMainImage.png';
import CarouselSlide from "../Components/CarouselSlide";
import { persons } from "../Constants/PersonsData";

function AboutUs(){

    
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Out goal is to provide the affordabe and quality education to the world. 
                            We are providing the platform for the aspiring teachers and students to 
                            share their skills, creativity and knowledge with each other to empower 
                            and contribute in the growth to the world.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img 
                            id="test1" 
                            style={{filter: "drop-shadow(10px 10px 5px rgb(0,0,0))"}} 
                            className="drop-shadow-2xl" 
                            src={aboutMainImage} 
                            alt="Main Image" />
                    </div>
                </div>

                <div className="carousel w-1/2 my-16 m-auto">
                    {persons && persons.map(item  => 
                        <CarouselSlide {...item} key={item.slideNumber} totalSlides={persons.length} />
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs;