import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <div className="relative flex-1">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-12 text-center text-primary-foreground">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">404</h1>
                    <p className="mt-4 max-w-md text-lg font-medium md:text-xl">
                        Oops, it looks like the page you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center text-black rounded-md bg-white px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}