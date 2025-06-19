document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".headline span");
  const imageGroups = document.querySelectorAll(".image-group");

  words.forEach(word => {
    word.addEventListener("click", () => {
      const type = word.getAttribute("data-type");

      imageGroups.forEach(group => {
        group.classList.remove("active", "animate");
        if (group.getAttribute("data-type") === type) {
          group.classList.add("active");
          setTimeout(() => {
            group.classList.add("animate");
          }, 50);
        }
      });
    });
  });
});
