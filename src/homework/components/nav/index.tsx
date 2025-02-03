import { useState } from 'react';
import clsx from 'clsx/lite';
import { getUIView, type UIView } from '@/homework/lib/ui-view';
import './style.css';

// clsx/lite 모듈
// console.log(clsx('a', 'b', props.data && 'c'));
// console.log(clsx('a', 'b', false && 'd'));

// clsx 모듈
// console.log(clsx('a', 'b', { 'my-class-name': props.data }));
// console.log(clsx('a', 'b', ['d']));

function Nav() {
  const [uiView] = useState<UIView>(getUIView);
  const isSignInView = uiView.includes('signin');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a
        href="/?view=signin"
        // className={isSignInView ? 'active' : undefined}
        className={clsx(isSignInView && 'active')}
        aria-current={isSignInView ? 'page' : undefined}
      >
        로그인
      </a>
      <a
        href="/?view=signup"
        // className={!isSignInView ? 'active' : undefined}
        className={clsx(!isSignInView && 'active')}
        aria-current={!isSignInView ? 'page' : undefined}
      >
        회원가입
      </a>
    </nav>
  );
}

export default Nav;
