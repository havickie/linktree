import React from 'react';
import '../App.css';


const Links = () => {
  return (
    <>
      <div className=' link-boxes'>
        <a
          title='follow me on twitter'
          id=''
          href='https://twitter.com/haveekk'
        >
          Twitter
        </a>

        <a
          title='Register to join the next cohort'
          id='btn__zuri'
          href='https://training.zuri.team/'
        >
          Zuri Team
        </a>

        <a
          title='Dig into a good book today!'
          id='books'
          href='https://books.zuri.team/'
        >
          Zuri Books
        </a>

        <a
          title='   Provides you with the information and standards you need to develop
            genuinely professional designs'
          id='book__python'
          href='https://books.zuri.team/python-for-beginners?ref_id=astrocub'
        >
          Python Books
        </a>

        <a
          title=' Do you waste a lot of time looking for legitimate expert coders?
            That is time that may be better spent finding new clients for your
            startup.'
          id='pitch'
          href='https://background.zuri.team/'
        >
          Background Check for Coders
        </a>
        <a
          title=' Click to get a free design book to kick start a tech career'
          id='book__design'
          href='https://books.zuri.team/design-rules'
        >
          Design Books
        </a>

<a id='contact' href='/contact'>Contact Me</a>
      </div>
    </>
  );
};

export default Links;
