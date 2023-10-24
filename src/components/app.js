import '../styles/app.css';
import MessageList from '../containers/message_list'

function App() {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container"></div>
      <div className="channels-container"></div>
      <MessageList />
    </div>
  );
}

export default App;
