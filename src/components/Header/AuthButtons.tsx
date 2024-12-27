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
          className="template-btn btn-style-two bg-black"
        >
          <span className="btn-wrap">
            <span className="text-one text-white">
              {intl.formatMessage({ id: 'auth.login' })}
            </span>
            <span className="text-two text-white">
              {intl.formatMessage({ id: 'auth.login' })}
            </span>
          </span>
        </button>
      )}
    </div>
  );
};