import React from 'react';

async function getData(){
    let res = await fetch('https://agency.teamrabbil.com/api/AllService')
    return res.json()
}


const Services = async () => {
    const data =await getData()
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
                {
                    data.map((value,i)=>{
                        return(
                            <div key={i} className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                                <div className="max-w-md">
                                    <span className="text-green-600 font-bold">{value.tag}</span>
                                    <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                                       {value.title}
                                    </h2>
                                    <div className="mb-6 max-w-sm">
                                        <p className="text-gray-500 leading-loose">
                                             {value.des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mb-4 flex flex-wrap items-end">
                                    <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                        <img className="w-full h-32 lg:h-48 object-cover rounded" src={value.image1}/>
                                    </div>
                                    <div className="w-full lg:w-1/3 px-3">
                                        <img className="w-full h-32 object-cover rounded" src={value.image2} alt=""/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-start">
                                    <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                        <img className="w-full h-32 object-cover rounded"  src={value.image4} alt=""/>
                                    </div>
                                    <div className="w-full lg:w-2/3 px-3">
                                        <img className="w-full h-32 lg:h-48 object-cover rounded" src={value.image3}alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                


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

export default Services;