import React, { useState, useEffect } from 'react';
import './css/banner.css';
import NavigationBar from './navbar';
import Skills from './skills';

function Banner() {
  const words = ['Javeria Baloch'];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [paraText, setParaText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const timer = setTimeout(type, 200);
    return () => clearTimeout(timer);
  }, [wordIndex, text, paraText,title]);

  function type() {
    const currentWord = words[wordIndex];

    // Append characters until the word is complete
    setText(current => {
      const nextChar = currentWord[current.length];
      return current + (nextChar || ''); // Append the next character or an empty string if the word is complete
    });

    // Check if this word is complete
    if (text === currentWord) {
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);

      // Start typing the .para text
      typeTitle()
      typePara();
    }
  }

  function typePara() {
    const para =
      "I'm a dynamic Software Engineer with a passion for developing Full Stack websites and mobile applications. As a Scrum Master and CTO, I thrive on managing resources and assembling talented developers for projects. My journey involves a continuous love for learning new coding languages, and I aspire to seamlessly integrate them into cutting-edge projects. Currently, I'm steering towards mastering cloud services to gain full control over websites and ensure users have a remarkable experience. Let's code the future together!";

    // Append characters until the paragraph is complete
    setParaText(current => {
      const nextChar = para[current.length];
      return current + (nextChar || ''); // Append the next character or an empty string if the paragraph is complete
    });

    // Check if the paragraph is complete
    if (paraText.length === para.length) {
      // Optionally, you can perform any action when the paragraph typing is complete
    } else {
      // Schedule the next character typing after 50 milliseconds
      setTimeout(typePara, 30);
    }
  }
  function typeTitle() {
    const jobtitle = 'Software Engineer';
  
    // Append characters until the title is complete
    setTitle(current => {
      const nextChar = jobtitle[current.length];
      return current + (nextChar || ''); // Append the next character or an empty string if the title is complete
    });
  
    // Check if the title is complete
    if (title === jobtitle) {
      // Optionally, you can perform any action when the title typing is complete
    } else {
      // Schedule the next character typing after 50 milliseconds
      setTimeout(typeTitle, 50);
    }
  }
  
 
 

  return (
  
    <div id="banner">
      <div className="ml-auto">
        <NavigationBar />
      </div>
      <section className='name ms-lg-5 ps-3' id='Home'>
        <div className='col-9 col-lx-3 col-lg-5 col-md-7 col-sm-7 col-xs-8 banner_container'>
          <h1 className='display-1' dangerouslySetInnerHTML={{ __html: text.split(" ").join('<br/>') }} />
          <h3 className='h3 ms-lg-5'>{title}</h3>
          <p className='para mt-5 '>{paraText}</p>
        </div>
      </section>
      <Skills/>
      <section id='AboutMe'>
        <div>
      <h3>My Roles</h3>
          <ul>
            <li>Web Devloper</li>
            <li>App Devloper</li>
            <li>Scrum Master</li>
            <li>Chief Technical Officer</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Banner;
