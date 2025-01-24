import Esplora from "./altroDaEsplorare";
import CardGrandi from "./cardGrandi";
import Fetch from "./fetchSong";
import AppleNav from "./navrespons";
import NuoviEpisodi from "./nuoviEpisodiRadio";
function Home() {
  return (
    <>
      <AppleNav />
      <CardGrandi />
      <NuoviEpisodi />
      <Fetch />
      <Esplora />
    </>
  );
}

export default Home;
