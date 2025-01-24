import { useState, useEffect } from "react";
import { Canzoni } from "../type/song";

function Fetch() {
  const [Song, setSong] = useState<null | Canzoni>(null);

  const getSong = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=Nirvana"
      );
      if (response.ok) {
        const data = await response.json();
        setSong(data);
      } else {
        throw new Error("Errore nel recupero film");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSong();
  }, []);
}
