import './App.scss';
import { HashRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes/AppRoutes';
import ErrorBoundary from './containers/shared/ErrorBoundary';

// App component with header footer app routes component called
function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Header />
        <main className='container mt-5 pt-3'>
          <AppRoutes />
        </main>
        <Footer />
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
