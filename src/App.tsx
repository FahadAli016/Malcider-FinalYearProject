import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {useUserStore} from './app/store';
import ECommerce from './pages/Dashboard/UserDashboard';
import MalwareAnalytics from './pages/Admin/MalwareAnalytics';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import LandingPage from './pages/Landingpage';
import Loader from './common/Loader';
import routes from './routes';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route  element={<DefaultLayout />}>
        {user?.name === 'admin' ? (
         <Route path='/dashboard' element={<MalwareAnalytics />} />
        ) : (
          <Route path='/dashboard' element={<ECommerce />} />
        )}
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
