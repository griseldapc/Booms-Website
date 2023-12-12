import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      {/* section 4 */}
      <p
        className="text-center"
        style={{
          // width: '596px',
          color: "var(--neutral-100, #434040)",
          fontFamily: "GitLab Sans",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "56px" /* 175% */,
          letterSpacing: "0.64px",
        }}
      >
        Deal Alert! Get free shipping and bulk <br />
        discounts when you order 2 or more <br />
        pairs
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="asset/home/kaoskaki.png"
          className="img-fluid"
          alt="img kaos kaki"
        />
      </div>

      <div class="pb-lg-5"></div>

      {/* section 5 */}
      <div className="d-flex mb-3">
        <h3
          className="p-2"
          style={{
            color: "var(--neutral-100, #434040)",
            fontFamily: "GitLab Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "56px",
            letterSpacing: "0.64px",
            marginLeft: "105px", // Menambahkan margin ke kanan
          }}
        >
          Overview our product
        </h3>
        <button
          className=" p-2 border-0 btn-sm pb-2 "
          style={{
            color: "var(--neutral-10, #F9FCFE)",
            fontFamily: "GitLab Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 600,
            // lineHeight: '20px',
            // letterSpacing: '2px',
            weight: "160px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            // gap: '8px',
            borderRadius: "8px",
            background: "var(--primary-70, #00A4DF)",
            marginTop: "15px",
          }}
        >
          SHOP WOMEN
        </button>
      </div>
    </div>
  );
};

export default index;
