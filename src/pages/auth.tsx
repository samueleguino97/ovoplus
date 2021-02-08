import Logo from "@components/Logo";
import { useLoadingState } from "@hooks/useLoadingState";
import {
  Button,
  Card,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Typography,
} from "antd";
import { auth } from "config/firebase";
import React, { useState } from "react";

function AuthenticationPage({ onSignIn }: { onSignIn: Function }) {
  const { loading, toggleLoading } = useLoadingState();
  function signinUser({ email, password }) {
    toggleLoading();
    auth()
      .signInWithEmailAndPassword(email + "@ovoplusbo.com", password)
      .then(() => {
        onSignIn(email);
      })
      .finally(() => toggleLoading());
  }
  return (
    <Layout>
      <Layout.Content>
        <Row style={{ height: "100vh" }} justify="center" align="middle">
          <Card>
            <Row style={{ marginBottom: 12 }} justify="center">
              <Logo />
            </Row>
            <Typography.Title>Iniciar Sesion</Typography.Title>
            <Form onFinish={signinUser} layout="vertical">
              <Form.Item name="email" label="Correo Electronico">
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Contraseña">
                <Input type="password" />
              </Form.Item>

              <Row justify="center">
                <Button
                  size="large"
                  loading={loading}
                  htmlType="submit"
                  type="primary"
                >
                  Iniciar
                </Button>
              </Row>
            </Form>
          </Card>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default AuthenticationPage;
