/* eslint-disable no-unused-vars */

// useState
// import Counter from "./hookExamples/useState/Counter";
// import Form from "./hookExamples/useState/Form";
// import Profile from "./hookExamples/useState/Profile";

// useEffect
// import Counter from "./hookExamples/useEffect/Counter";
// import DataFetcher from "./hookExamples/useEffect/DataFetcher";
// import Timer from "./hookExamples/useEffect/Timer";
// import WelcomeMessage from "./hookExamples/useEffect/WelcomeMessage";

// useContent
// import { ThemeProvider } from "./hookExamples/useContext/theme/ThemeContext";
// import ThemeToggle from "./hookExamples/useContext/theme/ThemeToggle";

// useReducer
// import Counter from "./hookExamples/useReducer/Counter";

// useRef
// import FocusInput from "./hookExamples/useRef/FocusInput";
// import Timer from "./hookExamples/useRef/Timer";

// useParams
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./hookExamples/useParams/Home";
// import UserProfile from "./hookExamples/useParams/UserProfile";

// useSearchParams
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./hookExamples/useSearchParams/Home";
// import Item from "./hookExamples/useSearchParams/Item";
// import ItemList from "./hookExamples/useSearchParams/ItemList";

// useNavigate
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./hookExamples/useNavigate/Login";
// import Dashboard from "./hookExamples/useNavigate/Dashboard";

// useCallback
// import Parent from "./hookExamples/useCallback/Parent";

// redux
import { Provider } from "react-redux";
import store from "./hookExamples/redux/store";
import Counter from "./hookExamples/redux/Counter";

function App() {
  return (
    <>
      {/* === useState === */}
      {/* <Counter /> */}
      {/* <Form /> */}
      {/* <Profile /> */}

      {/* === useEffect === */}
      {/* <Counter /> */}
      {/* <WelcomeMessage /> */}
      {/* <Timer /> */}
      {/* <DataFetcher /> */}

      {/* === useContent === */}
      {/*
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      */}

      {/* === useReducer === */}
      {/* <Counter /> */}

      {/* === useRef === */}
      {/* <FocusInput /> */}
      {/* <Timer /> */}

      {/* === useParams === */}
      {/*
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      */}

      {/* === useSearchParams === */}
      {/*
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/items/:id" element={<Item />} />
          </Routes>
        </BrowserRouter>
      */}

      {/* === useNavigate === */}
      {/*
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      */}

      {/* === useMemo === */}
      {/* <Products /> */}

      {/* === useCallback === */}
      {/* <Parent /> */}

      {/* === redux === */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
}

export default App;
