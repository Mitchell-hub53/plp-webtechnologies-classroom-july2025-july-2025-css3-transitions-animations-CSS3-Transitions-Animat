function toggleBox(id) {
  let target = document.getElementById(id);

  if (target.classList.contains("run")) {
    target.classList.remove("run");
    return "Stopped animation";
  } else {
    target.classList.add("run");
    return "Started animation";
  }
}

