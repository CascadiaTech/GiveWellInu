// Get all the elements you want to show on scroll

export default async function ScrollpositionAnimation(){
const targets = document.querySelectorAll(".js-show-on-scroll");
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {

      // Add the fadeIn class:
      entry.target.classList.add("motion-safe:animate-fadeIn");
    } else {

      // Otherwise remove the fadein class
      entry.target.classList.remove("motion-safe:animate-fadeIn");
    }
  });
});
// Loop through each of the target
targets.forEach(function(target) {
  // Hide the element
  target.classList.add("opacity-0");

  // Add the element to the watcher
  observer.observe(target);
});

// Callback for IntersectionObserver

}