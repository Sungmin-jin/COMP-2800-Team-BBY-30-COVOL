import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../styles/AboutUs.css';
import Nav from './Nav';
import Footer from './Footer';
import tonyIMG from './../image/tony.jpg';
import justinIMG from './../image/justin.jpg';
import jasonIMG from './../image/jason.jpg';
import anthonyIMG from './../image/anthony.jpg';

// this is for to use JQuery in React
const $ = window.$;
$(document).ready(function () {
  $('.easterEggTrigger').click(function () {
    $('.TonyPic').addClass('rotate-scale-up');
    $('.JustinPic').addClass('hidingPic');
    $('.JasonPic').addClass('movingPic');
    $('.AnthonyPic').addClass('growingPic');
    $('.banner-container').addClass('bannerAni');
  });

  $('.easterEggTrigger').mouseleave(function () {
    $('.TonyPic').removeClass('rotate-scale-up');
    $('.JustinPic').removeClass('hidingPic');
    $('.JasonPic').removeClass('movingPic');
    $('.AnthonyPic').removeClass('growingPic');
    $('.banner-container').removeClass('bannerAni');
  });
});

function AboutUs({ profilePic, userName, userEmail }) {
  return (
    <div className='AboutUs'>
      <div className='content'>
        <TonyPic />
        <JustinPic />
        <JasonPic />
        <AnthonyPic />
        <TeamParagraph />
        <EasterEggBanner />
      </div>
    </div>
  );
}

function TonyPic() {
  return (
    <div className='TonyPic'>
      <img className='pic tony' alt='Tony Minseok Kim' src={tonyIMG}></img>
      <p className='name'>Tony Minseok Kim</p>
    </div>
  );
}

function JustinPic() {
  return (
    <div className='JustinPic'>
      <img className='pic justin' alt='Justin Payne' src={justinIMG}></img>
      <p className='name'>Justin Payne</p>
    </div>
  );
}

function JasonPic() {
  return (
    <div className='JasonPic'>
      <img className='pic jason' alt='Jason Sungmin Jin' src={jasonIMG}></img>
      <p className='name'>Jason Sungmin Jin</p>
    </div>
  );
}

function AnthonyPic() {
  return (
    <div className='AnthonyPic'>
      <img className='pic anthony' alt='Anthony Uch' src={anthonyIMG}></img>
      <p className='name'>Anthony Uch</p>
    </div>
  );
}

function TeamParagraph() {
  return (
    <div className='TeamParagraph'>
      <p className='team-paragraph'>
        Due to the rise of the recent epidemic,{' '}
        <a className='easterEggTrigger'>COVID-19</a>, many groups and
        organizations need help to survive and combat these trying times. We as
        a group are using this chance as a learning experience while also
        assisting these groups in fighting back against the epidemic. We hope to
        make an simple to use application that can find these groups the help
        they need.
      </p>
      <div className='share-button'>
        <div
          className='fb-share-button'
          data-href='https://covol.herokuapp.com/'
          data-layout='button'
          data-size='large'
        >
          <a
            target='_blank'
            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovol.herokuapp.com%2F&amp;src=sdkpreparse'
            className='fb-xfbml-parse-ignore'
          >
            Share
          </a>
        </div>
      </div>
    </div>
  );
}

function EasterEggBanner() {
  return (
    <div className='banner-container'>
      <span className='banner-text'>COVOL - BBY TEAM 30</span>
    </div>
  );
}

export default AboutUs;
