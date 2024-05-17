import React from 'react';

async  function getData(){
    let res = await fetch("https://agency.teamrabbil.com/api/HeroList",{method:"GET"})
    let result = res.json()
    return result
}


const Hero =async () => {
    let data = await getData()
    

    return (
        <div className=''>
            <section className='relative bg-gray-50'>
                <div className='relative pt-12 lg:pt-20 pb-20 z-10'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center'>
                                <div className='w-full text-center lg:text-left'>
                                    <div className='max-w-md mx-auto lg:mx-0'>
                                        <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading'>
                                           {data.title}
                                        </h2>
                                    </div>
                                    <div className='max-w-sm mx-auto lg:mx-0'>
                                        <p className='mb-6 text-gray-400 leading-loose'> 
                                            {data.description}
                                        </p>
                                         
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/2 px-4'>
                                <div className='flex flex-wrap lg:mb-4 lg:ml-6'>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data.image1}  alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data.image2}   alt=''/>
                                </div>
                                <div className='flex flex-wrap lg:mb-4 lg:mr-6'>
                                    <img className='w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none' src={data.image3}  alt=''/>
                                    <img className='w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none' src={data.image4}  alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;