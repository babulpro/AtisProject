import React from 'react';
import Link from 'next/link';


async function getData(){
    let res = await fetch('https://agency.teamrabbil.com/api/AllProject')
    return res.json()

}

const AllProject =async () => {
    const data = await getData()
 
 
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10" />
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-green-600 font-bold">
                            Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Our Projects
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">

                    {data.map((value)=>{
                            return (
                                <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="relative h-80 mb-5 mx-auto rounded-lg">
                                <img className="h-80 w-full relative h-full rounded-lg object-cover" src={value.image} alt=""/>
                                <div className="absolute inset-0 bg-gray-900 opacity-30 hover:opacity-75 rounded-lg" />
                                <div className="absolute inset-0 p-6 flex flex-col items-start opacity-0 hover:opacity-100 ">
                                    <span className="text-gray-400">{new Date().getFullYear()}</span>
                                    <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                                        {value.title}
                                    </p>
                                    <Link key={value.id} className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href={value.live}>
                                        View Project
                                    </Link>
                                </div>
                            </div>
                              </div>
                            )
                        })}

                    </div>
                    <div className="text-center">
                        <a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
                            View More Projects
                        </a>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>
    );
};

export default AllProject;