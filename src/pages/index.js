import MainLayout from "@/components/layouts/MainLayout";
import HomeHero from "@/components/pages/home/HomeHero";
import React from "react";

export default function index() {
  return (
    <>
      <MainLayout>
        <HomeHero />
      </MainLayout>
    </>
  );
}
