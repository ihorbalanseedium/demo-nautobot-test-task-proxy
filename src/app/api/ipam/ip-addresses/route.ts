import {NextRequest, NextResponse} from "next/server";

export const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};


export async function OPTIONS(req: NextRequest) {
    return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const res = await fetch(`https://demo.nautobot.com/api/ipam/ip-addresses/?${searchParams}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
    })
    const data = await res.json()

    const response =  Response.json(data)

    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')


    return response
}
