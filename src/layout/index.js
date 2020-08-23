// COMPONENTS
import Header from './header';
import Footer from './footer';
import { LayoutContainer, Main } from './style';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
