"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";
import { CLOUDINARY_CONFIG } from "@/lib/cloudinary";
import { toast } from "sonner";

interface CloudinaryUploadProps {
  onSuccess: (url: string) => void;
  folder?: string;
  label?: string;
}

declare global {
  interface Window {
    cloudinary: any;
  }
}

const CloudinaryUpload = ({ onSuccess, folder = "zeenox", label = "Upload Image" }: CloudinaryUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    // Load Cloudinary Widget script
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      script.onload = () => {
        console.log("Cloudinary Widget script loaded");
      };
      document.body.appendChild(script);
    }
  }, []);

  const openWidget = () => {
    if (!CLOUDINARY_CONFIG.cloudName || !CLOUDINARY_CONFIG.uploadPreset) {
      toast.error("Cloudinary credentials missing in .env file");
      return;
    }

    if (window.cloudinary) {
      setLoading(true);
      widgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: CLOUDINARY_CONFIG.cloudName,
          uploadPreset: CLOUDINARY_CONFIG.uploadPreset,
          folder: folder,
          multiple: false,
          clientAllowedFormats: ["png", "jpg", "jpeg", "webp", "mp4"],
          maxFileSize: 10000000, // 10MB
        },
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            const uploadedUrl = result.info.secure_url;
            setUploaded(true);
            setLoading(false);
            onSuccess(uploadedUrl);
            toast.success("File uploaded successfully!");
          } else if (error) {
            setLoading(false);
            toast.error("Upload failed: " + error.message);
          } else if (result.event === "close") {
            setLoading(false);
          }
        }
      );
      widgetRef.current.open();
    } else {
      toast.error("Cloudinary widget not loaded. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        type="button"
        variant={uploaded ? "outline" : "default"}
        onClick={openWidget}
        disabled={loading}
        className="w-full flex gap-2 items-center justify-center min-h-[50px] rounded-xl"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : uploaded ? (
          <CheckCircle2 className="text-green-500" size={20} />
        ) : (
          <Upload size={20} />
        )}
        {loading ? "Opening Widget..." : uploaded ? "Uploaded Successfully" : label}
      </Button>
      {uploaded && (
        <p className="text-[10px] text-muted-foreground italic">
          You can click again to replace the file.
        </p>
      )}
    </div>
  );
};

export default CloudinaryUpload;
