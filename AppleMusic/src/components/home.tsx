import Esplora from "./altroDaEsplorare";
import NuoveUscite from "./canzoniNuove";
import CardGrandi from "./cardGrandi";
import AppleNav from "./navrespons";
import NuoviEpisodi from "./nuoviEpisodiRadio";
function Home() {
  return (
    <>
      <AppleNav />
      <CardGrandi />
      <NuoviEpisodi />
      <NuoveUscite />
      <Esplora />
    </>
  );
}

export default Home;
