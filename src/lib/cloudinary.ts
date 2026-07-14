import { Cloudinary } from "@cloudinary/url-gen";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || process.env.VITE_CLOUDINARY_UPLOAD_PRESET || "";

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
});

export const CLOUDINARY_CONFIG = {
  cloudName,
  uploadPreset,
};
