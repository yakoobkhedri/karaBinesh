var company = new Swiper(".company", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  breakpoints: {
           400: {
        slidesPerView: 3,
    },
         576: {
        slidesPerView: 4,
    },
      768: {
        slidesPerView: 5,
    },
      992: {
        slidesPerView: 6,
    },
    1200: {
        slidesPerView: 7,
    }
  },
});
var banner = new Swiper(".banner", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  
  // Navigation arrows
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
  },
  
  // Update active number and button states
  on: {
    init: function () {
      updateActiveNumber(this);
      updateButtonStates(this);
    },
    slideChange: function () {
      updateActiveNumber(this);
      updateButtonStates(this);
    }
  }
});

// Function to update active number
function updateActiveNumber(swiper) {
  // Remove active class from all numbers
  const numbers = document.querySelectorAll('.numbers div');
  numbers.forEach(number => {
    number.classList.remove('active');
  });
  
  // Add active class to current slide number
  // Since loop is true, we need to get the real index
  const realIndex = swiper.realIndex;
  const activeNumber = document.querySelector(`.numbers div[data-slide="${realIndex}"]`);
  if (activeNumber) {
    activeNumber.classList.add('active');
  }
}

// Function to update button states (optional - for visual feedback)
function updateButtonStates(swiper) {
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');
  
  // You can add/remove classes for visual states if needed
  // For example, disable buttons at start/end (though loop makes this less relevant)
  
  // Remove any existing state classes
  prevBtn.classList.remove('active');
  nextBtn.classList.remove('active');
  
  // Add active state to both buttons for visual feedback on hover
  // Or implement specific logic based on your needs
}

// Optional: Add click event to numbers for direct navigation
document.querySelectorAll('.numbers div').forEach((number, index) => {
  number.addEventListener('click', function() {
    banner.slideToLoop(index);
  });
});

var banner2 = new Swiper(".banner2", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  
  // Navigation arrows
  navigation: {
    nextEl: '.nextBtn2',
    prevEl: '.prevBtn2',
  },
  
  // Update active number and button states
  on: {
    init: function () {
      updateActiveNumber2(this);
      updateButtonStates2(this);
    },
    slideChange: function () {
      updateActiveNumber2(this);
      updateButtonStates2(this);
    }
  }
});

// Function to update active number
function updateActiveNumber2(swiper) {
  // Remove active class from all numbers
  const numbers2 = document.querySelectorAll('.numbers2 div');
  numbers2.forEach(number => {
    number.classList.remove('active');
  });
  
  // Add active class to current slide number
  // Since loop is true, we need to get the real index
  const realIndex = swiper.realIndex;
  const activeNumber2 = document.querySelector(`.numbers2 div[data-number="${realIndex}"]`);
  if (activeNumber2) {
    activeNumber2.classList.add('active');
  }
}

// Function to update button states (optional - for visual feedback)
function updateButtonStates2(swiper) {
  const prevBtn2 = document.querySelector('.prevBtn2');
  const nextBtn2 = document.querySelector('.nextBtn2');
  
  // You can add/remove classes for visual states if needed
  // For example, disable buttons at start/end (though loop makes this less relevant)
  
  // Remove any existing state classes
  prevBtn2.classList.remove('active');
  nextBtn2.classList.remove('active');
  
  // Add active state to both buttons for visual feedback on hover
  // Or implement specific logic based on your needs
}

// Optional: Add click event to numbers for direct navigation
document.querySelectorAll('.numbers2 div').forEach((number, index) => {
  number.addEventListener('click', function() {
    banner2.slideToLoop(index);
  });
});

var banner3 = new Swiper(".banner3", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  
  // Navigation arrows
  navigation: {
    nextEl: '.nextBtn3',
    prevEl: '.prevBtn3',
  },
  
  // Update active number and button states
  on: {
    init: function () {
      updateActiveNumber3(this);
      updateButtonStates3(this);
    },
    slideChange: function () {
      updateActiveNumber3(this);
      updateButtonStates3(this);
    }
  }
});

// Function to update active number
function updateActiveNumber3(swiper) {
  // Remove active class from all numbers
  const numbers3 = document.querySelectorAll('.numbers3 div');
  numbers3.forEach(number => {
    number.classList.remove('active');
  });
  
  // Add active class to current slide number
  // Since loop is true, we need to get the real index
  const realIndex = swiper.realIndex;
  const activeNumber3 = document.querySelector(`.numbers3 div[data-number2="${realIndex}"]`);
  if (activeNumber3) {
    activeNumber3.classList.add('active');
  }
}

// Function to update button states (optional - for visual feedback)
function updateButtonStates3(swiper) {
  const prevBtn3 = document.querySelector('.prevBtn3');
  const nextBtn3 = document.querySelector('.nextBtn3');
  
  // You can add/remove classes for visual states if needed
  // For example, disable buttons at start/end (though loop makes this less relevant)
  
  // Remove any existing state classes
  prevBtn3.classList.remove('active');
  nextBtn3.classList.remove('active');
  
  // Add active state to both buttons for visual feedback on hover
  // Or implement specific logic based on your needs
}

// Optional: Add click event to numbers for direct navigation
document.querySelectorAll('.numbers3 div').forEach((number, index) => {
  number.addEventListener('click', function() {
    banner3.slideToLoop(index);
  });
});

var banner4 = new Swiper(".banner4", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
});

// social media
// عناصر اصلی
let overlay2 = document.getElementById('overlay2');

// عناصر آیکون‌ها
let insta = document.getElementById('insta');
let linkedin = document.getElementById('linkedin');
let youtube = document.getElementById('youtube');
let twiter = document.getElementById('twiter');

// عناصر مودال‌ها
let instaBox = document.getElementById('instaBox');
let LinkdinBox = document.getElementById('LinkdinBox');
let YoutubeBox = document.getElementById('YoutubeBox');
let TwiterBox = document.getElementById('TwiterBox');

// آدرس‌های مقصد
const socialLinks = {
    insta: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://www.youtube.com',
    twiter: 'https://www.twitter.com'
};

// تابع برای مخفی کردن همه مودال‌ها
function hideAllModals() {
    instaBox.classList.remove('active');
    LinkdinBox.classList.remove('active');
    YoutubeBox.classList.remove('active');
    TwiterBox.classList.remove('active');
}

// تابع برای نمایش مودال و هدایت پس از 5 ثانیه
function showModalAndRedirect(modalElement, redirectUrl) {
    // مخفی کردن همه مودال‌های دیگر
    hideAllModals();
    
    // نمایش مودال مورد نظر
    modalElement.classList.add('active');
    overlay2.classList.add('active');
    
    // هدایت پس از 5 ثانیه
    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 5000);
}

// اضافه کردن event listener برای هر آیکون
insta.addEventListener('click', function() {
    showModalAndRedirect(instaBox, socialLinks.insta);
});

linkedin.addEventListener('click', function() {
    showModalAndRedirect(LinkdinBox, socialLinks.linkedin);
});

youtube.addEventListener('click', function() {
    showModalAndRedirect(YoutubeBox, socialLinks.youtube);
});

twiter.addEventListener('click', function() {
    showModalAndRedirect(TwiterBox, socialLinks.twiter);
});

// بستن مودال با کلیک روی overlay (اختیاری)
overlay2.addEventListener('click', function(e) {
    if (e.target === overlay2) {
        overlay2.classList.remove('active');
        hideAllModals();
    }
});

  // aos
AOS.init();