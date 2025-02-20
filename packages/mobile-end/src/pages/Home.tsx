export { Home }

import {Link} from 'react-router-dom';
import '../../common/reset.css';
import '@/assets/css/home.scss'
import BG from '@/assets/img/home/home-bg-1.jpg'
import Title from '@/assets/img/home/home-title.png'
import PostForRole from '@/assets/img/home/test_role.png'
import StayTuned from '@/assets/img/home/stay-tuned.png'

function Home() {

  const Quiz = [
    {
      id: 1,
      title: 'ผ่านการทดสอบนี้ คุณอาจจะค้นพบตัวตนในอดีตชาติของคุณในสามก๊กได้',
      router: '/test-role',
      img: PostForRole
    },
    {
      id: 2,
      title: '',
      router: null,
      img: StayTuned
    }
  ]

  return (
    <div id="home">
      <img className="post-bg" alt="" src={BG}/>
      <img className="post-title" alt="" src={Title}/>
      <div className="posts-wrapper">
        <ul>
          {
            Quiz.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={post.router ? post.router : '#'} viewTransition>
                    <img className="post" alt="" src={post.img}/>
                    <p className="title">{post.title}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

