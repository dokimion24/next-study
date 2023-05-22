"use client";

import { useRouter } from "next/navigation";

export default function GoProductButton() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/products")}>
        제품 페이지로 이동
      </button>
    </div>
  );
}
