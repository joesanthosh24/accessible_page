import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div class="jumbotron">
        <div class="container">
          <h1 class="h2">Welcome to Empower Ability Labs!</h1>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo.
            </p>
          </div>
          <div class="col-md-4">
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo.
            </p>
          </div>
          <div class="col-md-4">
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo.
            </p>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}