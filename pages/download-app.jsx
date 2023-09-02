import AboutUs from "@/components/DownloadApp/AboutUs";
import EasilyCrypto from "@/components/DownloadApp/EasilyCrypto";
import EasyToUse from "@/components/DownloadApp/EasyToUse";
import HomeHero from "@/components/DownloadApp/HomeHero";
import HowItWorks from "@/components/DownloadApp/HowItWorks";
import ServiceGrid from "@/components/DownloadApp/ServiceGrid";
import VirtualPayment from "@/components/DownloadApp/VirtualPayment";
import Layout from "@/components/Layout";
import React from "react";

const DownloadApp = () => {
    return (
        <Layout>
            <HomeHero />
            <AboutUs />
            <section className='py-20 lg:py-120'>
                <EasilyCrypto />
                <ServiceGrid />
            </section>
            <br />
            <VirtualPayment />
            <EasyToUse />
            <HowItWorks />
        </Layout>
    );
};

export default DownloadApp;
