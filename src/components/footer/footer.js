import React from "react";

const Footer = props => (
  <footer>
    <div className="icons">
      <a href="http://github.com/kuanhsuh">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="icon"
          viewBox="0 0 32 32"
        >
          <title>github</title>
          <path d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z" />
        </svg>
      </a>
      <a href="https://www.facebook.com/dannyhuang24">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="icon"
        >
          <title>facebook</title>
          <path
            fill="#3b5998"
            d="M30.235 0h-28.469c-0.975 0-1.765 0.791-1.765 1.765v28.469c0 0.976 0.791 1.765 1.765 1.765h15.325v-12.392h-4.172v-4.828h4.172v-3.567c0-4.132 2.525-6.38 6.212-6.38 1.767 0 3.285 0.129 3.728 0.188v4.32h-2.561c-2 0-2.389 0.961-2.389 2.361v3.081h4.779l-0.62 4.84h-4.159v12.376h8.153c0.977 0 1.767-0.789 1.767-1.765v-28.469c0-0.975-0.789-1.765-1.765-1.765z"
          />
        </svg>
      </a>
      <a href="https://www.youtube.com/user/kuanhsuh">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="icon mr0"
        >
          <title>youtube</title>
          <path
            fill="#f00"
            d="M31.327 8.273c-0.386-1.353-1.431-2.398-2.756-2.777l-0.028-0.007c-2.493-0.668-12.528-0.668-12.528-0.668s-10.009-0.013-12.528 0.668c-1.353 0.386-2.398 1.431-2.777 2.756l-0.007 0.028c-0.443 2.281-0.696 4.903-0.696 7.585 0 0.054 0 0.109 0 0.163l-0-0.008c-0 0.037-0 0.082-0 0.126 0 2.682 0.253 5.304 0.737 7.845l-0.041-0.26c0.386 1.353 1.431 2.398 2.756 2.777l0.028 0.007c2.491 0.669 12.528 0.669 12.528 0.669s10.008 0 12.528-0.669c1.353-0.386 2.398-1.431 2.777-2.756l0.007-0.028c0.425-2.233 0.668-4.803 0.668-7.429 0-0.099-0-0.198-0.001-0.297l0 0.015c0.001-0.092 0.001-0.201 0.001-0.31 0-2.626-0.243-5.196-0.708-7.687l0.040 0.258zM12.812 20.801v-9.591l8.352 4.803z"
          />
        </svg>
      </a>
      {/* Phase II */}
      {/* <a href="#">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="icon mr0"
        >
          <title>linkedin</title>
          <path
            fill="#0077b5"
            d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273v8.381zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752v15.269zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305h0.004z"
          />
        </svg>
      </a> */}
    </div>
    <p>Copyright © 2018 Danny Huang</p>
  </footer>
);

export default Footer;
