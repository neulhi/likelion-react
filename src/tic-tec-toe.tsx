import { useState } from 'react';
import Nav from '@/components/nav';
import { getUIView } from '@/lib/ui-view';
import StateManagement from '@/pages/state-management';
import ErrorBoundaryDemo from './pages/error-boundary';
import SignInForm from '@/pages/sign-in';
import SignUpForm from '@/pages/sign-up';
import TicTacToe from './pages/tic-tac-toe';

const getViewElement = (uiView: string) => {
  let viewElement: React.ReactElement | null = null;

  switch (uiView) {
    case 'signin': {
      viewElement = <SignInForm />;
      break;
    }
    case 'signup': {
      viewElement = <SignUpForm />;
      break;
    }
    case 'state-management': {
      viewElement = <StateManagement />;
      break;
    }
    case 'tic-tac-toe': {
      viewElement = <TicTacToe />;
      break;
    }
    case 'error-boundary': {
      viewElement = <ErrorBoundaryDemo />;
      break;
    }
  }

  return viewElement;
};

function Playground() {
  const [uiView] = useState<string>(getUIView);
  const viewElement = getViewElement(uiView);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {viewElement}
    </section>
  );
}

export default Playground;
