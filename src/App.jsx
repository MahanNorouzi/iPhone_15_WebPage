import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./components/HomePage"));
const Hero16 = lazy(() => import("./components/Hero16"));
const OtherProductes = lazy(() => import("./components/OtherProductes"));
const IPhonepage = lazy(() => import("./components/Iphonepage"));
const AppleID = lazy(() =>
  import("./components/Appleid").then(({ AppleID: Component }) => ({
    default: Component,
  })),
);
const Pagenot = lazy(() => import("./components/Pagenot"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MacAirs" element={<OtherProductes />} />
        <Route path="/iPhone_15" element={<IPhonepage />} />
        <Route path="/16" element={<Hero16 />} />
        <Route path="/AppleID" element={<AppleID />} />
        <Route path="/Notfinished" element={<Pagenot />} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    </Suspense>
  );
};

export default App;
