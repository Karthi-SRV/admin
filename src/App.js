// import Dashboard from './pages/dashboard';
import './styles.scss';
import Approutes from './routes'
import Header from "./component/header";
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GOOGLE_ANALYTICS_TRACK_ID
}

TagManager.initialize(tagManagerArgs)
function App() {
  return (
    <div className="App">
      <Approutes />
    </div>
  );
}

export default App;
