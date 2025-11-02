/* Symbat */ 


document.addEventListener("DOMContentLoaded", function() {
  const sidebarHeaders = document.querySelectorAll('.accordion-header');
  sidebarHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const languageSelector = document.getElementById("language-selector");
  
  const translations = {
    en: {
      "home": "Home",
      "destinations": "Destinations",
      "packages": "Packages",
      "special-offers": "Special Offers",
      "guide": "Guide",
      "booking": "Booking",
      "support": "Support",
      "about-us": "About Us",
      "categories": "Categories",
      "family-tours": "Family Tours",
      "family-desc": "Trips perfect for families with kids, safe beaches, and family-friendly hotels.",
      "romantic-tours": "Romantic Tours",
      "romantic-desc": "Unforgettable moments for couples with romantic dinners and spa treatments.",
      "beach-tours": "Beach Tours",
      "beach-desc": "Relax on the best beaches with crystal clear water and tropical climate.",
      "cultural-tours": "Cultural Tours",
      "cultural-desc": "Discover museums, landmarks, and cultural events around the world.",
      "our-tour-packages": "Our Tour Packages",
      "choose-perfect-trip": "Choose the perfect trip for yourself and your loved ones",
      "family-vacation": "Family Vacation",
      "family-desc": "Perfect holidays for the whole family with kids’ entertainment, safe beaches, and family-friendly hotels.",
      "romantic-tour": "Romantic Tour",
      "romantic-desc": "Unforgettable moments for couples with romantic dinners, spa treatments, and private beaches.",
      "beach-tour": "Beach Tour",
      "beach-desc": "Relax on the best beaches with crystal clear water, white sand, and tropical climate.",
      "cultural-tour": "Cultural Tour",
      "cultural-desc": "Discover history and culture by visiting museums, landmarks, and cultural events.",
      "price-family": "From $600 / family",
      "price-couple": "From $800 / couple",
      "price-person": "From $500 / person",
      "more-details": "More details",
    },
    ru: {
      "categories": "Категории",
      "family-tours": "Семейные туры",
      "family-desc": "Путешествия, идеально подходящие для семей с детьми, безопасные пляжи и отели, подходящие для семей.",
      "romantic-tours": "Романтические туры",
      "romantic-desc": "Незабываемые моменты для пар с романтическими ужинами и спа-процедурами.",
      "beach-tours": "Пляжные туры",
      "beach-desc": "Отдых на лучших пляжах с кристально чистой водой и тропическим климатом.",
      "cultural-tours": "Культурные туры",
      "cultural-desc": "Откройте для себя музеи, памятники и культурные события по всему миру.",
      "our-tour-packages": "Наши турпакеты",
      "choose-perfect-trip": "Выберите идеальное путешествие для себя и своих близких",
      "family-vacation": "Семейный отпуск",
      "family-desc": "Идеальные каникулы для всей семьи с развлекательными программами для детей, безопасными пляжами и отелями, подходящими для семей.",
      "romantic-tour": "Романтический тур",
      "romantic-desc": "Незабываемые моменты для пар с романтическими ужинами, спа-процедурами и частными пляжами.",
      "beach-tour": "Пляжный тур",
      "beach-desc": "Отдых на лучших пляжах с кристально чистой водой, белым песком и тропическим климатом.",
      "cultural-tour": "Культурный тур",
      "cultural-desc": "Откройте для себя историю и культуру, посетив музеи, памятники и культурные события.",
      "price-family": "От $600 / семья",
      "price-couple": "От $800 / пара",
      "price-person": "От $500 / человек",
      "more-details": "Подробнее",
    },
    kk: {
      "categories": "Категориялар",
      "family-tours": "Отбасылық турлар",
      "family-desc": "Балалармен демалуға, қауіпсіз жағажайларға және отбасылық қонақ үйлерге арналған сапарлар.",
      "romantic-tours": "Романтикалық турлар",
      "romantic-desc": "Жұптарға арналған ұмытылмас сәттер, романтикалық кешкі ас және спа процедуралары.",
      "beach-tours": "Жағажай турлары",
      "beach-desc": "Ең жақсы жағажайларда демалыңыз, кристалды таза су мен тропикалық климатта.",
      "cultural-tours": "Мәдени турлар",
      "cultural-desc": "Дүниежүзілік мұражайлар, ескерткіштер мен мәдени іс-шаралармен танысыңыз.",
      "our-tour-packages": "Біздің тур пакеттеріміз",
      "choose-perfect-trip": "Өзіңіз бен жақындарыңызға ең жақсы сапарды таңдаңыз",
      "family-vacation": "Отбасылық демалыс",
      "family-desc": "Балаларға арналған ойын-сауық, қауіпсіз жағажайлар және отбасылық қонақ үйлері бар демалыс.",
      "romantic-tour": "Романтикалық тур",
      "romantic-desc": "Жұптарға арналған ұмытылмас сәттер, романтикалық кешкі ас, спа процедуралары және жеке жағажайлар.",
      "beach-tour": "Жағажай туры",
      "beach-desc": "Ең жақсы жағажайларда демалыңыз, кристалды таза су, ақ құм және тропикалық климат.",
      "cultural-tour": "Мәдени тур",
      "cultural-desc": "Тарих пен мәдениеттің үздік ескерткіштерін және мұражайларын ашыңыз.",
      "price-family": "От $600 / отбасы",
      "price-couple": "От $800 / жұп",
      "price-person": "От $500 / адам",
      "more-details": "Толығырақ",
    }
  };

  function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
      const key = element.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  languageSelector.addEventListener("change", function() {
    const selectedLanguage = languageSelector.value;
    changeLanguage(selectedLanguage);
  });

  changeLanguage("en");
});



$(document).ready(function() {
  $('#search').on('keyup', function() {
    var query = $(this).val().toLowerCase();
    $('.card').filter(function() {
      $(this).toggle($(this).find('h3').text().toLowerCase().indexOf(query) > -1);
    });
  });
});


$(document).ready(function() {
  var tourNames = ['Family Vacation', 'Romantic Tour', 'Beach Tour', 'Cultural Tour'];

  $('#search').on('keyup', function() {
    var query = $(this).val().toLowerCase();
    var suggestions = tourNames.filter(function(name) {
      return name.toLowerCase().includes(query);
    });

    $('#autocomplete-suggestions').empty().show();

    suggestions.forEach(function(suggestion) {
      $('#autocomplete-suggestions').append('<li>' + suggestion + '</li>');
    });

    if (suggestions.length === 0) {
      $('#autocomplete-suggestions').hide();
    }
  });

  $('#autocomplete-suggestions').on('click', 'li', function() {
    $('#search').val($(this).text());
    $('#autocomplete-suggestions').hide();
  });
});
