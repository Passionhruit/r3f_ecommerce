import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
