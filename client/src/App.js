
import './App.scss';
import { Routes, Route,} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import WindowScreens from './components/WindowScreens';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
import Profile from './components/Profile';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});
console.log(httpLink);
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
   <ApolloProvider client={client}>
   <StoreProvider>
   <Routes>
    
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="screens" element={<WindowScreens  />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        </Route>
    </Routes>
    </StoreProvider>
   </ApolloProvider>
   
    </>
  )
}

export default App;
