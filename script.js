// script.js
// Loading Screen
const loadingScreen = document.getElementById('loadingScreen');

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1500);
});

// Cursor Effects
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  
  setTimeout(() => {
    cursorFollower.style.left = `${e.clientX}px`;
    cursorFollower.style.top = `${e.clientY}px`;
  }, 100);
});

document.querySelectorAll('a, button, .project-card, .blog-card, .tab-button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(2.5)';
    cursorFollower.style.opacity = '0.2';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.opacity = '1';
  });
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = 'auto';
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
  });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Language Toggle
const languageToggle = document.getElementById('languageToggle');
const languageButtons = languageToggle.querySelectorAll('span');

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    languageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // In a real implementation, you would change the language here
  });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Typing Effect
const typingText = document.getElementById('typingText');
const words = ['web applications', 'AI solutions', 'mobile apps', 'design systems', 'scalable APIs'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentWord.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }
}

// Start typing effect after a delay
setTimeout(type, 2000);

// Counter Animation
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// Animate stats when section is in view
const aboutSection = document.getElementById('about');
const projectsCompleted = document.getElementById('projectsCompleted');
const happyClients = document.getElementById('happyClients');
const coffeeCups = document.getElementById('coffeeCups');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(projectsCompleted, 50);
      animateCounter(happyClients, 42);
      animateCounter(coffeeCups, 1000);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Experience Tabs
function setupExperienceTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Activate first tab by default
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
}

// Projects Filter
function setupProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active filter button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Testimonials Slider
function setupTestimonialsSlider() {
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const sliderPrev = document.getElementById('sliderPrev');
  const sliderNext = document.getElementById('sliderNext');
  const sliderDots = document.getElementById('sliderDots');

  let currentSlide = 0;
  const slideCount = document.querySelectorAll('.testimonial-card').length;

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
  }

  function updateSlider() {
    testimonialsTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
  }

  sliderNext.addEventListener('click', nextSlide);
  sliderPrev.addEventListener('click', prevSlide);

  // Auto slide
  let slideInterval = setInterval(nextSlide, 5000);

  testimonialsSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  testimonialsSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
}

// Skills Radar Chart
function createSkillsRadarChart() {
  const ctx = document.getElementById('skillsRadarChart').getContext('2d');
  const skillsRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['JavaScript', 'React', 'Node.js', 'Python', 'UI/UX', 'DevOps'],
      datasets: [
        {
          label: 'Frontend',
          data: [90, 95, 70, 60, 85, 65],
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
          borderColor: 'rgba(124, 58, 237, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(124, 58, 237, 1)',
          pointRadius: 4
        },
        {
          label: 'Backend',
          data: [85, 70, 95, 80, 60, 75],
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          borderColor: 'rgba(245, 158, 11, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(245, 158, 11, 1)',
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: {
            color: 'rgba(148, 163, 184, 0.2)'
          },
          grid: {
            color: 'rgba(148, 163, 184, 0.2)'
          },
          pointLabels: {
            color: 'var(--text-primary)',
            font: {
              family: 'var(--font-mono)',
              size: 12
            }
          },
          ticks: {
            display: false,
            beginAtZero: true,
            max: 100
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      },
      elements: {
        line: {
          tension: 0.1
        }
      }
    }
  });

  // Create legend
  const legend = document.getElementById('skillsLegend');
  const legendItems = [
    { color: 'rgba(124, 58, 237, 1)', label: 'Frontend' },
    { color: 'rgba(245, 158, 11, 1)', label: 'Backend' }
  ];

  legendItems.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.innerHTML = `
      <span class="legend-color" style="background-color: ${item.color}"></span>
      <span>${item.label}</span>
    `;
    legend.appendChild(legendItem);
  });
}

// Initialize skills radar chart when skills section is in view
const skillsSection = document.getElementById('skills');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createSkillsRadarChart();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

skillsObserver.observe(skillsSection);

// Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simulate form submission
  formMessage.textContent = 'Your message has been sent successfully! I will get back to you soon.';
  formMessage.classList.add('success');
  formMessage.classList.remove('error');
  formMessage.style.display = 'block';
  
  // Reset form
  contactForm.reset();
  
  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.style.display = 'none';
  }, 5000);
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#7c3aed"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#7c3aed",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// Animation on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.section-title, .about-content, .project-card, .experience-container, .contact-form, .hero-text, .hero-image, .stat-item, .testimonial-card, .blog-card, .skills-container');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animation
document.querySelectorAll('.section-title, .about-content, .project-card, .experience-container, .contact-form, .hero-text, .hero-image, .stat-item, .testimonial-card, .blog-card, .skills-container').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

// Stagger animations for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// Stagger animations for stats
document.querySelectorAll('.stat-item').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.15}s`;
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
  animateOnScroll();
  
  // Animate hero elements sequentially
  const heroElements = document.querySelectorAll('.greeting, .name, .subtitle, .description, .cta-buttons');
  heroElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${0.3 + (index * 0.15)}s`;
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
});

// Populate data from data.js
document.addEventListener('DOMContentLoaded', () => {
  // Set section numbers
  document.querySelectorAll('.section-title h2').forEach((title, index) => {
    title.setAttribute('data-number', `0${index + 1}.`);
  });

  // Populate hero social links
  const heroSocialLinks = document.getElementById('heroSocialLinks');
  data.socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.innerHTML = `<i class="${link.icon}"></i>`;
    socialLink.className = 'hero-social-link';
    heroSocialLinks.appendChild(socialLink);
  });

  // Populate mobile menu social links
  const mobileSocialLinks = document.getElementById('mobileSocialLinks');
  data.socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.innerHTML = `<i class="${link.icon}"></i>`;
    mobileSocialLinks.appendChild(socialLink);
  });

  // Populate footer social links
  const footerSocialLinks = document.getElementById('footerSocialLinks');
  data.socialLinks.forEach(link => {
    const li = document.createElement('li');
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.innerHTML = `<i class="${link.icon}"></i> ${link.icon.split('-')[1]}`;
    li.appendChild(socialLink);
    footerSocialLinks.appendChild(li);
  });

  // Populate contact social links
  const contactSocialLinks = document.getElementById('contactSocialLinks');
  data.socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.target = '_blank';
    socialLink.innerHTML = `<i class="${link.icon}"></i>`;
    contactSocialLinks.appendChild(socialLink);
  });

  // Populate skills
  const skillsCategories = document.getElementById('skillsCategories');
  data.skills.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skills-category';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.category;
    categoryDiv.appendChild(categoryTitle);
    
    const skillsList = document.createElement('div');
    skillsList.className = 'skills-list';
    
    category.skills.forEach(skill => {
      const skillTag = document.createElement('div');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      skillsList.appendChild(skillTag);
    });
    
    categoryDiv.appendChild(skillsList);
    skillsCategories.appendChild(categoryDiv);
  });

  // Populate experience tabs and content
  const experienceTabs = document.getElementById('experienceTabs');
  const tabContents = document.getElementById('tabContents');
  
  data.experience.forEach((exp, index) => {
    // Create tab button
    const tabButton = document.createElement('button');
    tabButton.className = `tab-button ${index === 0 ? 'active' : ''}`;
    tabButton.setAttribute('data-tab', `tab${index + 1}`);
    tabButton.textContent = exp.company;
    experienceTabs.appendChild(tabButton);
    
    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.className = `tab-content ${index === 0 ? 'active' : ''}`;
    tabContent.id = `tab${index + 1}`;
    
    const jobDuration = document.createElement('p');
    jobDuration.className = 'job-duration';
    jobDuration.textContent = exp.duration;
    
    const jobDescription = document.createElement('ul');
    jobDescription.className = 'job-description';
    
    exp.responsibilities.forEach(resp => {
      const li = document.createElement('li');
      li.textContent = resp;
      jobDescription.appendChild(li);
    });
    
    tabContent.innerHTML = `
      <h3 class="job-title">${exp.position} <span class="company">@ ${exp.company}</span></h3>
    `;
    tabContent.appendChild(jobDuration);
    tabContent.appendChild(jobDescription);
    
    tabContents.appendChild(tabContent);
  });

  // Setup experience tabs after populating
  setupExperienceTabs();

  // Populate projects
  const projectsGrid = document.getElementById('projectsGrid');
  data.projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-category', project.categories.join(' '));
    
    const projectHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-tech">
            ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.links.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> ${project.links.demoText}</a>
          <a href="${project.links.code}" class="project-link" target="_blank"><i class="fab fa-github"></i> Source Code</a>
        </div>
      </div>
      ${project.featured ? '<div class="project-featured">Featured</div>' : ''}
    `;
    
    projectCard.innerHTML = projectHTML;
    projectsGrid.appendChild(projectCard);
  });

  // Setup projects filter after populating
  setupProjectsFilter();

  // Populate testimonials
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  data.testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <div class="testimonial-content">
        <p>${testimonial.content}</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">
          <img src="${testimonial.author.avatar}" alt="${testimonial.author.name}">
        </div>
        <div class="author-info">
          <h4>${testimonial.author.name}</h4>
          <p>${testimonial.author.position}</p>
        </div>
      </div>
    `;
    testimonialsTrack.appendChild(testimonialCard);
  });

  // Setup testimonials slider after populating
  setupTestimonialsSlider();

  // Populate blog posts
  const blogGrid = document.getElementById('blogGrid');
  data.blogPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
      <div class="blog-image">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="blog-content">
        <p class="blog-date">${post.date}</p>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="${post.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    blogGrid.appendChild(blogCard);
  });
});