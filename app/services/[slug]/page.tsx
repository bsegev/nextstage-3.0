import { notFound } from "next/navigation"
import { servicesData } from "@/app/data/servicesData"
import { ServiceDetail } from "@/app/components/service-detail"

type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: PageParams) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData.find((service) => service.id === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${service.title} | NextStage`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: PageParams) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = servicesData.find((service) => service.id === slug);

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
} 