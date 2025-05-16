"use client";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const path = usePathname();
  console.log(path.split("/") );
  const productId = path.split("/")[2];
  const reviewId = path.split("/")[4];

  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
      {/* <p>Could not found Reviewed resources</p> */}
    </>
  );
}
