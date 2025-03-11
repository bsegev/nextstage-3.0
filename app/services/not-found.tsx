import Link from "next/link"

export default function ServiceNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold font-serif mb-6">Service Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The service you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link 
          href="/#services" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium"
        >
          View All Services
        </Link>
      </div>
    </div>
  )
} 