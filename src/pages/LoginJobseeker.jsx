import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import logo from "../images/logo-kırmızı.png";
import login from "../images/login.jpg";

export default function LoginJobseeker() {
  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={login}></Image>
          </Grid.Column>
          <Grid.Column width={10} style={{ maxWidth: 450 }}>
            <Header as="h2" inverted color="red" textAlign="center">
              <Header.Content>
                <Image src={logo} size="tiny" />
                <Header.Content>Giriş Yap</Header.Content>
              </Header.Content>
            </Header>
            <Form size="large">
              <Segment textAlign="left" color="red" stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  label="E-posta Adresi"
                  placeholder="E-posta adresi"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Şifre"
                  placeholder="Şifre"
                  type="password"
                />
                <Button primary fluid size="large">
                  GİRİŞ YAP
                </Button>
              </Segment>
            </Form>
            <Message>
              Hesabınız yok mu?{" "}
              <Button as={NavLink} to="/registerjobseeker" color="green">
                KAYIT OL
              </Button>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
