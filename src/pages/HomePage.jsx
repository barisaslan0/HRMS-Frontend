import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Header, Icon } from "semantic-ui-react";

export default function HomePage() {
  return (
    <div className="image">
      <Header inverted color="red" as="h1" icon textAlign="left">
        <Header.Content style={{ fontSize: "50px" }}>
          HAYALİNDEKİ İŞİ BUL
        </Header.Content>
      </Header>
      <Header inverted color="red" as="h2" icon textAlign="left">
        <Header.Content style={{ fontSize: "50px" }}>
          Binlerce İş İlanı Arasında 
          Kendine Uygun işi Hemen Bul!
        </Header.Content>
      </Header>
      <Button as={NavLink} to="/jobpostings" color="green" size="huge">
        İŞ ARA
        <Icon name="right arrow" />
      </Button>
    </div>
  );
}
