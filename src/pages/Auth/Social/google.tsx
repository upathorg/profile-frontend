import React from 'react';

const GoogleButton = () => {
  return (
    <div>
      <button className="bg-google hover:bg-google font-bold py-2 px-8 rounded inline-flex items-center">
        <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="Google logo"className="mr-2"/>
        <span>Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;