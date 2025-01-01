export default function ErrorPage() {
    return (
        <div class="grid h-screen place-content-center px-4">
            <div class="text-center bg-black/25 backdrop-blur-3xl p-20 rounded-2xl">
                <h1 class="text-9xl font-black text-slate-100">404</h1>

                <p class="text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">Page not found
                </p>

                <p class="mt-4 text-slate-100">Sorry, we couldn’t find the page you’re looking for.

                </p>
                <a
                    href="./"
                    class="mt-6 inline-block rounded bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    )
}