import { LakersHeader, LakersFooter, NBAHeader, NewsCards, Statistics } from "@/app/components";
export default function Home() {
  return (
    <div>
      <NBAHeader />
      <LakersHeader />
      <Statistics />
      <NewsCards />
      <LakersFooter />
    </div>
  );
}
