import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Yuko — Gohan World Creator'
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Meet Yuko, the creator of Gohan World — a USA⇄Japan travel and insurance guide for seniors, beginners, and first-time travelers.')
    return () => { document.title = 'Gohan World - USA⇄Japan Travel & Insurance Guides' }
  }, [])

  return (
    <main className="about-page">

      <div className="about-page__photo-wrap">
        <img
          src="/about-yuko.jpg"
          alt="Yuko — author of Gohan World"
          className="about-page__photo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      <h1 className="about-page__title">About <span>— Hi, I'm Yuko - the creator of Gohan World</span></h1>

      <p className="about-page__body">Welcome! I'm so glad you're here.</p>

      <p className="about-page__body">
        I’m someone who treasures connection, good food, and the shared 
        stories that come from life between the USA and Japan. 
        From childhood adventures to today, I’ve built a life across both countries 
        — always learning, exploring, and enjoying the people around me.</p>

        <p className="about-page__body">This space is where I share those experiences:
        <strong> practical travel guides, safety tips, and honest recommendations </strong>
        for  anyone moving between the USA and Japan, especially beginners and senior travelers.
        </p>

        <p className="about-page__body">But this site is more than a personal blog. 
        It's built on <strong>real-world professional experience</strong>. </p>
        
        <p className="about-page__body">
        I’ve spent <strong>20+ years</strong> working in global medical assistance, 
        travel insurance, and emergenccy support for travlers worldwide. </p> 

         <p className="about-page__body"> My background includes medical claims, 
          insurance coordination, and bilingual (JP/EN) support for real travelers 
          facing real problems USA and abroad.</p> 

         <p className="about-page__body"> I provide clear, accurate, and transparent
          information. No hype. No fear. Just guidance you can rely on.</p>


         <p className="about-page__body"> I’ve worked directly with hospitals, insurers, and assistance centers — giving me firsthand insight into what travelers truly need to stay safe.
         </p> 
         
        
         <p className="about-page__body"> <strong>What You'll Find Here</strong>
          <ul className="about-page__list">
            <li>USA⇄Japan travel basics</li>
            <li>Senior‑friendly travel tips</li>
            <li>Medical & safety guidance</li>
            <li>Travel insurance explanations</li>
            <li>Simple, honest recommendations</li>
          </ul>
        </p>

        <p className="about-page__body">My goal is simple: 
        <p><strong>Help you travel with confidence and peace of mind</strong></p></p>

<p className="about-page__body about-page__body--last">
        Thanks for being here - let's explore safely together. 
        <p><strong> - Yuko </strong></p>
        </p>

      <Link to="/articles" className="about-page__cta">
        Read the Articles →
      </Link>

    </main>
  )
}

export default AboutPage
