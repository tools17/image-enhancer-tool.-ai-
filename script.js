// Advanced Ad Management System | Auto Ad Placement | Contextual Advertising | Click Monetization
const adContainers = {
    topAd: document.getElementById('top-ad'),
    middleAd: document.getElementById('middle-ad'),
    bottomAd: document.getElementById('bottom-ad'),
    adModal: document.getElementById('ad-modal'),
    adContent: document.getElementById('ad-content')
};

// Sample ad content (replace with actual ad code)
const adTemplates = {
    banner: `<div class="ad-content">ADVERTISEMENT: Premium Web Hosting - 50% OFF (Ad ID: ADS-72890)</div>`,
    modal: `<div class="ad-content">
        <h3>Special Offer Just For You!</h3>
        <p>Get premium developer tools at 30% discount</p>
        <p>Use code: DEVTOOLS30 (Ad ID: ADS-72891)</p>
        <button class="btn">Claim Offer Now</button>
    </div>`
};

// Initialize ads on page load
function initializeAds() {
    // Load banner ads
    adContainers.topAd.innerHTML = adTemplates.banner;
    adContainers.middleAd.innerHTML = adTemplates.banner;
    adContainers.bottomAd.innerHTML = adTemplates.banner;
    
    // Set up download button event listeners
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showAdModal();
        });
    });
    
    // Close modal functionality
    document.querySelector('.close-btn').addEventListener('click', function() {
        adContainers.adModal.style.display = 'none';
    });
}

// Show modal ad
function showAdModal() {
    adContainers.adContent.innerHTML = adTemplates.modal;
    adContainers.adModal.style.display = 'block';
    
    // Close modal if clicked outside content
    window.addEventListener('click', function(e) {
        if(e.target === adContainers.adModal) {
            adContainers.adModal.style.display = 'none';
        }
    });
}

// Initialize ads when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAds);
