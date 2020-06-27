$(document).ready(function () {});

getTodos().then((res) => {
  renderTodos(res);
});

const getTodos = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "/api",
    })
      .then((allTodo) => {
        resolve(allTodo);
      })
      .catch((err) => reject(err));
  });
};

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

$(document).on("click", ".btnUpdate", () => {
  const todoID = $(this).attr("data-id");
  window.location.href = `/edit?id=${todoID}`;
});

$(document).on("click", ".btnDelete", () => {
  const todoID = $(this).attr("data-id");
  window.location.href = `/delete?id=${todoID}`;
});

$("#button-addon2").on("click", (e) => {
  e.preventDefault();
  const text = $(".form-control").val();
  $(".form-control").val("");
  $.ajax({
    type: "POST",
    url: "/api",
    data: { text: text },
  }).then((res) => {
    console.log(res.msg);
    // window.location.href = "/";
  });
});
