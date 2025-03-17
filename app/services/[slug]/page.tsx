"use client"

import { notFound, useParams } from "next/navigation"
import { servicesData } from "@/app/data/servicesData"
import { ServiceDetail } from "@/app/components/service-detail"
import { Footer } from "@/app/components/footer"
import { useEffect } from "react"

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const service = servicesData.find((service) => service.id === slug);

  useEffect(() => {
    // Update the document title when the component mounts
    if (service) {
      document.title = `${service.title} | NextStage`;
    }
  }, [service]);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ServiceDetail service={service} />
      <Footer />
    </div>
  );
} 