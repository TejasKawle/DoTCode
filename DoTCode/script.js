// When "Get Started" is clicked, show course content
document.getElementById("getStartedBtn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  displayCourseCards(); // Show course content immediately
});

document.querySelector(".course").addEventListener("click",(e)=>{
  e.preventDefault();
  displayCourseCards();
})

// Function to Display Course Cards
function displayCourseCards() {
  const courseGrid = document.getElementById("courseGrid");

  // Sample Course Data
  const courses = [
    {
      title: "C Programming",
      description: "Master the basics of C programming and build a strong foundation.",
      image: "C-lang.jpg",
      link: "c-programming.html",
    },
    {
      title: "JavaScript",
      description: "Learn to create dynamic and interactive web applications.",
      image: "js.jpg",
      link: "#",
    },
    {
      title: "Web Development",
      description: "Become a full-stack developer with HTML, CSS, and JavaScript.",
      image: "soon2.jpg",
      link: "#",
    },
    {
      title: "Python",
      description: "Explore Python for data science, automation, and more.",
      image: "soon2.jpg",
      link: "#",
    },
  ];

  // Clear Existing Content
  courseGrid.innerHTML = "";

  // Add Course Cards to the Grid
  courses.forEach((course) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <a href="${course.link}">
        <img src="${course.image}" alt="${course.title}">
        <button>${course.title}</button>
        <p>${course.description}</p>
      </a>
    `;
    courseGrid.appendChild(card);
  });

  // Scroll to the Courses Section
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}


function openMenu() {
  document.getElementById("overlay").style.display = "flex";
}

function closeMenu() {
  document.getElementById("overlay").style.display = "none";
}


const form = document.querySelector('form');
  const successMessage = document.getElementById('thank-you-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    form.reset(); // Reset the form after submission
    successMessage.style.display = 'block'; // Show the success message
  });