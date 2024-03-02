import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <Image src='/wip.png' alt="wip" width={72} height={72}/>
      </div>
    </div>
  );
};

export default page;
