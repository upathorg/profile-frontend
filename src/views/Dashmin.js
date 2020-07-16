// Imports
import React                        from 'react';

// Components
import { Sidebar, Navbar, Content } from 'components';

// Routes
import Upath                      from 'routes';

// Main
export default function Main() {
  return (
    <>
      <Navbar
        dropdown={Upath.navbar.dropdown}
      />
      <Sidebar
        brand={Upath.sidebar.brand}
        buttons={Upath.sidebar.buttons}
      />
      <Content
        routes={Upath.content}
      />
    </>
  )
}
