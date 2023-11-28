import styles from "./page.module.css";

export const metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Our Services</h1>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <img
                className="img-fluid"
                src="./images/services.png"
                alt="Empower Ability Labs Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.servicesContainer} container`}>
        <div>
          <h2>Service 1</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo. Donec id elit non mi porta gravida at eget
            metus. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
        <div>
          <h2>Service 2</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo. Donec id elit non mi porta gravida at eget
            metus. Fusce dapibus, tellus ac cursus commodo.
          </p>
        </div>
      </div>
    </>
  );
}
