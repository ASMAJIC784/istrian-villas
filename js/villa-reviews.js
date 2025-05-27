// Example reviews data (move your real reviews here)
const villaReviews = {
  zara: [
    {
      reviewer: "Callista Marie",
      stars: 5,
      text: "What an amazing home! Everything is so beautiful and the finishing touches are just stunning. Super comfy beds!"
    },
    {
      reviewer: "Marco Wild",
      stars: 5,
      text: "Posto nuovissimo! Molto pulito e accogliente, il proprietario è stato molto gentile e accogliente su ogni richiesta, conosce bene la gente del posto e ci ha aiutato ad organizzare le vacanze nei dintorni."
    },
    {
      reviewer: "Rob Zahtila",
      stars: 5,
      text: "A short break at Villa Zara. Hosts were wonderful and the property beautiful. Picturesque outlook over vineyards with mountains in the distance. A first class property and holiday."
    },
    {
      reviewer: "Igor Isakovic",
      stars: 5,
      text: "House is very clean and lots of space. It was really nice and quiet location. Kids really enjoyed pool. Owner was very kind and helpful. Definitely coming back."
    },
    {
      reviewer: "Amy West",
      stars: 5,
      text: "Fantastic vacation villa surrounded by nature. Everything was brand new, modern, thoughtfully designed, fully equipped."
    }
  ],
  laura: [
    // Add Laura reviews here
  ],
  vale: [
    // Add Vale reviews here
  ]
};

function renderReviews(villa, containerId, googleUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const reviews = villaReviews[villa] || [];
  let html = `<h2>What Guests Say About Villa ${villa.charAt(0).toUpperCase() + villa.slice(1)}</h2>
    <div class="reviews-slider">`;
  if (reviews.length === 0) {
    html += `<div class="review"><p>No reviews yet.</p></div>`;
  } else {
    html += reviews.map(r => `
      <div class="review">
        <div class="review-header">
          <span class="reviewer">${r.reviewer}</span>
          <span class="stars">${"★".repeat(r.stars)}</span>
        </div>
        <p>"${r.text}"</p>
      </div>
    `).join('');
  }
  html += `</div>
    <a href="${googleUrl}" target="_blank" class="btn show-all-reviews">Show all reviews</a>`;
  container.innerHTML = html;
}

// Call for each villa
renderReviews(
  "zara",
  "villa-zara-reviews",
  "https://www.google.com/maps/place/Villa+Zara/@45.1308378,14.1019225,619m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47634d7ce68eb081:0xdbda2ee71343e6d5!8m2!3d45.1308378!4d14.1019225!16s%2Fg%2F11kpsfb8mn?entry=ttu"
);
renderReviews("laura", "villa-laura-reviews", "#");
renderReviews("vale", "villa-vale-reviews", "#");