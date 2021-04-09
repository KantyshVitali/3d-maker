import Scene1 from './components/Example1';
import Scene2 from './components/Example2';
import Scene3 from './components/Example3';
import Scene4 from './components/Example4';
import Home from './components/Home';
import { EXAMPLE_1, HOME_ROUTE, EXAMPLE_2, EXAMPLE_3, EXAMPLE_4 } from './utils';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: EXAMPLE_1,
    Component: Scene1,
  },
  {
    path: EXAMPLE_2,
    Component: Scene2,
  },
  {
    path: EXAMPLE_3,
    Component: Scene3,
  },
  {
    path: EXAMPLE_4,
    Component: Scene4,
  },
];
