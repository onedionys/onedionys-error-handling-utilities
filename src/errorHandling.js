/**
 * Function to handle errors gracefully
 * @param {Error} error - The error object
 * @returns {Object} - Object containing error message and status
 */
function handleError(error) {
    console.error("An error occurred:", error.message);
    return { message: error.message, status: 'error' };
  }
  
  module.exports = { handleError };
  