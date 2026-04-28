import React, { useState } from 'react';
import { 
  Form, 
  TextInput, 
  Button, 
  Link,
  Theme
} from '@carbon/react';

/**
 * Forgot Password Page
 * Converted from Hugo template to Carbon React v11
 * Original: content/authentication/forgot-password.html
 */
export default function ForgotPassword() {
  const [email, setEmail] = useState('');

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
            marginBottom: '1rem',
            color: 'var(--cds-text-primary)'
          }}>
            Forgot your password?
          </h2>
          
          <p style={{
            fontSize: '0.875rem',
            color: 'var(--cds-text-secondary)',
            marginBottom: '2rem'
          }}>
            Don't fret! Just type in your email and we will send you a code to reset your password!
          </p>

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

            <Button
              type="submit"
              kind="primary"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              Reset password
            </Button>

            <div style={{
              fontSize: '0.875rem',
              color: 'var(--cds-text-secondary)',
              textAlign: 'center'
            }}>
              <Link href="/authentication/sign-in">Back to sign in</Link>
            </div>
          </Form>
        </div>
      </div>
    </Theme>
  );
}
