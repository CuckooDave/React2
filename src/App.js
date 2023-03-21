import { useContext } from "react";
import { SignInPage } from "./pages/SignInPage";
import { ChatPage } from "./pages/ChatPage";
import { AppContext } from "./contexts/AppContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (   
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />}/>
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
  );
}

export default App;
