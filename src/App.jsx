import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.scss';
import Header from './components/Header/Header';
import FeedPage from './pages/Feed/FeedPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={FeedPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
