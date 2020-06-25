$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("id"));
});
