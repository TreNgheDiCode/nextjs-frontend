"use client";

import Button from "@/components/button";
import { Check } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ThanksPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="h-full bg-[hsl(235,18%,26%)] flex items-center justify-center">
      <div className="h-full w-full bg-white md:w-1/2 md:h-fit p-8 text-black md:rounded-3xl flex flex-col gap-y-8">
        <div className="h-full gap-y-8 flex flex-col justify-center">
          <div>
            <Check className=" rounded-full h-14 w-14 bg-orange-500 p-2 font-semibold text-white" />
          </div>
          <h1 className="text-5xl font-bold text-black">
            Thanks for subcribing!
          </h1>
          <p className="text-sm font-semibold">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
        <div className="mt-auto md:mt-0">
          <Button text="Dismiss message" />
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
