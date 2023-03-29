import { Route, Routes } from 'react-router-dom';
import Animation from './components/Tab/Animation';
import ReportDesign from './components/Tab/ReportDesign';
import VideoProduction from './components/Tab/VideoProduction';
import WebsiteDevelopment from './components/Tab/WebsiteDevelopment';
import { LandingPage } from './pages';
import './styles/global.scss';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />}>
            <Route path='website-development' element={<WebsiteDevelopment />} />
            <Route path='report-design' element={<ReportDesign />} />
            <Route path='video-production' element={<VideoProduction />} />
            <Route path='animation' element={<Animation />} />
        </Route>
    </Routes>
  );
}

export default App;
