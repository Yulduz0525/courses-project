import { useTranslation } from 'react-i18next';
import './App.css'
import "./index.css"
import Router from './router/Router'
function App() {

  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng') || 'en';

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage); 
  };

  return (
    <>
      <Router/>
    </>
  )
}
export default App
