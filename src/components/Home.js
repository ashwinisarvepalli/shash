import React, {useState} from 'react';
import './Home.scss';
import YoutubeEmbed from "./YoutubeEmbed";

export default function Home() {

  return (
      <div>
        <YoutubeEmbed embedId="C65iqOSCZOY" />
        <div className='info'>
        <h1> How You Can Help </h1>
            <p> Inspired by these stories and other case studies around the wolrd of locations suffering without water, we decided to combat the water apocalypse by creating 
                a website where users around the world could play games that would aid in donating money to organizations that will help provide water. 
                So please begin Playing Now!
            </p>
        </div>
      </div>
  );
};
