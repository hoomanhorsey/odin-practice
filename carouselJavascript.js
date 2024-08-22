addEventListener("DOMContentLoaded", () => {
  var currentDotId = 0;
  const dots = document.querySelectorAll(".dot");
  dots[currentDotId].style.backgroundColor = "darkgray";

  arrowPreviousListener(currentDotId);
  arrowNextListener();

  currentDotId = dotListener(dots);

  function dotListener(dots) {
    dots.forEach((dot) => {
      dot.addEventListener("click", (dotEvent) => {
        clearDotColor();

        const newId = dotEvent.target.id;

        console.log(newId);

        const frame = document.querySelector(".frame");
        let changeFactor = newId * -265;
        frame.style.transform = `translateX(${changeFactor}px)`;
        dot.style.backgroundColor = "darkgray";
        currentDotId = newId;
      });
    });
  }

  function frameTransform(newId, dots) {
    const frame = document.querySelector(".frame");

    let newcurrentDotId;

    // Dealing with end dots
    if (newId < 0) {
      newcurrentDotId = 4;
      newId = 4;
    } else if (newId > 4) {
      newcurrentDotId = 0;
      newId = 0;
    } else {
      newcurrentDotId = newId;
    }
    // clear color of dots to default light gray
    clearDotColor();

    // Change colour of selected dot
    dots[newcurrentDotId].style.backgroundColor = "darkGray";

    // Transform background Div to display img
    let changeFactor = newcurrentDotId * -265;
    frame.style.transform = `translateX(${changeFactor}px)`;

    // Updating current dot value
    currentDotId = newId;
  }

  function arrowPreviousListener() {
    const arrowPrevious = document.querySelector(".previous");

    arrowPrevious.addEventListener("click", () => {
      if (currentDotId === undefined) {
        currentDotId = 0;
      }
      let previoustcurrentDotId = Number(currentDotId) - 1;
      frameTransform(previoustcurrentDotId, dots);
    });
  }

  function arrowNextListener() {
    const arrowNext = document.querySelector(".next");
    console.log(arrowNext);

    arrowNext.addEventListener("click", () => {
      if (currentDotId === undefined) {
        currentDotId = 0;
      }
      let newDotID = Number(currentDotId) + 1;
      frameTransform(newDotID, dots);
    });
  }

  function clearDotColor() {
    dots.forEach((dot) => {
      dot.style.backgroundColor = "lightgray";
    });
  }
});
