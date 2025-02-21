import { BrowserRouter, Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import PlaygroundPage from './pages/playground/page';
import SignInPage from './pages/sign-in/page';
import SignUpPage from './pages/sign-up/page';
import PrintError from './components/error';
import HomePage from './pages/home/page';
import AuthLayout from './layouts/auth/layout';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/playground" element={<PlaygroundPage />} />

            {/* 레이아웃 */}
            <Route path="/auth" element={<AuthLayout />}>
              {/* 중첩된 라우트 */}
              {/* 페이지는 배출구(Outlet)로 연결 */}
              {/* 페이지 */}
              <Route path="signin" element={<SignInPage />} />
              <Route path="signup" element={<SignUpPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
