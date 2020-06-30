import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import './styles.scss';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-none d-md-flex navbar-container">
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='color-text' href="/components/">Mouses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">Headsets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">Teclados</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='color-text' href="/components/">Placas de vídeo</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
            
              <DropdownToggle className='color-text' nav caret>
                PC Gamer
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  Intel i5
                </DropdownItem>
                <DropdownItem >
                  Intel i7
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;