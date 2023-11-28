export default function ScheduleCall() {
  return (
    <>
      <div className="jumbotron">
        <div class="container">
          <h1>Schedule a Call</h1>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="container message"></div>
      <div class="container form-container">
        <form class="form">
          <div class="form-group d-flex items-center">
            <label htmlFor="business-name" className="mr-2">
              Business Name
            </label>
            <input type="text" class="form-control" id="business-name" />
          </div>
          <div class="form-group d-flex items-center">
            <label htmlFor="phone-number" className="mr-2">
              Phone Number
            </label>
            <input type="text" className="form-control" id="phone-number" />
          </div>
          <div class="form-group d-flex items-center">
            <label htmlFor="email" className="mr-2">
              Email
            </label>
            <input type="text" className="form-control" id="email" />
          </div>
        </form>
      </div>
    </>
  );
}
