import { useState } from 'react';

import Nav from '@/homework/components/nav';
import HomeworkSignInForm from '@/pages/sign-in';
import HomeworkSignUpForm from '@/pages/sign-up';
import { getUIView, type UIView } from '@/lib/ui-view';

function Playground() {
  const [uiView] = useState<UIView>(getUIView);
  const isSignInView = uiView.includes('signin');

  return (
    <div className="Playground bg-euid-gray-200 wrapper">
      <h1>플레이그라운드</h1>
      <Nav />
      {isSignInView ? <HomeworkSignInForm /> : <HomeworkSignUpForm />}
    </div>
  );
}

export default Playground;
