import {NextResponse} from 'next/server'
import axios from "axios"

export async function POST(req,res){
    const JSONBody = await req.json
    try{
        const res = await axios.post('https://agency.teamrabbil.com/api/CreateContact',JSONBody)
        return NextResponse.json({status:"success"})
        
    }
    catch(e){
        return NextResponse.json(e)
    }
}