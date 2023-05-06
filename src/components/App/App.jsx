import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { themeDark, themeLight } from 'components/common/theme';
import { WelcomePage, RegisterPage, SigninPage, MainPage } from 'pages';
import UiKit from 'components/UiKit/UiKit';

const App = () => {
  const theme = false ? themeDark : themeLight;

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route path="/ui" element={<UiKit />} />

        <Route path="/main" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
