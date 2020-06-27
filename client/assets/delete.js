$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  $.ajax({
    type: "GET",
    url: `/api/find/${id}`,
  }).then((findres) => $(".card-text").text(findres[0].text));

  $("#cancelBtn").on("click", () => {
    window.location.href = "/";
  });

  $("#deleteBtn").on("click", () => {
    $.ajax({
      type: "DELETE",
      url: `/api/delete/${id}`,
    }).then((delres) => {
      console.log(delres);
      window.location.href = "/";
    });
  });
});
