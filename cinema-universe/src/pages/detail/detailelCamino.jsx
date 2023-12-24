import background from "../../assets/img/detailFilm/background.png";
import user from "../../assets/img/detailFilm/user.png";
import banner from "../../assets/img/detailFilm/banner/El Camino.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function DetailElCamino({ favoritFilm, setFavoritFilm }) {
  const dataFilm = {
    id: 2,
    title: "El Camino",
    poster: banner,
    rating: 4.5,
    isFavorite: false
  };

  function handleFavoriteFilm() {
    const payload = {
      id: dataFilm.id,
      title: dataFilm.title,
      poster: dataFilm.poster,
      rating: dataFilm.rating,
      isFavorite: !dataFilm.isFavorite
    };

    // Check if the film is already in favorites
    const isFilmInFavorites = favoritFilm.some(item => item.id === payload.id);

    if (isFilmInFavorites) {
      // If already in favorites, remove it
      const newFavorites = favoritFilm.filter(item => item.id !== payload.id);
      setFavoritFilm(newFavorites);
    } else {
      // If not in favorites, add it
      setFavoritFilm([...favoritFilm, payload]);
    }
  }

  return (
    <div>
      {/* Bagian Hero */}
      <div
        className="max-w-auto h-[37.5rem] mx-auto bg-no-repeat"
        style={{
          backgroundImage: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Navigasi */}
        <nav className="flex flex-row max-w-6xl mx-auto justify-between items-center translate-y-3">
          <svg
            width="180"
            height="44"
            viewBox="0 0 262 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M91.098 20.5469H87.9872C87.9304 20.1444 87.8144 19.7869 87.6392 19.4744C87.464 19.1572 87.2391 18.8873 86.9645 18.6648C86.6899 18.4422 86.3726 18.2718 86.0128 18.1534C85.6577 18.035 85.2718 17.9759 84.8551 17.9759C84.1023 17.9759 83.4465 18.1629 82.8878 18.5369C82.3291 18.9062 81.8958 19.446 81.5881 20.1562C81.2803 20.8617 81.1264 21.7187 81.1264 22.7273C81.1264 23.7642 81.2803 24.6354 81.5881 25.3409C81.9006 26.0464 82.3362 26.5791 82.8949 26.9389C83.4536 27.2988 84.0999 27.4787 84.8338 27.4787C85.2457 27.4787 85.6269 27.4242 85.9773 27.3153C86.3324 27.2064 86.6473 27.0478 86.9219 26.8395C87.1965 26.6264 87.4238 26.3684 87.6037 26.0653C87.7884 25.7623 87.9162 25.4167 87.9872 25.0284L91.098 25.0426C91.0175 25.7102 90.8163 26.3542 90.4943 26.9744C90.1771 27.59 89.7486 28.1416 89.2088 28.6293C88.6738 29.1122 88.0346 29.4957 87.2912 29.7798C86.5526 30.0592 85.7169 30.1989 84.7841 30.1989C83.4867 30.1989 82.3267 29.9053 81.304 29.3182C80.286 28.7311 79.4811 27.8812 78.8892 26.7685C78.3021 25.6558 78.0085 24.3087 78.0085 22.7273C78.0085 21.1411 78.3068 19.7917 78.9034 18.679C79.5 17.5663 80.3097 16.7187 81.3324 16.1364C82.3551 15.5492 83.5057 15.2557 84.7841 15.2557C85.6269 15.2557 86.4081 15.3741 87.1278 15.6108C87.8523 15.8475 88.4938 16.1932 89.0526 16.6477C89.6113 17.0975 90.0658 17.6491 90.4162 18.3026C90.7713 18.956 90.9986 19.7041 91.098 20.5469ZM96.3786 15.4545V30H93.3033V15.4545H96.3786ZM111.075 15.4545V30H108.419L102.091 20.8452H101.984V30H98.9087V15.4545H101.608L107.886 24.6023H108.014V15.4545H111.075ZM113.616 30V15.4545H123.417V17.9901H116.691V21.456H122.913V23.9915H116.691V27.4645H123.445V30H113.616ZM125.862 15.4545H129.654L133.66 25.2273H133.831L137.836 15.4545H141.629V30H138.646V20.5327H138.525L134.761 29.929H132.73L128.966 20.4972H128.845V30H125.862V15.4545ZM146.67 30H143.374L148.396 15.4545H152.359L157.373 30H154.077L150.434 18.7784H150.32L146.67 30ZM146.464 24.2827H154.248V26.6832H146.464V24.2827ZM172.737 15.4545H175.812V24.9006C175.812 25.9612 175.559 26.8892 175.052 27.6847C174.55 28.4801 173.847 29.1004 172.943 29.5455C172.038 29.9858 170.985 30.206 169.782 30.206C168.575 30.206 167.519 29.9858 166.615 29.5455C165.71 29.1004 165.007 28.4801 164.505 27.6847C164.003 26.8892 163.752 25.9612 163.752 24.9006V15.4545H166.828V24.6378C166.828 25.1918 166.949 25.6842 167.19 26.1151C167.436 26.5459 167.782 26.8845 168.227 27.1307C168.672 27.3769 169.19 27.5 169.782 27.5C170.379 27.5 170.897 27.3769 171.338 27.1307C171.783 26.8845 172.126 26.5459 172.368 26.1151C172.614 25.6842 172.737 25.1918 172.737 24.6378V15.4545ZM190.509 15.4545V30H187.852L181.524 20.8452H181.418V30H178.342V15.4545H181.041L187.32 24.6023H187.447V15.4545H190.509ZM196.125 15.4545V30H193.049V15.4545H196.125ZM201.283 15.4545L204.798 26.5057H204.933L208.456 15.4545H211.865L206.851 30H202.888L197.866 15.4545H201.283ZM213.616 30V15.4545H223.417V17.9901H216.691V21.456H222.913V23.9915H216.691V27.4645H223.445V30H213.616ZM225.862 30V15.4545H231.6C232.699 15.4545 233.636 15.651 234.413 16.044C235.194 16.4323 235.788 16.9839 236.196 17.6989C236.608 18.4091 236.814 19.2448 236.814 20.206C236.814 21.1719 236.605 22.0028 236.189 22.6989C235.772 23.3902 235.168 23.9205 234.377 24.2898C233.592 24.6591 232.64 24.8438 231.522 24.8438H227.68V22.3722H231.025C231.612 22.3722 232.1 22.2917 232.488 22.1307C232.877 21.9697 233.165 21.7282 233.355 21.4062C233.549 21.0843 233.646 20.6842 233.646 20.206C233.646 19.723 233.549 19.3158 233.355 18.9844C233.165 18.6529 232.874 18.402 232.481 18.2315C232.093 18.0563 231.603 17.9688 231.011 17.9688H228.937V30H225.862ZM233.717 23.3807L237.332 30H233.937L230.4 23.3807H233.717ZM246.877 19.6378C246.821 19.0649 246.577 18.6198 246.146 18.3026C245.715 17.9853 245.13 17.8267 244.392 17.8267C243.89 17.8267 243.466 17.8977 243.12 18.0398C242.775 18.1771 242.51 18.3688 242.325 18.6151C242.145 18.8613 242.055 19.1406 242.055 19.4531C242.046 19.7135 242.1 19.9408 242.218 20.1349C242.342 20.3291 242.51 20.4972 242.723 20.6392C242.936 20.7765 243.182 20.8973 243.461 21.0014C243.741 21.1009 244.039 21.1861 244.356 21.2571L245.663 21.5696C246.297 21.7116 246.88 21.901 247.41 22.1378C247.94 22.3745 248.4 22.6657 248.788 23.0114C249.176 23.357 249.477 23.7642 249.69 24.233C249.908 24.7017 250.019 25.2391 250.024 25.8452C250.019 26.7353 249.792 27.5071 249.342 28.1605C248.897 28.8092 248.253 29.3134 247.41 29.6733C246.572 30.0284 245.561 30.206 244.377 30.206C243.203 30.206 242.181 30.026 241.309 29.6662C240.443 29.3063 239.766 28.7737 239.278 28.0682C238.795 27.358 238.542 26.4796 238.518 25.4332H241.494C241.527 25.9209 241.667 26.3281 241.913 26.6548C242.164 26.9768 242.498 27.2206 242.914 27.3864C243.336 27.5473 243.812 27.6278 244.342 27.6278C244.863 27.6278 245.315 27.5521 245.699 27.4006C246.087 27.2491 246.387 27.0384 246.6 26.7685C246.814 26.4986 246.92 26.1884 246.92 25.8381C246.92 25.5114 246.823 25.2367 246.629 25.0142C246.44 24.7917 246.16 24.6023 245.791 24.446C245.426 24.2898 244.979 24.1477 244.449 24.0199L242.865 23.6222C241.638 23.3239 240.67 22.8575 239.96 22.223C239.25 21.5885 238.897 20.7339 238.902 19.6591C238.897 18.7784 239.131 18.009 239.605 17.3509C240.083 16.6927 240.739 16.179 241.572 15.8097C242.405 15.4403 243.352 15.2557 244.413 15.2557C245.493 15.2557 246.435 15.4403 247.24 15.8097C248.049 16.179 248.679 16.6927 249.129 17.3509C249.579 18.009 249.811 18.7713 249.825 19.6378H246.877ZM252.092 30V15.4545H261.893V17.9901H255.168V21.456H261.389V23.9915H255.168V27.4645H261.922V30H252.092Z"
              fill="white"
            />
            <rect
              x="1.5"
              y="1.5"
              width="64"
              height="41"
              stroke="#FF0016"
              stroke-width="3"
            />
            <g filter="url(#filter0_dd_0_1)">
              <path
                d="M32.3764 17.9844H26.777C26.6747 17.2599 26.4659 16.6165 26.1506 16.054C25.8352 15.483 25.4304 14.9972 24.9361 14.5966C24.4418 14.196 23.8707 13.8892 23.223 13.6761C22.5838 13.4631 21.8892 13.3565 21.1392 13.3565C19.7841 13.3565 18.6037 13.6932 17.598 14.3665C16.5923 15.0312 15.8125 16.0028 15.2585 17.2812C14.7045 18.5511 14.4276 20.0937 14.4276 21.9091C14.4276 23.7756 14.7045 25.3437 15.2585 26.6136C15.821 27.8835 16.6051 28.8423 17.6108 29.4901C18.6165 30.1378 19.7798 30.4616 21.1009 30.4616C21.8423 30.4616 22.5284 30.3636 23.1591 30.1676C23.7983 29.9716 24.3651 29.6861 24.8594 29.3111C25.3537 28.9276 25.7628 28.4631 26.0866 27.9176C26.419 27.3722 26.6491 26.75 26.777 26.0511L32.3764 26.0767C32.2315 27.2784 31.8693 28.4375 31.2898 29.554C30.7188 30.6619 29.9474 31.6548 28.9759 32.5327C28.0128 33.402 26.8622 34.0923 25.5241 34.6037C24.1946 35.1065 22.6903 35.358 21.0114 35.358C18.6761 35.358 16.5881 34.8295 14.7472 33.7727C12.9148 32.7159 11.4659 31.1861 10.4006 29.1832C9.34375 27.1804 8.81534 24.7557 8.81534 21.9091C8.81534 19.054 9.35227 16.625 10.4261 14.6222C11.5 12.6193 12.9574 11.0937 14.7983 10.0455C16.6392 8.98864 18.7102 8.46023 21.0114 8.46023C22.5284 8.46023 23.9347 8.67329 25.2301 9.09943C26.5341 9.52557 27.6889 10.1477 28.6946 10.9659C29.7003 11.7756 30.5185 12.7685 31.1491 13.9446C31.7884 15.1207 32.1974 16.4673 32.3764 17.9844ZM52.5178 8.81818H58.0533V25.821C58.0533 27.7301 57.5973 29.4006 56.6854 30.8324C55.782 32.2642 54.5163 33.3807 52.8885 34.1818C51.2607 34.9744 49.3643 35.3707 47.1996 35.3707C45.0263 35.3707 43.1257 34.9744 41.4979 34.1818C39.87 33.3807 38.6044 32.2642 37.701 30.8324C36.7976 29.4006 36.3459 27.7301 36.3459 25.821V8.81818H41.8814V25.348C41.8814 26.3452 42.0987 27.2315 42.5334 28.0071C42.9766 28.7827 43.5987 29.392 44.3999 29.8352C45.201 30.2784 46.1342 30.5 47.1996 30.5C48.2734 30.5 49.2067 30.2784 49.9993 29.8352C50.8004 29.392 51.4183 28.7827 51.853 28.0071C52.2962 27.2315 52.5178 26.3452 52.5178 25.348V8.81818Z"
                fill="#FDFFFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_dd_0_1"
                x="4.81543"
                y="8.46021"
                width="57.2378"
                height="34.9105"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_0_1"
                  result="effect2_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <ul className="flex flex-row gap-8 text-lg text-white">
            <li>
              <Link to="/" className="font-bold hover:text-xl" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link to="/favoritFilm" href="#" className="hover:text-xl">
                Favorites
              </Link>
            </li>
          </ul>

          <div className="flex flex-row items-center gap-5">
            <div className="flex flex-row items-center gap-1">
              <a href="#" className="hover:w-[34px] hover:h-[34px]">
                <img src={user}></img>
              </a>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.72456 6.64143C3.94645 6.41954 4.29367 6.39937 4.53835 6.58092L4.60845 6.64143L9.99984 12.0325L15.3912 6.64143C15.6131 6.41954 15.9603 6.39937 16.205 6.58092L16.2751 6.64143C16.497 6.86332 16.5172 7.21054 16.3356 7.45522L16.2751 7.52532L10.4418 13.3586C10.2199 13.5805 9.87267 13.6007 9.628 13.4192L9.5579 13.3586L3.72456 7.52532C3.48048 7.28124 3.48048 6.88551 3.72456 6.64143Z"
                  fill="#F9F9F9"
                />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      <div className="max-w-auto mx-auto bg-black">
        {/* Bagian Video */}
        <div className="max-w-6xl text-white mx-auto flex flex-row flex-wrap justify-between font-bold text-lg mb-16">
          {/* Trailer */}
          <div>
            <p className="mb-3">WATCH TRAILER</p>
            <iframe
              className="w-[30rem] h-96 rounded-md"
              src="https://www.youtube.com/embed/1JLUn2DFW4w"
            ></iframe>
          </div>

          {/* Streaming */}
          <div>
            <p className="mb-3">WATCH MOVIE NOW</p>
            <iframe
              className="w-[32.5rem] h-96 rounded-md"
              src="https://www.bilibili.tv/id/video/2046714317"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Bagian Overview dan Poster */}
        <div className="max-w-6xl text-white mx-auto flex flex-row justify-between mb-16">
          <div className="basis-2/5">
            <h1 className="text-lg font-bold mb-3">OVERVIEW</h1>
            <p className="text-base font-normal text-justify">
              El Camino: A Breaking Bad Movie (atau El Camino saja) adalah film
              kejahatan neo-barat Amerika Serikat tahun 2019 yang melanjutkan
              cerita dari seri televisi Breaking Bad. Pencipta serinya, Vince
              Gilligan, menulis, menyutradarai, dan memproduseri film ini. Aaron
              Paul kembali memerankan Jesse Pinkman. Film ini bercerita tentang
              kehidupan Pinkman usai episode terakhir serinya. Beberapa aktor,
              termasuk Jesse Plemons, Krysten Ritter, Jonathan Banks, dan Bryan
              Cranston, kembali memerankan tokohnya masing-masing. El Camino
              juga menjadi film terakhir yang melibatkan Robert Forster; ia
              meninggal dunia ketika film ini dirilis.
            </p>
            <br />
            <p className="text-base font-normal text-justify">
              Desas-desus tentang film cerita Breaking Bad sudah beredar sejak
              serinya tamat tahun 2013. Gilligan membahas kesempatan ini dengan
              Paul pada tahun 2017, menjelang ulang tahun ke-10 Breaking Bad.
              Pengambilan gambar dilakukan secara rahasia di New Mexico selama
              60 hari sejak November 2018. Proyek film ini baru diketahui publik
              pada Agustus 2019 melalui trailer yang dirilis oleh Netflix. El
              Camino dirilis secara digital di Netflix dan secara terbatas di
              beberapa bioskop pada 11 Oktober 2019. Siaran televisinya menyusul
              di AMC. Film ini mendapat pujian dari para kritikus. Mereka memuji
              pemeranan tokoh Paul dan jalan ceritanya yang memuaskan para
              penggemar seri Breaking Bad
            </p>
            <div className="max-w-6xl mx-auto translate-y-[1rem]">
              <Link to="/favoritFilm">
                <button onClick={handleFavoriteFilm} class="w-44 h-12 mx-auto rounded text-white border border-white hover:bg-slate-50 hover:border-0 hover:text-slate-950 hover:text-lg flex items-center justify-center gap-2">
                {favoritFilm.some(item => item.id === dataFilm.id) ? "Remove from Favorites" : "Add to Favorites"} <FaRegHeart />
                </button>
              </Link>
            </div>
          </div>

          <div className="basis-2/5">
            <h1 className="text-lg font-bold text-left mb-3">POSTER</h1>
            <div className="flex flex-wrap gap-4">
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
              <img className="w-[8.5rem] h-[11rem]" src={banner}></img>
            </div>
          </div>
        </div>

        {/* Bagian Footer */}
        <div className="max-w-lg mx-auto flex flex-row gap-2 pb-10">
          <p className="text-xs font-normal text-white">
            CINEMA UNIVERSE © 2023-2024
          </p>
          <ul className="text-xs font-normal text-slate-600 flex gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Browse</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Requests</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default DetailElCamino;
