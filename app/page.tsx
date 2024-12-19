import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel key="1" movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel key="2" movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel key="3" movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}