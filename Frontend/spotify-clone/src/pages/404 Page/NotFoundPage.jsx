import spotifyLogo from "../../assets/images/spotifyLogo.png";

// react router imports
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main class="relative box-border bg-gradient-to-b to-[#1db954] from-black/95 items-center justify-center grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <img
        className="h-9 absolute top-4 left-4"
        src={spotifyLogo}
        alt="spotify logo"
      />
      <div class="text-center">
        <p class="font-semibold text-white text-3xl font-[Spotify]">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white font-[Spotify] sm:text-7xl">
          Page not found
        </h1>
        <p class="mt-6 text-lg font-medium text-pretty font-[Spotify] text-white sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/home"
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black hover:text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600 duration-200"
          >
            Go back home
          </Link>
          <a href="#" class="text-sm font-semibold text-white">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
