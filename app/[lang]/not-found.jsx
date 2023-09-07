import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 class="text-9xl font-extrabold text-white tracking-widest">
                    404
                </h1>
                <div class="bg-[#da291c] text-white px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button class="mt-5">
                    <a class="relative inline-block text-sm font-medium text-[#ffffff] group active:text-[#da291c] focus:outline-none focus:ring">
                        <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#da291c] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <Link
                            href="/"
                            class="relative block px-8 py-3 bg-[#1A2238] border border-current"
                        >
                            Go Home
                        </Link>
                    </a>
                </button>
            </main>
        </>
    );
};

export default NotFound;
