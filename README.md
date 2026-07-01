# sieve-demo

A demo Express + React application used to showcase [Sieve by Fendora](https://github.com/fendora-io/sieve-action) — an AI-powered false positive filter for security scanners.

When a pull request is opened, Sieve runs Semgrep on the changed files and posts a comment showing only the real vulnerabilities, with false positives suppressed.

## Setup

```bash
npm install
npm start
```

## Security scanning

Sieve is configured in `.github/workflows/security.yml` and runs automatically on every pull request.
