let simple = true;

function changeColorButton() {
  if (simple === true) {
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Cyan", "Magenta", "Lime", "Teal", "Olive", "Maroon", "Navy", "Silver", "Gray", "Black", "White", "Fuchsia", "Aqua"];

    let max = colors.length - 1,
      min = 0;
    let index;

    do {
      index = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (colors[index] === document.getElementById("color-name").innerHTML);

    console.log(
      (document.getElementsByTagName("body")[0].style.backgroundColor =
        colors[index])
    );

    document.getElementById("color-name").innerHTML = colors[index];
  } else {
    let max = 16777215,
      min = 0;

    let color =
      "#" + (Math.floor(Math.random() * (max - min + 1)) + min).toString(16);

    console.log(
      (document.getElementsByTagName("body")[0].style.backgroundColor = color)
    );

    document.getElementById("color-name").innerHTML = color;
  }
}

document.getElementById("toggleSimple").addEventListener("click", () => {
  simple = true;
  changeColorButton();
});

document.getElementById("toggleHex").addEventListener("click", () => {
  simple = false;
  changeColorButton();
});

document
  .getElementById("changeColorButton")
  .addEventListener("click", changeColorButton);
