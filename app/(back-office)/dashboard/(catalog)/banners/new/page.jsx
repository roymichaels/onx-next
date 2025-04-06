'use client';

import FormHeader from '@/components/backoffice/FormHeader';
import ImageInput from '@/components/forminputs/ImageInput';
import SubmitButton from '@/components/forminputs/SubmitButton';
import TextareaInput from '@/components/forminputs/TextAreaInput';
import { uploadFiles } from '@/lib/uploadthing';

import TextInput from '@/components/forminputs/TextInput';
import { generateSlug } from '@/lib/generateSlug';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makePostRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';

export default function NewBanner() {
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const title = watch('title');
  const link = watch('link');
  const allFieldsFilled =
    title?.trim() !== '' &&
    link?.trim() !== '' &&
    imageUrl?.startsWith('http') &&
    !isUploading;

  async function onSubmit(data) {
    {
      /*
      -id => auto
      -title
      - slug => auto
      -desctiption
      -image
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, 'api/banners', data, 'Banner', reset);
    setImageUrl('');
    router.back();
  }
  return (
    <div className="w-full items-center justify-center">
      <FormHeader title="New Banner" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-800  mx-auto my-3"
      >
        <div className="grid gap-4 sm-grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
        </div>
        <div className="grid gap-4 sm-grid-cols-2 sm:gap-6 mb-4">
          <TextInput
            className="mt-6"
            label="Banner Link"
            name="link"
            type="url"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="BannerImageUploader"
            setIsUploading={setIsUploading}
          />
        </div>
        <div className="grid items-center justify-center align-center">
          <SubmitButton
            isUploading={isUploading}
            isLoading={loading}
            buttonTitle="Create"
            LoadingButtonTitle="Creating"
            disabled={!allFieldsFilled}
          />
        </div>
      </form>
      {/* -id
      -title
      -link
      -image */}
    </div>
  );
}
