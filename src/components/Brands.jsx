import React from 'react';
async function getData(){
    let res = await fetch('https://agency.teamrabbil.com/api/BrandList')
    return res.json()
}

const Brands =async () => {
    let data = await getData()
   
     


     
 
    return (
        <section className="py-20">
            
            <div className="container mx-auto px-4 text-center">
                <h3 className="mb-16 text-2xl font-heading">
                    Trusted by brands all over the world. 
                </h3>
                <div className="flex flex-wrap -mx-2">
                {
                        data.map((item,i)=>{
                          return(
                              <div key={i} className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2">
                                  <div>
                                      <img className="mx-auto h-8" src={item['image']} alt=""/>
                                  </div>
                              </div>
                          )
                        })
                    }

                     
        
                </div>
            </div>
        </section>

    );
};

export default Brands