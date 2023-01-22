import './App.css';
import Footer from './companents/Footer/Footer';
import Header from './companents/Header/Header';
import Kontakt from './companents/Kontakt/Kontakt';
import Naprav from './companents/Naprav/Naprav';
import Proekt from './companents/Proekt/Proekt';
import Registr from './companents/Registr/Registr';
import Result from './companents/Result/Result';
import Zadachi from './companents/Zadachi/Zadachi';


function App() {
  return (
    <div className="App">
      <div className='img3'></div>
        <Header />
        <Proekt />
        <Naprav />
        <Zadachi />
        <Registr />
        <Result />
        <Kontakt />
        <Footer />
      </div>
  );
}

export default App;