import runPython from "./runPython";
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { code, input } = await req.json();
    const result = await runPython(code, input);
    
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      data: error.message,
      status: false,
    }, { status: 500 });
  }
}