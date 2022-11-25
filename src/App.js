
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body';
import PaginationComponent from './Footer';
import HeaderComponent from './Header/Index';
import ErrorModalComponent from './ErrorModal';
import ContantComponant from './Body/Contact';
import ContantSchoolComponant from './Body/ContactsSchool';
import { Routes, Route } from 'react-router-dom';
// Componenty v React eto obychnye JS funkcii kotorye vozvraschaut JSX/React element
function App() {
// JSX eto novij sintaksis ot React, kotoryi vozvraschaet s soboi JS i HTML v udobnom vide
// JSX/React element imeet pravilo: vozvrashaetsia tolko odin element ili component: Odin glavnyi i bezkonecnoe coli4estvo vtorostepennyx
// V JSX atribut class pereimenovan v ClassName

//React-router DOM eto biblioteka, kotoraja pomogaet nam rabotat so ssylkami
// kagdii komponent route otvechaet za kakuu nibud ssylky
// v route my peredaem te komponenty kotorye hotim videt po dannoi v Path property, ssylke
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
