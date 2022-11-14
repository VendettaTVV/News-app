import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header/Index';

function App() {
  return (
    <Container>
      <HeaderComponent />
      <NewsGroupComponent />
      <PaginationComponent />
    </Container>
  );
}

export default App;
