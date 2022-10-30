import React from 'react';
import '../App.css';

const Links = () => {
  return (
    <>
      <div className='link-boxes tooltip'>
        <a href='https://twitter.com/haveekk'>
          <button>Twitter</button>
          <span class='tooltiptext'>follow me on twitter</span>
        </a>
      </div>

      <div className='link-boxes tooltip'>
        <a title='red on' href='https://training.zuri.team/'>
          <button id=''>Zuri Team</button>
          <span class='tooltiptext'>Register to join the next cohort</span>
        </a>
      </div>

      <div className='link-boxes tooltip'>
        <a href='https://books.zuri.team/'>
          <button id=''>Zuri Books</button>
          <span class='tooltiptext'>Dig into a good book today!</span>
        </a>
      </div>

      <div className='link-boxes tooltip'>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=astrocub'>
          <button id=''>Python Books</button>
          <span class='tooltiptext'>
            Provides you with the information and standards you need to develop
            genuinely professional designs
          </span>
        </a>
      </div>

      <div className='link-boxes tooltip'>
        <a href='https://background.zuri.team/'>
          <button id=''>Background Check for Coders</button>
          <span class='tooltiptext'>
            Do you waste a lot of time looking for legitimate expert coders?
            That is time that may be better spent finding new clients for your
            startup.
          </span>
        </a>
      </div>

      <div className='link-boxes tooltip'>
        <a href='https://books.zuri.team/design-rules'>
          <button id=''>Design Books</button>
          <span class='tooltiptext'>
            Click to get a free design book to kick start a tech career
          </span>
        </a>
      </div>
    </>
  );
};

export default Links;
