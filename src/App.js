import './index.scss'
import React, {useState} from 'react'
import Photo from './assets/2021-09-28 16.46.48.jpg';
import Img1 from './assets/01.jpg'
import Img2 from './assets/02.jpg'
import Img3 from './assets/03.jpg'
import Fb from './assets/fb.svg'
import Inst from './assets/insta.svg'
import Link from './assets/Linkedin.svg'
import Twitt from './assets/Group.svg'
import {Route, Switch, NavLink} from 'react-router-dom'
import Rectangle1 from './assets/Rectangle 4.jpg'
import Rectangle2 from './assets/Rectangle 5.jpg'
import Rectangle3 from './assets/Rectangle 6.jpg'





function App() {
  
  return (
    <div className="wrapper">
    <Header/>
    <Switch>
    <Route exact path="/" render={() => <Main/>}/>
    <Route   path="/blog" render={()=><Blog/> }/>
    <Route   path="/works" render={()=><Works/> }/>
    <Route   path="/article" render={()=><Article/> }/>
    </Switch>
    <Footer/>
    </div>
  );
}


const Article = () => {
  return <>
   <div className="page">
     <div className="article page__container _container">
       <h1>Designing Dashboards with usability in mind</h1>
       <div className="article__dashboard">
         <div className="article__year">
            2020
         </div>
         <div className="article__info">
         Dashboard, User Experience Design
         </div>
         </div>
         <div className="article__text">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
         </div>
         <div className="article__image">
           <img src={Rectangle1} alt=""/>
         </div>
         <div className="article__heading1">Heading 1</div>
         <div className="article__heading2">Heading 2</div>
         <div className="article__text">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </div>
          <div className="article__image">
           <img src={Rectangle2} alt=""/>
         </div>
         <div className="article__image">
           <img src={Rectangle3} alt=""/>
         </div>



     </div>
   </div>
  
  </>
}


const Works = () => {
  return <>
  <div className="page">
    <div className="works page_container _container">
    <div className="works-main__title title ">Work</div>
    <div className="works__items ">
           <article className="works__item">
             <a className="works__image " ><img  src={Img1} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title"> Designing Dashboards</a>
               <div className="works__info">
                 <div className="works__year">2020 </div>
                <div className="works__dashboard">Dashboard</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
         
           <article className="works__item">
             <a className="works__image"><img src={Img2} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title">  Vibrant Portraits of 2020</a>
               <div className="works__info">
                 <div className="works__year">2018 </div>
                <div className="works__dashboard">Illustration</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
           <article className="works__item">
             <a className="works__image"><img src={Img3} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title">36 Days of Malayalam type</a>
               <div className="works__info">
                 <div className="works__year">2018 </div>
                <div className="works__dashboard">Typography</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
           </div>

    </div> 

  </div>
  </>
}


const Blog = () => {
  return <>
  <div className="blog">
    <div className="blog__content _container">
    <h3 className="title">Blog</h3>

    <div className="blog__content__item">
      <div className="interactions" >UI Interactions of the week</div>
      <div className="info">12 Feb 2019 | Express, Handlebars</div>
      <div className="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
    </div>
    <div className="blog__content__item">
      <div className="interactions" >UI Interactions of the week</div>
      <div className="info">12 Feb 2019 | Express, Handlebars</div>
      <div className="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
    </div>
    <div className="blog__content__item">
      <div className="interactions" >UI Interactions of the week</div>
      <div className="info">12 Feb 2019 | Express, Handlebars</div>
      <div className="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
    </div>
    <div className="blog__content__item">
      <div className="interactions" >UI Interactions of the week</div>
      <div className="info">12 Feb 2019 | Express, Handlebars</div>
      <div className="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
    </div>
    </div>
  
  </div>
  
  
  </>
}




const Header = () => {
  const [active,setActive] = useState("")

  return  <header className="header">
  <div className="header__content ">
   <div  className="header__menu menu">
     
     <div onClick={() => setActive(!active)} className="menu__icon icon-menu">
       <span></span>
       <span></span>
       <span></span>
     </div>
     <nav className={active? "menu__body _active ": "menu__body" } >
       <ul className="menu__list">
         <li ><NavLink to="/works"  className="menu__link" >Works</NavLink></li>
         <li><NavLink to="/blog" className="menu__link">Blog</NavLink></li>
         <li ><a href=""  className="menu__link">Contact</a></li>
       </ul>
     </nav>
   </div>

  </div>
</header>
}

const Main = () => {
  return <>
  <main className="page">
   <section className="hello">
     <div className="hello__container _container">
       <div className="hello__content">
       <h1 className="hello__title title">Hi, I am Farid,<br/>
        Front-end programmer</h1>
       <div className="hello__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
       <a href="" className="hello__btn btn">Downoload resume</a>
       </div>
       <div >
       <img className="hello__avatar"  src={Photo} alt="Photo"/>
       </div>
     </div>
   </section>
   <section className="recent-posts">
     <div className="recent-posts__container _container">
    <div className="recent-posts__header">
     <div className="recent-posts__title title-posts">Recent posts</div>
     <a href="" className="recent-posts__view-all">View all</a>
    </div>
      <div className="recent-posts__items">

        <div className="recent-posts__column">
          <article className="recent-posts__item recent-post" >
            <a href="" className="recent-post__title ">Making a design system from scratch</a>
            <div className="recent-post__info">12 Feb 2020 <span>|</span> Design, Pattern</div>
            <div className="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        
          </article>
        </div>
        
        <div className="recent-posts__column">
          <article className="recent-posts__item recent-post" >
            <a href="" className="recent-post__title ">Creating pixel perfect icons in Figma</a>
            <div className="recent-post__info">12 Feb 2020 <span>|</span> Figma, Icon Design</div>
            <div className="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>

          </article>
        </div>
      </div>
     </div>
   </section>

   <section className="featured-works">
     <div className="featured-works__container _container">
       <div className="featured-works__title title-posts">Featured works</div>
         <div className="featured-works__items works">
           <article className="works__item">
             <a className="works__image " ><img  src={Img1} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title"> Designing Dashboards</a>
               <div className="works__info">
                 <div className="works__year">2020 </div>
                <div className="works__dashboard">Dashboard</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
         
           <article className="works__item">
             <a className="works__image"><img src={Img2} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title">  Vibrant Portraits of 2020</a>
               <div className="works__info">
                 <div className="works__year">2018 </div>
                <div className="works__dashboard">Illustration</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
           <article className="works__item">
             <a className="works__image"><img src={Img3} alt="work1"/></a>
             <div className="works__body">
               <a href="" className="works__title">36 Days of Malayalam type</a>
               <div className="works__info">
                 <div className="works__year">2018 </div>
                <div className="works__dashboard">Typography</div>
               </div>
               <div className="worsk__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet</div>
            
             </div>
           </article>
           </div>

         

       
     </div>

   </section>
  

 </main>
  </>
}


const Footer = () => {
  return <>
  
  <footer className="footer">
  <div className="footer__content ">
  <div className="footer__social social">
    <a href="" className="social__item icon-fb"><img src={Fb}/></a>
    <a href="" className="social__item icon-insta"><img src={Inst}/></a>
    <a href="" className="social__item icon-twitter"><img src={Twitt}/></a>
    <a href="" className="social__item icon-linkedin"><img src={Link}/></a>
  </div>
  </div>
  <div className="footer__copy">Copyright ©2020 All rights reserved </div>
  </footer>
  
  
  </>
}




export default App;
