import {LakersHeader, NBAHeader, Statistics} from "@/app/components";
export default function Home() {
  return (
      <div>
          <NBAHeader/>
          <LakersHeader/>
          <Statistics />
      </div>
  );
}
