const nextConfig = {
  env: {
    api_url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://smnmtchll-portfolio.smnmtchll.now.sh',
  },
};

module.exports = nextConfig;
