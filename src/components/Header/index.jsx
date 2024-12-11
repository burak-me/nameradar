import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img src={logo} alt="Nameradar Logo" className="logo" />
        <h1 className="header-title">nameradar</h1>
      </div>
      {/* diğer header içeriği... */}
    </header>
  );
};

export default Header; 