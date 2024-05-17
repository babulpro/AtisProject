import React from 'react';


async function getData(){
    let res = await fetch('https://agency.teamrabbil.com/api/TeamList')
    return res.json()
}


const Team = async () => {
    const data = await getData()
      

    return (
        <div>
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
                    <div className="container mx-auto px-4">
                        <div className="mb-8 lg:mb-16 text-center mx-auto max-w-xl">
                            <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Check our awesome team members
                            </h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">

                         {
                            data.map((value)=>{
                                return(
                                    <div className="mb-6 w-full lg:w-1/2 px-4">
                                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                                    <img className="w-full lg:w-1/3 h-80 object-cover" src= {value.image} alt=""/>
                                    <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                                        <h4 className="mb-2 text-2xl font-bold font-heading">
                                           {value.name}
                                        </h4>
                                        <p className="mb-4 text-gray-500 leading-loose">
                                           {value.bio}
                                        </p>
                                        <div className="flex">
                                            <a className="mr-3" href="#">
                                                <img src={value.facebook} alt="" />
                                            </a>
                                            <a className="mr-3" href="#">
                                                <img src= {value.twitter} alt="" />
                                            </a>
                                            <a href="#">
                                                <img src={value.instagram} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                         }   
                         
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
        </div>
    );
};
export default Team;
 