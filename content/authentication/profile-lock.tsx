import React, { useState } from 'react';
import { 
  Form, 
  TextInput, 
  Button, 
  Link,
  Theme
} from '@carbon/react';

/**
 * Profile Lock Page
 * Converted from Hugo template to Carbon React v11
 * Original: content/authentication/profile-lock.html
 */
export default function ProfileLock() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <Theme theme="g100">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '1.5rem'
      }}>
        <a 
          href="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
            fontSize: '1.5rem',
            fontWeight: 600,
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <img 
            src="/images/logo.svg" 
            alt="Flowbite Logo"
            style={{ marginRight: '1rem', height: '2.75rem' }}
          />
          <span>Flowbite</span>
        </a>

        <div style={{
          width: '100%',
          maxWidth: '36rem',
          padding: '2rem',
          backgroundColor: 'var(--cds-layer-01)',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <img 
            src="/images/users/bonnie-green.png" 
            alt="User avatar"
            style={{
              width: '6rem',
              height: '6rem',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              objectFit: 'cover'
            }}
          />
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: 'var(--cds-text-primary)'
          }}>
            Bonnie Green
          </h2>
          
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--cds-text-secondary)',
            marginBottom: '2rem'
          }}>
            bonnie@flowbite.com
          </p>

          <Form onSubmit={handleSubmit}>
            <TextInput
              id="password"
              name="password"
              labelText="Your password"
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ marginBottom: '1.5rem' }}
            />

            <Button
              type="submit"
              kind="primary"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              Unlock
            </Button>

            <div style={{
              fontSize: '0.875rem',
              color: 'var(--cds-text-secondary)'
            }}>
              <Link href="/authentication/sign-in">Sign in with another account</Link>
            </div>
          </Form>
        </div>
      </div>
    </Theme>
  );
}
