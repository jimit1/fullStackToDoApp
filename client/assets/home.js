$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/api",
  }).then((allTodo) => {
    console.log(allTodo);
    renderTodos(allTodo);
  });
});

const renderTodos = (arr) => {
  $(".card-container").html("");
  arr.forEach((todo) => {
    let msg = todo.completed ? "✅ Finished todo" : "❌ Need to complete";
    $(".card-container").prepend(
      ` <div class="card mb-2">
         <div class="card-body">
           <h6 class="card-subtitle mb-2 text-muted">
          ${msg}
            </h6>
        <p class="card-text">
          ${todo.text}
        </p>
        <div class="text-right">
          <button data-id=${todo.id} style="width: 100px;" class="btn btn-outline-success btnUpdate">
            Edit
          </button>
          <button data-id=${todo.id} style="width: 100px;" class="btn btn-outline-danger btnDelete">
            Delete
          </button>
        </div>
      </div>
    </div>`
    );
  });
};

$(document).on("click", ".btnUpdate", function () {
  const todoID = $(this).attr("data-id");
  window.location.href = `/edit?id=${todoID}`;
});

$(document).on("click", ".btnDelete", function () {
  const todoID = $(this).attr("data-id");
  window.location.href = `/delete?id=${todoID}`;
});
