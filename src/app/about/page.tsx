import { companyValues } from "@/types/type";
import Image from "next/image";
import React from "react";

const AboutPage = async () => {
  const defaultImg = "./defaultImage-normal.png";

  const url = "http://localhost:4000";
  const data = await fetch(`${url}/companyInfo`, {
    method: "GET",
    cache: "force-cache",
  });

  const companyInfo = await data.json();
  const { name, description, image } = companyInfo;

  if (!companyInfo) {
    return <div>정보를 가져오지 못 하고 있습니다..</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center mt-[1.2rem] gap-[2rem]">
      <h3 className="text-xl font-bold">{name}</h3>
      <div className="flex gap-[2rem]">
        <p>
          <span>{description}</span>
        </p>
        <div className="w-[50%] h-[50%]">
          {image ? (
            <Image
              src={image}
              alt="회사 이미지"
              width={500}
              height={1}
              className=" bg-gray-700 rounded-[100%]"
            />
          ) : (
            <Image
              src={defaultImg}
              alt="회사 이미지"
              width={500}
              height={1}
              className=" bg-gray-700 rounded-[100%]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
