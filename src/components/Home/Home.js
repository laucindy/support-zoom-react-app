import React from "react";
import { PostsList, ProfileCard, Sidebar } from '../../components'
import './Home.scss'


const Home = () => {
  /* placeholder for user data, microposts querying not currently implemented */
  const user = {name: "Cindy Lau", followers: 25, following: 35, microposts: 20}

  return (
    <>
      <Sidebar>
        <ProfileCard user={user} />
        <p className="sidebar__text">Placeholder for other content (for example, 'about me', categories, popular posts, social media links, etc)</p>
      </Sidebar>
      <PostsList />
    </>
  )
};

export default Home;
