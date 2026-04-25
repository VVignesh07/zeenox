import { Cloudinary } from "@cloudinary/url-gen";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "";
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "";

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
});

export const CLOUDINARY_CONFIG = {
  cloudName,
  uploadPreset,
};
