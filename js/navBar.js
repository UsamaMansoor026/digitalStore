let showNavPhone = false;

const setShowNavPhone = (status) => {
  showNavPhone = status;
  return showNavPhone;
};

/* Function to handle the rendering of NavBar for Phone */
const handleNavBar = () => {
  setShowNavPhone(!showNavPhone);
  if (!showNavPhone) {
    document.getElementById('navBarForPhone').style.display = 'block';
  } else {
    document.getElementById('navBarForPhone').style.display = 'none';
  }
};

/* Function that keep track of the window current Width */
function handleWindowResize() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    document.getElementById('navBarForPhone').style.display = 'none';
  }
}
/* Event that handle Width change of Window */
window.addEventListener('resize', handleWindowResize);
