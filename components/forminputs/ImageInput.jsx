'use client';

import { UploadDropzone, generateReactHelpers } from '@uploadthing/react';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import { Pencil, Camera } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const { useUploadThing } = generateReactHelpers(ourFileRouter);

export default function ImageInput({
  label,
  imageUrl,
  setImageUrl,
  setIsUploading, // 👈 Receive from parent
  className = 'col-span-full',
  endpoint = 'CategoryImageUploader',
}) {
  const [localFile, setLocalFile] = useState(null);
  const { startUpload } = useUploadThing(endpoint);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setLocalFile(file);
      setIsUploading(true); // 👈 disable submit
      toast.loading('Uploading...');

      try {
        const res = await startUpload([file]);
        if (res?.[0]?.url) {
          setImageUrl(res[0].url);
          toast.success('Image uploaded!');
        } else {
          toast.error('Upload failed: No URL returned');
        }
      } catch (err) {
        toast.error('Upload failed');
        console.error(err);
      } finally {
        setIsUploading(false); // 👈 re-enable submit
        toast.dismiss();
      }
    }
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => {
              setImageUrl('');
              setLocalFile(null);
            }}
            type="button"
            className="flex items-center space-x-2 bg-slate-900 rounded-md shadow text-white py-2 px-4 hover:bg-slate-800 transition"
          >
            <Pencil className="w-4 h-4" />
            <span>Change Image</span>
          </button>
        )}
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Preview"
          width={250}
          height={167}
          className="rounded-lg border"
        />
      ) : (
        <div className="w-full border-dashed border-2 rounded-lg p-4 text-center cursor-pointer">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center text-white bg-black font-medium rounded-xl text-sm px-5 py-2 text-center dark:bg-white dark:text-black">
              <Camera className="w-4 h-4 mb-1" />
              <span>Choose Image</span>
            </div>
          </label>
        </div>
      )}
    </div>
  );
}
