import React, { useState } from 'react';
import { 
  Form, 
  TextInput, 
  Button, 
  Checkbox, 
  Link,
  Theme
} from '@carbon/react';

/**
 * Sign In Page
 * Converted from Hugo template to Carbon React v11
 * Original: content/authentication/sign-in.html
 */
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

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
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: 'var(--cds-text-primary)'
          }}>
            Sign in to platform
          </h2>

          <Form onSubmit={handleSubmit}>
            <TextInput
              id="email"
              name="email"
              labelText="Your email"
              placeholder="name@company.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginBottom: '1.5rem' }}
            />

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

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <Checkbox
                id="remember"
                labelText="Remember me"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <Link href="#" style={{ fontSize: '0.875rem' }}>
                Lost Password?
              </Link>
            </div>

            <Button
              type="submit"
              kind="primary"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              Login to your account
            </Button>

            <div style={{
              fontSize: '0.875rem',
              color: 'var(--cds-text-secondary)',
              textAlign: 'center'
            }}>
              Not registered?{' '}
              <Link href="#">Create account</Link>
            </div>
          </Form>
        </div>
      </div>
    </Theme>
  );
}
