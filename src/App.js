import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginFrom';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="2525e5d5-2027-4200-834b-676b2a335c26"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}    
    />
  );
}
export default App;
