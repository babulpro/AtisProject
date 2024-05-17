"use client"
import React, {useState} from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


const Contacts = () => {
    const [formValue,SetFormValue]=useState({fName:'',lName:'',email:'',msg:''})

    const inputChange = (name,value) => {
        SetFormValue(formValue=>(
            {
                ...formValue,
                [name]:value
            }
        ))
    }

    const Submit = async (e) => {
        e.preventDefault();
        if(formValue.fName.length === 0){
            toast.error('fist name is requires')
        }
        else if(formValue.email.length === 0){
            toast.error('email is require')
        }
        // else{
        //     const config = {method: 'POST', body: JSON.stringify(formValue)}
        //     const response = await fetch("/api/logIn", config)
        //     const json=await response.json();
        //     if(json['status']===true){
        //         router.replace("/dashboard")
        //     }
        //     else {
        //         alert(json['message'])
        //     }

        // }
        else{
            const response = await axios.post('/api/contact',formValue)
             if(response.status ===200){
                toast("send successfully")
                SetFormValue({fName:'',lName:'',email:'',msg:''})
             }
        }
        console.log(formValue)
    }
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center -mx-4">
                    <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
                        <a className="mb-6 inline-block text-3xl font-bold leading-none" href="#">
                            <img className="h-12" src="atis-assets/logo/atis/atis-mono-sign.svg" alt="" width="auto"/>
                        </a>
                        <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
                            So much more than a business analytics tool
                        </h2>
                        <p className="mb-8 text-gray-500 leading-loose">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            efficitur nisl sodales egestas lobortis.
                        </p>
                        <a className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl" href="#">
                            Get Started
                        </a>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                            <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                                <form  onSubmit={Submit}>
                                    <div className="mb-6">
                                        <span className="text-sm text-gray-400">Sign Up</span>
                                        <h4 className="text-2xl">Create an account</h4>
                                    </div>
                                    <div className="mb-4 flex flex-wrap -mx-2">
                                        <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                                            <input className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="First Name" value={formValue.fName} onChange={(e)=>inputChange('fName',e.target.value)}/>
                                        </div>
                                        <div className="w-full lg:w-1/2 px-2">
                                            <input className="py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="text" placeholder="Last Name" value={formValue.lName} onChange={(e)=>inputChange('lName',e.target.value)}/>
                                        </div>
                                    </div>
                                    <input className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type="email" placeholder="hello@example.com" value={formValue.email} onChange={(e)=>inputChange('email',e.target.value)}/>
                                    <textarea className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose" type='text' value={formValue.msg} onChange={(e)=>inputChange('msg',e.target.value)} placeholder="Message"/>

                                    <button type="submit" className="mb-4 py-4 w-full rounded text-sm bg-green-600 hover:bg-green-700 text-white font-bold leading-normal transition duration-200">click here</button>
                                     
                                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </section>

    );
};

export default Contacts;