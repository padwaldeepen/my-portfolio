import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  Tooltip,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { profile } from '../../data';
import { fonts } from '../../theme';

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    fontFamily: fonts.sans,
    fontSize: '0.95rem',
    '& fieldset': { borderColor: 'divider' },
    '&:hover fieldset': { borderColor: 'text.secondary' },
    '&.Mui-focused fieldset': { borderColor: 'text.primary', borderWidth: 1 },
  },
  '& .MuiInputLabel-root': {
    fontFamily: fonts.mono,
    fontSize: '0.8rem',
    letterSpacing: '0.03em',
    '&.Mui-focused': { color: 'text.primary' },
  },
};

const CopyableEmail = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Stack direction="row" spacing={0.25} sx={{ alignItems: 'center', mb: 0.5 }}>
      <Typography
        variant="caption"
        sx={{ fontFamily: fonts.mono, color: 'text.secondary', fontSize: '0.7rem' }}
      >
        {email}
      </Typography>
      <Tooltip title={copied ? 'Copied!' : 'Copy email'}>
        <IconButton
          size="small"
          onClick={handleCopy}
          aria-label="Copy email address"
          sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
        >
          {copied ? (
            <CheckIcon sx={{ fontSize: '0.85rem' }} />
          ) : (
            <ContentCopyIcon sx={{ fontSize: '0.85rem' }} />
          )}
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="05">Contact</SectionLabel>
      <SectionHeading mb={2}>Let&apos;s work together</SectionHeading>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', maxWidth: 540, mb: 5, lineHeight: 1.7 }}
      >
        I&apos;m currently available for freelance and full-time opportunities. Send a message and
        I&apos;ll get back to you promptly.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ maxWidth: 560 }}>
        <Stack spacing={2.5}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Name"
              value={form.name}
              onChange={handleChange('name')}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              sx={inputSx}
            />
            <TextField
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              sx={inputSx}
            />
          </Stack>
          <TextField
            label="Message"
            value={form.message}
            onChange={handleChange('message')}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={5}
            fullWidth
            sx={inputSx}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button type="submit" variant="contained" disableElevation size="large" sx={{ px: 4 }}>
              Send message
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ mt: 5 }}>
        <CopyableEmail email={profile.email} />
        <Typography
          variant="caption"
          sx={{
            fontFamily: fonts.mono,
            color: 'text.secondary',
            fontSize: '0.7rem',
            display: 'block',
          }}
        >
          {profile.location}
        </Typography>
      </Box>

      <Snackbar
        open={sent}
        autoHideDuration={4000}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSent(false)} sx={{ fontFamily: fonts.mono }}>
          Message ready — your mail client will open.
        </Alert>
      </Snackbar>
    </Box>
  );
};
