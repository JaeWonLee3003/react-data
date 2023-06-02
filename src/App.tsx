import { useEffect } from "react";
import { useQuery } from "react-query";
import { getUsers } from "./api/getUsers";
import { ResponsiveBar } from "@nivo/bar";
import { Container } from "./App.styled";

function App() {

  const {data , refetch} = useQuery(['getUsers'], () => getUsers(), {
    refetchOnWindowFocus: false,
  });


  const refresh = () => refetch();


  const charData = () => {
    if(!data) return [];

    return data.results.map(({name , dob }) =>{
      return {
        name: name.first,
        dob: dob.age,
      }
    })
  }
  useEffect(() =>{
    setInterval(() =>{
      refetch();
    }, 3000);
  }, []);

  useEffect(() =>{
    console.log({ data });
  }, [data]);

  return (
    <Container>
      <button onClick={refresh}>새로 고칠까 말까</button>
      <ResponsiveBar
      data={charData()}
      keys={['age']}
      indexBy='name'
      layout="horizontal"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "name",
        legendPosition: "middle",
        legendOffset: 32,
        }} />
    </Container>
  );
}

export default App;
