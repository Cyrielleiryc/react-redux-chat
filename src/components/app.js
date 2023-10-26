import '../assets/styles/app.css';
import logo from '../assets/images/logo.svg'
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'

function App() {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src={logo} alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
}

export default App;
