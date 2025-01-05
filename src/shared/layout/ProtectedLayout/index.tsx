import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Loader } from './style';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { user, validateToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validate = async () => {
      await validateToken();
      setLoading(false);
    };
    validate();
  }, [validateToken]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }


  return children;
}

export default ProtectedLayout;
