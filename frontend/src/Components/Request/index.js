import RequestPost from "../RequestPost";

function Request({ title, body, category, date, room, userId }) {
  return (
    <div>   
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{body}
    <h6>on {date}</h6>
    <h6>From room {room}</h6>
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    </div>
  );
}

export default Request;
