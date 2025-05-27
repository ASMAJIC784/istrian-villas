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
    {
      reviewer: "Эдита",
      stars: 5,
      text: "A wonderful villa, fully equipped with everything you need. Modern renovation, each room has its own bathroom, large pool, beautiful view of the vineyards. The owner is very caring and attentive. Highly recommend, will definitely come back!"
    },
    {
      reviewer: "Katarina",
      stars: 5,
      text: "Das Haus ist toll, sauber und die Chefin super nett und zuvorkommend. Es war sehr sauber und wie auf den Bildern. Es gab leider keine Fliegengitter an den Fenstern."
    },
    {
      reviewer: "Jasmine",
      stars: 4,
      text: "Wunderschönes Ferienhaus in idyllischer ruhiger Lage. Der Außenbereich mit Außenküche war das Highlight. Jedes Schlafzimmer hat sein eigenes Bad und TV mit Netflix. Sehr ruhig, Auto notwendig. Vermieterin sehr nett und hilfsbereit. Sehr empfehlenswert!"
    },
    {
      reviewer: "Tihomir",
      stars: 5,
      text: "Wer Ruhe vom Alltag sucht, ist hier gut aufgehoben. Der große Pool war für die Kids ein Highlight und jedes Zimmer hat sein eigenes Badezimmer. Die Besitzerin ist immer für einen da und löst Probleme schnell und freundlich. Kommen gerne wieder."
    },
    {
      reviewer: "Boris",
      stars: 5,
      text: "Sve pohvale, vratit ćemo se sigurno! Domaćini su učinili sve da se osjećamo ugodno i dobrodošlo. Vila je lijepo uređena, vanjska kućica sa roštiljem pored bazena odlična, djeca su uživala u bazenu i vrtu."
    },
    {
      reviewer: "Barbara (Germany)",
      stars: 4,
      text: "Ein tolles Haus, sehr zu empfehlen. Sehr geräumig mit schöner Einrichtung. Besonders gefallen hat uns die große Outdoor Küche und der Pool. Die Vermieterin war sehr hilfsbereit. Uns hat alles gefallen."
    },
    {
      reviewer: "Barbara (Croatia)",
      stars: 5,
      text: "Vila Laura je savršena za odmor! Mirna lokacija, puno zelenila, kuća prostrana, nova, čista, potpuno opremljena. Uživali smo u bazenu i vanjskoj kamenoj kućici s kuhinjom i roštiljem. Domaćica je super ljubazna. Definitivno preporuka i vraćamo se."
    }
  ],
  vale: [
    {
      reviewer: "Phan",
      stars: 5,
      text: "Diese Unterkunft hat die volle Punktzahl verdient. Ausstattung, Lage und Besitzer, alles perfekt!"
    },
    {
      reviewer: "Davide",
      stars: 5,
      text: "Villa molto confortevole, ideale per due famiglie. Non manca nulla, il gestore è estremamente disponibile. A poca distanza da Labin, splendido borgo nel quale cenare. La zona è molto tranquilla e la piscina pulitissima."
    },
    {
      reviewer: "Emanuele",
      stars: 4,
      text: "Anlage sehr gepflegt, Raumaufteilung war super, sauberer Swimmingpool, ruhige Lage und doch so nahe an der Stadt und nicht weit weg von Meer, sehr wichtig jedes Zimmer hat eine Klimaanlage, Gastgeber zuvorkommend. Gerne wieder."
    },
    {
      reviewer: "Dawood",
      stars: 4,
      text: "There are no comments available for this review."
    }
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