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
    },
    {
      reviewer: "Thomas",
      stars: 5,
      text: "Just a perfect accommodation for a stay in group or family. Super friendly and helpful host. If it's free, don't bother to book it!"
    },
    {
      reviewer: "Nina (Slovenia)",
      stars: 5,
      text: "Vse je bilo odlično!"
    },
    {
      reviewer: "Nina (Croatia)",
      stars: 5,
      text: "Amazing house and well equipped. Spacious rooms and great pool. I also recommend restaurant Tri Murve that is nearby. Everything was great."
    },
    {
      reviewer: "Vanja",
      stars: 5,
      text: "Our hosts (wonderful couple) did everything, from the first moment, to make us feel comfortable and welcome. They were there for us at all times, without violating our privacy in any way. The villa is beautifully decorated, and the children enjoyed the pool and the garden. I can only say that the whole experience was excellent. We'll be back next year. Everything was great."
    },
    {
      reviewer: "Ruslan",
      stars: 5,
      text: "Magnificent and functional new villa in a quiet location with excellent views. In reality it is even more beautiful and spacious than the photos. Inside there are 5 comfortable bedrooms with en suite bathroom each and a large living room and kitchen. Outside there is parking, a swimming pool with sun loungers and a terrace with a large dining table and gas barbecue (special thanks). The lovely hosts make a great addition to the experience, there were two bottles waiting for us in the wine fridge and we were allowed to stay longer as there were no guests after us. Will definitely be back for a longer stay."
    },
    {
      reviewer: "Marin",
      stars: 5,
      text: "Sve lijepo i uredno"
    },
    {
      reviewer: "Verena",
      stars: 5,
      text: "Es war rund um ein perfekter Urlaub in der Villa Zara. In der Villa fehlt es an nichts & selbst wenn, war Rea sofort zur Stelle. Das Grundstück ist riesengroß, eine Tischtennisplatte steht draußen zur Verfügung, für Kinder ein Spielgerät und der beheizte Pool ist selbst an kälteren/windigen Tagen angenehm. Man hat einen schönen Ausblick auf die Weinreben und im Hintergrund auf die Berge. Im Haus ist alles modern und schön groß. Jedes Schlafzimmer hat ein eigenes Bad. Wir waren mehr als zufrieden mit der Unterkunft. Wenn es überhaupt was zu beanstanden gibt, dann das sie Außenbeleuchtung draußen am Tisch und Fliegengitter an den Fenstern/Türen fehlt. Aber das sind echt Kleinigkeiten, die nicht groß gestört haben."
    },
    {
      reviewer: "Christoph",
      stars: 5,
      text: "Das Haus war einfach perfekt. Die Gastgeber sehr freundlich. Hatten nichts auszusetzen! Nichts"
    },
    {
      reviewer: "Johannes",
      stars: 5,
      text: "Alles ist super schön eingerichtet. Die Ausstattung ist perfekt. Rea ist wirklich hilfsbereit und extrem zuvorkommend."
    },
    {
      reviewer: "Nadine",
      stars: 5,
      text: "Wir hatten einen wundervollen Urlaub. Die Villa hat unsere Erwartungen übertroffen. Die Lage der Villa ist einfach idyllisch. Die Gastgeberin war zu jeder Zeit erreichbar und super freundlich. Vielen lieben Dank für den tollen Aufenthalt. Ein sehr gelungener Urlaub in Kroatien."
    },
    {
      reviewer: "Tomaž",
      stars: 4,
      text: "Mirna lokacija, prostornost nastanitve"
    },
    {
      reviewer: "Hannah",
      stars: 4,
      text: "Das Haus ist sehr schön und modern eingerichtet. Jedes Schlafzimmer hat sein eigenes Badezimmer und der Ausblick in die Natur ist beeindruckend. Wohnzimmer, Küche und Esszimmer verfügen über alle notwendigen Gegenstände für tolle gemeinsame Abende. Der Pool ist angenehm und mit ausreichend Liegen ausgestattet. Der Außenbereich ist bis auf fehlendes Licht für Abends schön gestaltet. Auch eine Grillplatte steht zur Verfügung. Ein Schneidebrett mehr in der Küche wäre hilfreich gewesen."
    },
    {
      reviewer: "Nóra",
      stars: 5,
      text: "A ház nagyon szép, a környezet barátságos, nyugodt kikapcsolódásra kiválóan alkalmas. A szállásadó hihetetlenül kedves és figyelmes, mindenben segített és tökéletesen előkészítette a házat a fogadásunkra. Nagy társasággal is jól elfértünk, sokat használtuk a medencét és a grill sütőt."
    },
    {
      reviewer: "Büttner",
      stars: 5,
      text: "Es wurde sich, ganz einfach gesagt, um alles gekümmert. Egal ob ein zusätzliches Bett für ein Kind im Übergangsalter zwischen 4 und 5 benötigt wurde oder man Informationen benötigt hat. Das Haus ist wunderschön und hat diesen Urlaub zu einem rundum- sorglos-Paket gemacht. Pool und Haus super sauber und gepflegt, Platz mehr als genug und Haushaltsgeräte alle vorhanden! Vielen Dank für die tolle Zeit und gerne wieder!"
    },
    {
      reviewer: "Ismail",
      stars: 5,
      text: "Sehr schöne Villa in angenehmer, ruhiger Lage. Alles sehr neu gebaut und modern eingerichtet. Eine traumhafte Terrasse mit Gasgrill und Pool laden zu netten Abenden draußen ein. Die Hosts der Villa sind mega hilfsbereit und haben in unserer Abwesenheit die Stühle und Liegen aufgrund eines Sturms in Sicherheit gebracht. Kann die Villa jeder größeren Gruppe empfehlen!"
    },
    {
      reviewer: "Grzegorz",
      stars: 5,
      text: "Wspaniali właściciele bardzo polecam ta Ville na Spokojny odpoczynek w Istria. Basen oraz wyposażenie."
    },
    {
      reviewer: "Blaz",
      stars: 5,
      text: "There are no comments available for this review."
    },
    {
      reviewer: "Magdalena",
      stars: 5,
      text: "There are no comments available for this review."
    },
    {
      reviewer: "Dobrounig",
      stars: 5,
      text: "There are no comments available for this review."
    },
    {
      reviewer: "Christopher",
      stars: 4,
      text: "There are no comments available for this review."
    },
    {
      reviewer: "Sandra",
      stars: 4,
      text: "There are no comments available for this review."
    },
    {
      reviewer: "Michael",
      stars: 4,
      text: "There are no comments available for this review."
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

function renderReviews(villa, containerId, reviewsPageUrl) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const reviews = villaReviews[villa] || [];
  let html = `<h2>What Guests Say About Villa ${villa.charAt(0).toUpperCase() + villa.slice(1)}</h2>
    <div class="reviews-slider">`;
  if (reviews.length === 0) {
    html += `<div class="review"><p>No reviews yet.</p></div>`;
  } else {
    html += reviews.slice(0, 5).map(r => `
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
    <a href="${reviewsPageUrl}" class="btn show-all-reviews">Show all reviews</a>`;
  container.innerHTML = html;
}

// Call for each villa
renderReviews(
  "zara",
  "villa-zara-reviews",
  "villa-zara-reviews.html"
);
renderReviews(
  "laura",
  "villa-laura-reviews",
  "villa-laura-reviews.html"
);
renderReviews(
  "vale",
  "villa-vale-reviews",
  "villa-vale-reviews.html"
);