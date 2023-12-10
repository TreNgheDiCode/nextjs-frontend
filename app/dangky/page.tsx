import ColumnOne from "@/components/column-one";
import Image from "next/image";

const DangKy = () => {
  return (
    <div className="h-full bg-[hsl(235,18%,26%)] flex items-center justify-center">
      <div className="flex flex-col h-full w-full md:h-fit md:w-fit md:m-4 md:grid grid-cols-2 bg-white md:rounded-3xl gap-x-4 md:p-6">
        {/* Cột một */}
        <div className="order-2 md:order-1">
          <ColumnOne />
        </div>
        {/* Cột hai */}
        <div className="order-1 md:order-2 relative text-black h-full w-full">
          <Image
            fill
            alt="background-desktop"
            src={"/illustration-sign-up-desktop.svg"}
            className="rounded-b-3xl object-cover md:rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DangKy;
