export const getBaseUrl = () => {
  return process.env.NODE_ENV === 'production' 
    ? '/rishikeshoasis'
    : '';
};

// For assets like images
export const getAssetsUrl = () => {
  return process.env.NODE_ENV === 'production' 
    ? '/rishikeshoasis'
    : '';
}; 