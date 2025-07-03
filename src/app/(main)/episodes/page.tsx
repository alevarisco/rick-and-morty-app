"use client"; 
import { Title } from "@/components";
import { TableEpisodes } from "@/components/ui/table/TableEpisodes";

export default function Episodes() {

  return (
    <div className="">
      <main className="">
        <Title title="Episodios" className="mb-2"/>
        <TableEpisodes />
      </main>
    </div>
  );
}
