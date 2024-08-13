const NGROK_URL = import.meta.env.VITE_API_URL;

const string_params = () => {
  // Check if URL is localhost
  switch (String(window.location).split('/')[2]) {
    case 'localhost:5173':
      return NGROK_URL;
    case 'stg.admin.samplehosting.org':
      return 'https://api.stg.samplehosting.org';
    case 'dev.admin.samplehosting.org':
      return 'https://api.dev.samplehosting.org';
    case 'admin.samplehosting.org':
      return 'https://api.samplehosting.org';
    default:
      return 'https://api.samplehosting.org';
  }
};

export const API_URL_TEMP = `${string_params()}/api`;
