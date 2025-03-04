let tabCounter = 0;
const tabsContainer = document.getElementById('tabs');
const tabContentContainer = document.getElementById('tabContent');

// Function to open a new tab with a proxy URL
function openTab() {
  const url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  tabCounter++;
  const tabId = `tab${tabCounter}`;
  
  // Create a new tab element
  const newTab = document.createElement('div');
  newTab.classList.add('tab');
  newTab.setAttribute('id', tabId);
  newTab.innerText = `Tab ${tabCounter}`;
  newTab.onclick = () => loadTabContent(tabId, url);
  
  tabsContainer.appendChild(newTab);
  loadTabContent(tabId, url);
}

// Function to load content in a tab (i.e., proxy the URL)
function loadTabContent(tabId, url) {
  // Highlight the active tab
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  // Set up the iframe to display the proxied website
  const iframe = document.createElement('iframe');
  iframe.src = `/proxy?url=${encodeURIComponent(url)}`;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  // Clear the previous content and append the iframe
  tabContentContainer.innerHTML = '';
  tabContentContainer.appendChild(iframe);
}
