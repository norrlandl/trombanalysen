import React from "react";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

export default function UserDetails() {
  const router = useRouter();

  const userId = router.query.userId;
  console.log(userId);

  return <div>{userId}</div>;
}
