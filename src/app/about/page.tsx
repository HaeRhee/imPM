import React from "react";
console.log(1);
const AboutPage = async () => {
  const url = "http://localhost:4000/companyInfo";
  const response = await fetch(url, { cache: "force-cache" });
  const data = await response.json();
  // const companyInfo = data;
  console.log(1);
  console.log(data);

  return (
    <div>
      <p>
        <span>AboutPage-SSG</span>
      </p>
      <h3>companyInfo</h3>
      <div>
        companyInfo 정보를 불러와서 회사에 대한 소개를 구현하는 페이지로
        만듭니다.
      </div>
    </div>
  );
};

export default AboutPage;
