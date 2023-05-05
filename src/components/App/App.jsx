import { Route, Routes } from 'react-router-dom';

import UiKit from 'components/UiKit/UiKit';
import { WelcomePage, RegisterPage, SigninPage } from 'pages';
import Background from 'components/common/Background.styled';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/ui" element={<UiKit />} />
    </Routes>
  );
};

export default App;
