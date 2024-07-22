import React, { useState } from 'react';
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faIceCream, faSmile } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="about-us-container">
      <div className="icon-column left" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <FontAwesomeIcon key={`left-${i}`} icon={i % 2 === 0 ? faIceCream : faSmile} className={`icon-${i % 20}`} />
        ))}
      </div>

      <main className="about-us-page" role="main">
        <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
          <FontAwesomeIcon icon={faGlobe} />
          <span>{language === 'en' ? 'Français' : 'English'}</span>
        </button>
        {language === 'en' ? (
          <>
            <h1>About Py's Tacos</h1>
            <section aria-labelledby="our-story">
              <h2 id="our-story">Our Story</h2>
              <p>Py's Tacos was founded by a group of dessert enthusiasts who wanted to create something truly special. Our founder, Py, envisioned a place where people could enjoy high-quality ice cream in a fun and innovative way. With this vision in mind, Py's Tacos was born, and we've been serving smiles ever since.</p>
            </section>
            <section aria-labelledby="our-mission">
              <h2 id="our-mission">Our Mission</h2>
              <p>Our mission is simple: to provide our customers with the best ice cream tacos they've ever tasted. We use only the finest ingredients and craft each taco with care and passion. Whether you're a fan of classic flavors or adventurous combinations, we have something for everyone.</p>
            </section>
            <section aria-labelledby="meet-the-team">
              <h2 id="meet-the-team">Meet the Team</h2>
              <p>Our team is made up of dedicated professionals who share a love for desserts and a commitment to excellence. From our talented chefs to our friendly staff, everyone at Py's Tacos is here to make your visit unforgettable.</p>
            </section>
            <section aria-labelledby="join-us">
              <h2 id="join-us">Join Us</h2>
              <p>We invite you to come and experience the magic of Py's Tacos for yourself. Whether you're visiting us for the first time or you're a loyal customer, we can't wait to serve you. Thank you for being a part of our story!</p>
            </section>
          </>
        ) : (
          <>
            <h1>À propos de Py's Tacos</h1>
            <section aria-labelledby="notre-histoire">
              <h2 id="notre-histoire">Notre histoire</h2>
              <p>Bienvenue chez Py's Tacos, la maison des tacos à la crème glacée les plus délicieux de la ville ! Notre aventure a commencé avec une idée simple : combiner la joie de la crème glacée avec le plaisir des tacos. Depuis, nous nous consacrons à vous offrir une expérience de dessert unique et délicieuse.</p>
            </section>
            <section aria-labelledby="notre-mission">
              <h2 id="notre-mission">Notre mission</h2>
              <p>Notre mission est simple : offrir à nos clients les meilleurs tacos à la crème glacée qu'ils aient jamais goûtés. Nous utilisons uniquement les meilleurs ingrédients et fabriquons chaque taco avec soin et passion. Que vous soyez fan de saveurs classiques ou de combinaisons aventureuses, nous avons quelque chose pour tout le monde.</p>
            </section>
            <section aria-labelledby="rencontrez-lequipe">
              <h2 id="rencontrez-lequipe">Rencontrez l'équipe</h2>
              <p>Notre équipe est composée de professionnels dévoués qui partagent un amour pour les desserts et un engagement envers l'excellence. De nos chefs talentueux à notre personnel amical, tout le monde chez Py's Tacos est là pour rendre votre visite inoubliable.</p>
            </section>
            <section aria-labelledby="rejoignez-nous">
              <h2 id="rejoignez-nous">Rejoignez-nous</h2>
              <p>Nous vous invitons à venir découvrir par vous-même la magie de Py's Tacos. Que vous nous rendiez visite pour la première fois ou que vous soyez un client fidèle, nous avons hâte de vous servir. Merci de faire partie de notre histoire !</p>
            </section>
          </>
        )}
      </main>

      <div className="icon-column right" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <FontAwesomeIcon key={`right-${i}`} icon={i % 2 === 0 ? faIceCream : faSmile} className={`icon-${i % 20}`} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
