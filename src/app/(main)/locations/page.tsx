"use client"; 
import { Title } from "@/components";
import { TableLocations } from "@/components/ui/table/TableLocations";

export default function Locations() {
  return (
    <div className="">
      <main className="">
        <Title title="Localizaciones" className="mb-2"/>
        <TableLocations/>
      </main>
    </div>
  );
}
