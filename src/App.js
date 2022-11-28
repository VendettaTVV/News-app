
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header/Index';
import ErrorModalComponent from './ErrorModal';
import ContantComponant from './Body/Contact';
import ContantSchoolComponant from './Body/ContactsSchool';
import { Routes, Route } from 'react-router-dom';
// Components in React it's usual JS func which return JSX/React elements
function App() {
  // JSX this is the new syntax from React, who brings back JS фтв HTML in a convenient way
  // JSX/React element has a rule: return only onevelement or component (One main and an infinite number of secondary)
  // In JSX atribut Class change in ClassName

  // React-router DOM it's a library, shich help us to work with links
  // Every component route responsible for any link
  // In route we pass those components that we want to see given in Path property, link
  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/:q" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/lang/:lang" element={<><NewsGroupComponent /><PaginationComponent /></>} />
        <Route path="/contact/school" element={<ContantSchoolComponant />} />
        <Route path="/contact" element={<ContantComponant />} />
      </Routes>
      <ErrorModalComponent />
    </Container>
  );
}

export default App;
