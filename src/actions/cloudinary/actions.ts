"use server"

import { v2 as cloudinary } from "cloudinary"

export const getCloudinarySignature = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  })

  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request({ timestamp }, process.env.CLOUDINARY_API_SECRET)

  return { timestamp, signature, api_key: process.env.CLOUDINARY_API_KEY, cloud_name: process.env.CLOUDINARY_CLOUD_NAME }
}