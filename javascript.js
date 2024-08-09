addEventListener("DOMContentLoaded", () => {
  const showMenu = function showMenu(e) {
    const dropDownMenu = e.target.childNodes[1];
    console.log("show menu");
    console.log(dropDownMenu, dropDownMenu.classList);
    dropDownMenu.classList.remove("dropDownMenuHidden");
    dropDownMenu.classList.add("dropDownMenuVisible");
  };

  const hideMenu = function hideMenu(mouseEvent) {
    console.log("hide menu");
    console.log(mouseEvent);
    console.log(this);
    // const dropDownMenu = e.target.childNodes[1];
    // console.log(dropDownMenu);

    if (!this.contains(mouseEvent.relatedTarget)) {
      console.log(mouseEvent.relatedTarget);
      console.log(this.classList);
      this.firstElementChild.classList.remove("dropDownMenuVisible");
      this.firstElementChild.classList.add("dropDownMenuHidden");
    }
  };

  const showItem = function showItem(e) {
    const menuSubCat = document.querySelector(".menuSubCat");
    console.log(menuSubCat);
  };

  console.log("he");

  const menuCategories = document.querySelectorAll(".menuCategory");

  console.log(menuCategories);
  menuCategories.forEach((subCatMenu) => {
    subCatMenu.addEventListener("mouseenter", showMenu);
    subCatMenu.addEventListener("mouseout", hideMenu);
  });

  const menuItems = document.querySelectorAll(".menuItem");
  menuItems.forEach((e) => {
    e.addEventListener("mouseenter", showItem);
  });
});
