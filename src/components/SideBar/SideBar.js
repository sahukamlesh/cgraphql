import React from "react";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import {Container,ProfileContainer,Avatar,Name,LinksContainer,Links,Link,ContactContainer} from './SideBar.element'
function Sidebar() {
    const avatarImage = 'https://www.cartoonbucket.com/wp-content/uploads/2015/09/Link-Cartoon-Image.jpg' 
			
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={avatarImage} />
        <Name> Covid App</Name>
       
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Stats</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>FaQ</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

export default Sidebar;