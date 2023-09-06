import { getAllXPokemon, getPokemon, getXPokemon } from "@/tools/pokemon";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getXPokemon();
  }, []);
  return (
    <main className="">
      <div>Here</div>
    </main>
  );
}
