addEventListener("DOMContentLoaded", () => {
  var currentDotId = 0;
  const dots = document.querySelectorAll(".dot");
  dots[currentDotId].style.backgroundColor = "darkgray";

  console.log(dots);

  // const firstDot = document.getElementById(currentDotId);
  // firstDot.style.backgroundColor = "darkgray";

  currentDotId = dotListener(dots);

  arrowPreviousListener(currentDotId);
  arrowNextListener();

  // arrowPrevious.addEventListener("click", () => {
  //   console.log("previous" + currentDotId);
  //   frameTransform(currentDotId, dots);
  // });

  function dotListener(dots) {
    dots.forEach((dot) => {
      console.log(dots.length);
      dot.addEventListener("click", (dotEvent) => {
        clearDotColor();

        const newId = dotEvent.target.id;
        console.log("currentDotId" + newId);

        const frame = document.querySelector(".frame");
        let changeFactor = newId * -255;
        frame.style.transform = `translateX(${changeFactor}px)`;
        dot.style.backgroundColor = "darkgray";
        console.log(" currentDotId", currentDotId);

        currentDotId = newId;
        console.log("id: " + newId);

        console.log("currentDotId", currentDotId);
        // return currentDotId;
      });

      // const chooseDot = function () {
      //   alert("hi");
      // };
    });
    console.log(currentDotId);
  }

  function frameTransform(newId, dots) {
    console.log("frametransform called");
    const frame = document.querySelector(".frame");

    let changeVariable;

    console.log(newId);
    console.log(currentDotId);
    let newcurrentDotId;

    // Dealing with end dots
    if (newId < 0) {
      console.log("newId: " + newId + "" + "currentDotId: " + currentDotId);
      newcurrentDotId = 4;
      newId = 4;
    } else if (newId > 4) {
      console.log("newId: " + newId + "" + " currentDotId: " + currentDotId);
      newcurrentDotId = 0;
      newId = 0;
    } else {
      console.log(newId, currentDotId);
      newcurrentDotId = newId;
    }
    // clear color of dots to default light gray
    clearDotColor();

    // Change colour of selected dot
    dots[newcurrentDotId].style.backgroundColor = "darkGray";

    // Transform background Div to display img
    let changeFactor = newcurrentDotId * -255;
    frame.style.transform = `translateX(${changeFactor}px)`;

    // Updating current dot value
    currentDotId = newId;
    console.log(currentDotId, newId);
  }

  function arrowPreviousListener() {
    const arrowPrevious = document.querySelector(".previous");

    arrowPrevious.addEventListener("click", () => {
      console.log("previous" + currentDotId);

      let previoustcurrentDotId = Number(currentDotId) - 1;
      frameTransform(previoustcurrentDotId, dots);

      // frameTransform(currentDotId, dots);
    });
  }

  function arrowNextListener() {
    const arrowNext = document.querySelector(".next");
    console.log(arrowNext);

    arrowNext.addEventListener("click", () => {
      console.log(currentDotId);
      let newDotID = Number(currentDotId) + 1;

      console.log("newDotID- " + newDotID + " currentDotId-" + currentDotId);
      frameTransform(newDotID, dots);
    });
  }

  function clearDotColor() {
    dots.forEach((dot) => {
      dot.style.backgroundColor = "lightgray";
    });
  }
});
