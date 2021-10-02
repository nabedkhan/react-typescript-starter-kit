import { ElementType, lazy, Suspense } from 'react';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component {...props} />
    </Suspense>
  );

// Homepage
const Home = Loadable(lazy(() => import('./pages/Home')));

const routes = [
  {
    path: '/',
    element: <Home />
  }
];

export default routes;
