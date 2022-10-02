import { Routes } from "@blitzjs/next";
import Link from "next/link";

export default function Index() {
  return <Link href={Routes.Index()}>Index</Link>;
}
