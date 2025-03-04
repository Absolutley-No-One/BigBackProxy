function redirectWithProxy() {
  const url = document.getElementById("urlInput").value;

  // Check if the entered URL is valid
  if (!url || !isValidUrl(url)) {
    alert("Please enter a valid URL.");
    return;
  }

  // Define the proxy URL (replace with your proxy URL)
  const proxyUrl = "https://your-proxy-server.com/"; // Replace with your proxy server URL

  // Redirect to the URL through the proxy
  window.location.href = proxyUrl + encodeURIComponent(url);
}

// Function to validate the URL format
function isValidUrl(url) {
  try {
    new URL(url); // Tries to create a URL object from the input
    return true;
  } catch (e) {
    return false; // If it's invalid, it will throw an error
  }
}
