import { useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function CourseDescription(){

    const { state } = useLocation();
    const { role, data } = useSelector((state) => state?.auth);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-3 sm:px-20 flex flex-col justify-center items-center text-white">
                <div className="w-[80%] grid sm:grid-cols-2 gap-10 py-5 sm:py-10 relative">
                    <div className="space-y-5">
                        <img 
                            className="w-full m-auto"
                            src={state?.thumbnail?.secure_url} 
                            alt="thumbnail" 
                        />
                        <div className="space-y-5 m-auto">
                            <div className="flex flex-col items-center justify-center text-xl">
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Total Lectures :&nbsp;
                                    </span>
                                    {state?.numberOfLecture}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Instructor :&nbsp;
                                    </span>
                                    {state?.createdBy}
                                </p>
                            </div>
                            {
                                role==="ADMIN" || data?.subscription?.status==="ACTIVE" ? (
                                    <button className="w-full bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                        Watch Lectures
                                    </button>
                                ) : (
                                    <button className="w-full bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                        Subscribe
                                    </button>
                                )
                            }
                        </div>
                    </div>

                    <div className="text-xl">
                        <h1 className="text-3xl font-bol text-yellow-500 mb-5 text">
                            {state?.title}
                        </h1>
                        <p className="text-yellow-500"> Course Descripion </p>
                        <p>
                            {state?.description}
                        </p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default CourseDescription;