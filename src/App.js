import './App.scss';
import Header from './components/Header'
import MicropostsList from './components/MicropostsList'
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';

function App() {
  const microposts = [
    {id: 1, content: "This is a test", user: "Jane Doe", created_at: "Dec 12, 2020", followers: 21},
    {id: 2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula sed magna ut sodales.", user: "John Smith", created_at: "Dec 15, 2020", followers: 30}
  ]
  const latestMicropostsFirst = microposts.reverse();

  const user = {name: "Cindy Lau", followers: 25, following: 35, microposts: 20}

  return (
    <div>
      <Header />

      <div className="app">
        <Sidebar>
          <ProfileCard user={user} />
          <p className="sidebar__text">Placeholder for other content (for example, 'about me', categories, popular posts, social media links, etc)</p>
        </Sidebar>
        <MicropostsList microposts={latestMicropostsFirst} />
      </div>
    </div>
  );
}

export default App;
