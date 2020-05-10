import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/Auth';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
