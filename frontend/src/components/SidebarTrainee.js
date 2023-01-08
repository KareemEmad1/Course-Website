import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SubMenu'
import { SidebarDataTrainee } from './SideBarDataTrainee'

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #28bac2;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const SidebarTrainee = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

  return (<>
  <NavIcon to="#">
    <FaIcons.FaBars onClick={showSidebar}/>
  </NavIcon>
  <SidebarNav sidebar={sidebar}>
    <SidebarWrap>
        <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar}/>
        </NavIcon>
        {SidebarDataTrainee.map((item,index)=>{
            return <SubMenu item={item} key={index} />
        })}
    </SidebarWrap>
  </SidebarNav>
  </>
  )
}

export default SidebarTrainee
