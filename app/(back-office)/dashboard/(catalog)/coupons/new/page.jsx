'use client';

import FormHeader from '@/components/backoffice/FormHeader';
import ImageInput from '@/components/forminputs/ImageInput';
import SubmitButton from '@/components/forminputs/SubmitButton';
import TextareaInput from '@/components/forminputs/TextAreaInput';
import TextInput from '@/components/forminputs/TextInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makePostRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import generateCouponCode from '@/lib/generateCouponCode';
import { uploadFiles } from '@/lib/uploadthing';

export default function NewCoupons() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  async function onSubmit(data) {
    {
      /*
      - id => auto()
      - Title
      - code => auto()
      - Expiry Date
      -image
      */
    }
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading, 'api/coupons', data, 'Coupon', reset);
    // router.back();
  }
  return (
    <div className="w-full items-center justify-center">
      <FormHeader title="New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white  rounded-lg shadow sm:p-6 md:p-8 dark:bg-neutral-800  mx-auto my-3"
      >
        <div className="grid gap-4 sm-grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <div className="flex justify-between">
            <TextInput
              label="Coupon Expiry Date"
              name="expiryDate"
              type="date"
              register={register}
              errors={errors}
              className=" w-full"
            />
          </div>
          <div className="grid items-center justify-center align-center">
            <SubmitButton
              isLoading={loading}
              buttonTitle="Create"
              LoadingButtonTitle="Creating..."
            />
          </div>
        </div>
      </form>
      {/* -id
      -title
      -slug
      -description
      -image */}
    </div>
  );
}
