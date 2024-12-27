import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useIntl } from 'react-intl';
import { UserMenu } from './UserMenu';

export const AuthButtons: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const intl = useIntl();

  return (
    <div>
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          {intl.formatMessage({ id: 'auth.login' })}
        </button>
      )}
    </div>
  );
};