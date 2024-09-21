import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import MainInfo from "./ui/mainInfo/MainInfo";

const Home = () => {
  return (
    <>
      <Header />
      <MainInfo />
      <div className="flex flex-wrap gap-11 justify-center mt-11">
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
        <Card
          img="/src/assets/picture1.svg"
          text="“Революционные техники в творчестве Джуди Чикаго”"
          price={"1500"}
        />
      </div>
    </>
  );
};

export default Home;
