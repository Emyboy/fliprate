import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import ReadMore from "@/components/ReadMore";
import Solution from "@/components/Solution";
import Hero from "@/components/Hero";
import OurTeam from "@/components/OurTeam/OurTeam";
import ContactUs from "@/components/ContactUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Layout>
            <Hero />
            {/* <Features /> */}
            <About />
            <Services />
            <OurTeam />
            <ContactUs />
            {/* <ReadMore /> */}
            {/* <Solution /> */}
        </Layout>
    );
}
