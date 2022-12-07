
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header/Index';
import ErrorModalComponent from './ErrorModal';
import ContantComponant from './Body/Contact';
import ContantSchoolComponant from './Body/ContactsSchool';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/News-app" element={<><BodyComponent /><PaginationComponent /></>} />
        <Route path="/News-app/:q" element={<><BodyComponent /><PaginationComponent /></>} />
        <Route path="/News-app/lang/:lang" element={<><BodyComponent /><PaginationComponent /></>} />
        <Route path="/News-app/contact/school" element={<ContantSchoolComponant />} />
        <Route path="/News-app/contact" element={<ContantComponant />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
