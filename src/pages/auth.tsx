import { useLoadingState } from "@hooks/useLoadingState";
import { Button, Card, Form, Input, Layout, Row, Typography } from "antd";
import { auth } from "config/firebase";
import React, { useState } from "react";

function AuthenticationPage({ onSignIn }: { onSignIn: Function }) {
  const { loading, toggleLoading } = useLoadingState();
  function signinUser({ email, password }) {
    toggleLoading();
    auth()
      .signInWithEmailAndPassword(email, password)
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
            <Typography.Title>Iniciar Sesion</Typography.Title>
            <Form onFinish={signinUser} layout="vertical">
              <Form.Item name="email" label="Correo Electronico">
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Contraseña">
                <Input type="password" />
              </Form.Item>
              <Button loading={loading} htmlType="submit" type="primary">
                Iniciar
              </Button>
            </Form>
          </Card>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default AuthenticationPage;
