import { NextResponse } from 'next/server'
import cv from '../(main)/cv/cv.json'

export async function GET() {
  return NextResponse.json(cv)
}
