import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/SideBar/SideBar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Navbar from "./components/Navbar/Navbar";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:12000"
  // uri: "https://covid19-graphql.herokuapp.com/"
  uri:"https://covid19-graphql.netlify.app/"
})
function App() {
 
  return (
    <ApolloProvider client={client}>
    <Container>
      <Sidebar />
      {/* <MainContent /> */}
      <Navbar/>
    </Container>
    </ApolloProvider>
  );
}

const Container = styled.div`
  display: flex;
  height: 98vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
