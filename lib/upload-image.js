import { uploadFiles } from '@uploadthing/react';

export async function uploadCategoryImage(file) {
  const res = await uploadFiles('CategoryImageUploader', {
    files: [file],
  });

  return res?.[0]?.url;
}
