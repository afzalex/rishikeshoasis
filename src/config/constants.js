export const getBaseUrl = () => {
  return ''; // No prefix needed for custom domain
};

// For assets like images
export const getAssetsUrl = () => {
  return process.env.PUBLIC_URL || ''; // Use PUBLIC_URL for correct asset paths
}; 