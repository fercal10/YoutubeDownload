import React from "react";
import DownloadSection from "@/components/DownloadSection";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Toaster } from "sonner";

export default function Home() {
  React.useEffect(() => {
    Notification.requestPermission();
  }, []);
  
  return (
    <>
      <Head>
       

        <title>Download Youtube</title>
      </Head>
      <main>
        <Toaster />
        <Navbar />
        <DownloadSection />
      </main>
    </>
  );
}
