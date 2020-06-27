$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  $.ajax({
    type: "GET",
    url: `/api/find/${id}`,
  }).then((findres) => {
    $(".form-control").val(findres[0].text);
    findres[0].completed
      ? $("#isCompleted").prop("checked", true)
      : $("#isCompleted").prop("checked", false);
  });

  $("#cancelBtn").on("click", () => {
    window.location.href = "/";
  });

  $("#editBtn").on("click", () => {
    $.ajax({
      type: "PATCH",
      url: `/api`,
      data: {
        todoText: $(".form-control").val(),
        todoId: id,
        todoCompleted: $("#isCompleted").prop("checked"),
      },
    }).then(() => (window.location.href = "/"));
  });
});
