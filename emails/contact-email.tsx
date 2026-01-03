import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export function ContactEmail({ name, email, phone, subject, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          {phone && (
            <Section style={section}>
              <Text style={label}>Phone:</Text>
              <Text style={value}>{phone}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#0F4C75',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
}

const section = {
  padding: '0 40px',
  marginBottom: '16px',
}

const label = {
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
}

const value = {
  color: '#1e293b',
  fontSize: '16px',
  margin: '0 0 16px',
}

const messageText = {
  color: '#1e293b',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  padding: '16px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
}

const hr = {
  borderColor: '#e2e8f0',
  margin: '32px 0',
}