document.querySelectorAll(".select").forEach((e) => {
  const list = e.querySelector(".select-list"),
    items = e.querySelectorAll(".select-list-item"),
    input = e.querySelector(".select-input"),
    select = e.querySelector(".select-block"),
    back = e.querySelector(".select-back");
  let index = 0;

  items[index].classList.add("active");
  select.innerHTML = items[index].textContent;

  select.addEventListener("click", () => {
    list.classList.toggle("block");
    back.classList.toggle("block");
  });

  select.addEventListener("keydown", function (event) {
    if (list.classList.contains("block")) {
      switch (event.code) {
        case "ArrowUp":
          move("up");
          select.innerHTML = items[index].textContent;
          input.value = items[index].value;
          break;
        case "ArrowDown":
          move("down");
          select.innerHTML = items[index].textContent;
          input.value = items[index].value;
          break;
        case "Enter":
          list.classList.toggle("block");
          back.classList.toggle("block");
          break;
        case "Escape":
          list.classList.toggle("block");
          back.classList.toggle("block");
          break;
        case "Tab":
          list.classList.toggle("block");
          back.classList.toggle("block");
          break;
      }
    } else if (event.code == "Enter" || event.code == "Space") {
      list.classList.toggle("block");
      back.classList.toggle("block");
    }
  });

  back.addEventListener("click", () => {
    list.classList.toggle("block");
    back.classList.toggle("block");
  });

  items.forEach((el, i) => {
    el.addEventListener("click", () => {
      select.innerHTML = el.textContent;
      input.value = el.value;
      list.classList.toggle("block");
      back.classList.toggle("block");
      items.forEach((d) => {
        d.classList.remove("active");
      });
      el.classList.add('active');
      index = i;
    });
  });

  function move(dir) {
    items.forEach((d) => {
      d.classList.remove("active");
    });
    !items[index] || !items[index].classList.contains("active");
    switch (dir) {
      case "up":
        index = index <= 0 ? items.length - 1 : --index;
        break;
      case "down":
        index = index == items.length - 1 ? 0 : ++index;
        break;
      default:
        throw Error("WTF?");
    }
    items[index].classList.add("active");
  }
});
