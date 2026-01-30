import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const Services = () => (
  <div>
    {/* Character Encoding */}
    <meta charSet="UTF-8" />
    {/* Responsive Design */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* Title */}
    <title>
      ClinicMaster - Ophthalmology &amp; Eye Care Tailwind CSS Template |
      DexignZone
    </title>
    {/* SEO Meta Tags */}
    <meta
      name="description"
      content="ClinicMaster is a modern Ophthalmology & Eye Care Tailwind CSS Template designed for eye clinics, vision centers, and ophthalmologists. Featuring a clean layout, responsive design, and customizable UI, it helps medical professionals create a professional online presence."
    />
    <meta
      name="keywords"
      content="ClinicMaster, ophthalmology Tailwind CSS template, eye care website, vision clinic template, eye specialist website, retina care center, optometrist template, medical website template, healthcare Tailwind CSS, responsive medical template, eye doctor website design, DexignZone"
    />
    <meta name="author" content="DexignZone" />
    <meta name="robots" content="index, follow" />
    {/* CANONICAL URL */}
    <link
      rel="canonical"
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/services.html"
    />
    {/* FAVICONS ICON */}
    <link
      rel="icon"
      type="image/png"
      href="../ophthalmology/src/images/favicon.png"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="ClinicMaster - Ophthalmology & Eye Care Tailwind CSS Template | DexignZone"
    />
    <meta
      property="og:description"
      content="ClinicMaster is a modern Ophthalmology & Eye Care Tailwind CSS Template designed for eye clinics, vision centers, and ophthalmologists. Featuring a clean layout, responsive design, and customizable UI, it helps medical professionals create a professional online presence."
    />
    <meta
      property="og:url"
      content="https://clinicmaster.dexignzone.com/tailwind/ophthalmology"
    />
    <meta
      property="og:image"
      content="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/social-image.png"
    />
    <meta property="og:site_name" content="ClinicMaster" />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="ClinicMaster - Ophthalmology & Eye Care Tailwind CSS Template | DexignZone"
    />
    <meta
      name="twitter:description"
      content="ClinicMaster is a modern Ophthalmology & Eye Care Tailwind CSS Template designed for eye clinics, vision centers, and ophthalmologists. Featuring a clean layout, responsive design, and customizable UI, it helps medical professionals create a professional online presence."
    />
    <meta
      name="twitter:image"
      content="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/social-image.png"
    />
    {/* IE Compatibility */}
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no" />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/vendor/swiper/swiper-bundle.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/icons/fontawesome/css/all.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/icons/flaticon/flaticon.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/icons/feather/css/iconfont.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    {/* Custom Stylesheet */}
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css" />
    <div className="page-wraper">
      <div
        className="fixed size-full left-0 top-0 z-9999999 flex items-center justify-center bg-light"
        id="dzPreloader"
      >
        <div className="block w-32.5 h-1 rounded-3xl bg-white relative before:absolute before:bg-primary before:top-0 before:left-0 before:w-0 before:h-full before:rounded-3xl before:animate-dzMoving" />
      </div>
      <div
        id="offcanvas-right-2"
        className="fixed top-0 right-0 z-9999999 h-screen overflow-y-auto transition-transform translate-x-full bg-bodybg sm:w-100 w-90 custom-scroll"
      >
        <div className="flex items-center justify-between px-4 pt-2">
          <button
            type="button"
            className="text-xl"
            data-drawer-hide="offcanvas-right-2"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="p-7.5 grow overflow-y-auto">
          <div className="sidebar-cart-wrapper">
            <h2 className="flex items-center gap-2.5 text-base border-b border-black/10 pb-2.5 mb-3.75">
              Shopping Cart
              <span className="py-1 font-semibold bg-primary text-white rounded-full text-[11px] size-5.75 min-w-5.75 min-h-5.75 uppercase text-center">
                3
              </span>
            </h2>
            <div className="flex flex-col min-h-[calc(100vh-147.5px)]">
              <ul className="sidebar-cart-list">
                {[
                  { img: "img1.webp", name: "Herbal beauty" },
                  { img: "img2.webp", name: "Green beauty" },
                  { img: "img4.webp", name: "Sun beauty" },
                ].map((item) => (
                  <li className="py-5 border-b border-black/10" key={item.img}>
                    <div className="flex items-center justify-center">
                      <div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
                        <img
                          src={`src/images/shop/${item.img}`}
                          alt={item.name}
                        />
                      </div>
                      <div className="mr-2.5 flex-1">
                        <h3 className="font-semibold text-sm">
                          <a href="shop-details.html">{item.name}</a>
                        </h3>
                        <div className="flex items-center input-group">
                          <div className="w-26.25 min-w-26.25 h-10.5 p-0.75 bg-white rounded-2lg flex items-stretch mr-2.5">
                            <span className="flex gap-1 rounded-lg text-secondary bg-white p-1.5">
                              <button
                                type="button"
                                value="-"
                                data-field="quantity"
                                className="button-minus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"
                              >
                                <i className="fa-solid fa-minus" />
                              </button>
                              <input
                                type="number"
                                step={1}
                                defaultValue={1}
                                name="quantity"
                                className="touchspin h-7.5 w-5.5 leading-6.75 text-center outline-none"
                              />
                              <button
                                type="button"
                                value="+"
                                data-field="quantity"
                                className="button-plus cursor-pointer size-7.5 leading-6.75 text-center rounded-lg text-xs bg-light text-primary"
                              >
                                <i className="fa-solid fa-plus" />
                              </button>
                            </span>
                          </div>
                          <h6 className="font-semibold text-sm mb-0">$50.00</h6>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="size-7 flex items-center justify-center"
                      >
                        <i className="feather icon-x text-primary" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between py-4.5 mb-2.5">
                <h5 className="font-semibold text-lg mb-0">Subtotal:</h5>
                <h5 className="font-semibold text-lg mb-0">300.00$</h5>
              </div>
              <div className="mt-auto text-center">
                <a
                  href="shop-checkout.html"
                  className="btn btn-primary btn-hover1 mx-0.25"
                >
                  Checkout
                </a>
                <a
                  href="shop-cart.html"
                  className="btn btn-secondary btn-hover1 mx-0.25"
                >
                  View Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Start */}
      <MainNav />
      {/* Header End */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="page-content">
            <div
              className="2xxl:min-h-125 lg:min-h-112.5 md:min-h-full sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-primary before:opacity-70"
              style={{ backgroundImage: "url(src/images/banner/bnr1.webp)" }}
            >
              <div className="container relative z-1 h-full table">
                <div className="table-cell 2xxl:h-125 lg:h-112.5 md:h-95 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
                  <h1
                    className="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.8s"
                  >
                    Services
                  </h1>
                  <nav
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.8s"
                  >
                    <ul className="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
                      <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading">
                        <a href="index.html" className="text-primary">
                          Home
                        </a>
                      </li>
                      <li className="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
                        Services
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light">
              <div className="container">
                <div className="row custom-tab" active-index="2">
                  <div className="xl:w-5/12 lg:w-1/3 w-full lg:mb-0 mb-4">
                    <div className="sm:mb-7.5 mb-5">
                      <h2 className="2xxl:text-5xl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] ">
                        Services We Provide
                      </h2>
                      <p className="text-lg font-light">
                        Eye care center treatments are specialized services
                        aimed at improving and maintaining eye health.
                      </p>
                    </div>
                    <nav>
                      <div
                        className="lg:pe-12 lg:mb-6 mb-4"
                        id="nav-tab"
                        role="tablist"
                      >
                        {[
                          "Eye Specialist",
                          "Pediatric Eye Care",
                          "Low Vision Services",
                          "High Vision Services",
                        ].map((label) => (
                          <button
                            key={label}
                            className="tab-title text-heading xl:text-xl text-base bg-white w-full text-left mb-2 font-normal rounded-2lg xl:py-5 xl:px-7.5 py-3 px-5 leading-none flex justify-between items-center duration-500 [.tab-title.active]:bg-primary [.tab-title.active]:text-white"
                            type="button"
                          >
                            {label}
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1839_4494)">
                                <path
                                  className="[.tab-title.active_&]:fill-white"
                                  d="M21.748 10.3917C21.7477 10.3914 21.7475 10.3911 21.7472 10.3909L17.2568 5.92212C16.9204 5.58735 16.3763 5.5886 16.0414 5.92504C15.7066 6.26145 15.7079 6.80556 16.0443 7.14037L19.0591 10.1406H0.859375C0.384742 10.1406 0 10.5254 0 11C0 11.4746 0.384742 11.8594 0.859375 11.8594H19.0591L16.0443 14.8596C15.7079 15.1944 15.7066 15.7385 16.0414 16.0749C16.3763 16.4114 16.9205 16.4126 17.2568 16.0779L21.7472 11.6091C21.7475 11.6089 21.7477 11.6086 21.748 11.6083C22.0846 11.2724 22.0835 10.7265 21.748 10.3917Z"
                                  fill="#676767"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1839_4494">
                                  <rect width="22" height="22" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="xl:w-7/12 lg:w-2/3 w-full">
                    <div className="tab-content-area" id="nav-tabContent">
                      {["bnr1", "bnr2", "bnr3", "bnr4"].map((img) => (
                        <div className="tab-content" key={img}>
                          <div className="bg-white rounded-2xl p-7.5">
                            <div className="relative overflow-hidden">
                              <img
                                src={`src/images/services/${img}.webp`}
                                alt="/"
                                className="w-full rounded-2xl"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light p-t0 overflow-hidden content-wrapper style-39">
              <div className="container">
                <div className="row ">
                  {[
                    { img: "img1.webp", title: "Eye Specialist" },
                    { img: "img2.webp", title: "Pediatric Eye Care" },
                    { img: "img3.webp", title: "Low Vision Services" },
                    { img: "img4.webp", title: "Cataract Surgery" },
                    { img: "img5.webp", title: "Pediatric Eye Care" },
                    { img: "img6.webp", title: "Diabetic Eye Exam" },
                  ].map((card) => (
                    <div className="lg:w-1/3 w-full mb-7.5" key={card.img}>
                      <div className="relative z-1 p-5 h-full duration-200 bg-white rounded-3xl">
                        <div className="relative overflow-hidden rounded-xxl mb-2.5 h-60">
                          <img
                            src={`src/images/blog/middle/${card.img}`}
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="relative">
                          <h3 className="text-2xxl mb-2.5">
                            <a href="blog-details.html">{card.title}</a>
                          </h3>
                          <p className="text-lg">
                            Affordable Glasses and Lenses Deals We understand.
                          </p>
                          <a
                            href="blog-details.html"
                            className="text-primary text-2sm font-medium capitalize"
                          >
                            Read more <i className="feather icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="relative z-1 bg-primary">
              <div className="container">
                <div className="row justify-between">
                  <div className="lg:w-7/12 w-full">
                    <div className="2xl:pt-20 2xl:pb-17.5 pt-12.5 pb-10">
                      <div className="md:mb-10 mb-5">
                        <h2
                          className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] !text-white mb-0 wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-wow-duration="0.8s"
                        >
                          Better Vision Begins Here Book a Consultation
                        </h2>
                      </div>
                      <div className="form-wrapper">
                        <div className="form-body">
                          <form
                            action="../assets/script/contact_smtp.php"
                            className="dzForm"
                            method="POST"
                          >
                            <input
                              type="hidden"
                              className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                              name="dzToDo"
                              defaultValue="Appointment"
                            />
                            <input
                              type="hidden"
                              className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                              name="reCaptchaEnable"
                              defaultValue={0}
                            />
                            <div className="dzFormMsg" />
                            <div className="row g-5 items-end">
                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="0.8s"
                              >
                                <div className="relative">
                                  <input
                                    name="dzName"
                                    type="text"
                                    className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                                    id="inputYourName"
                                    placeholder="Your Name"
                                  />
                                  <span className="absolute text-2xl top-4 left-0">
                                    <svg
                                      width={28}
                                      height={28}
                                      viewBox="0 0 28 28"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.9827 17.9043C9.47052 17.9043 5.61719 18.5865 5.61719 21.3187C5.61719 24.051 9.44608 24.7576 13.9827 24.7576C18.495 24.7576 22.3472 24.0743 22.3472 21.3432C22.3472 18.6121 18.5194 17.9043 13.9827 17.9043Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.9794 14.0065C16.9406 14.0065 19.3406 11.6054 19.3406 8.64431C19.3406 5.6832 16.9406 3.2832 13.9794 3.2832C11.0183 3.2832 8.61722 5.6832 8.61722 8.64431C8.60722 11.5954 10.9917 13.9965 13.9417 14.0065H13.9794Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp"
                                data-wow-delay="0.4s"
                                data-wow-duration="0.8s"
                              >
                                <div className="relative">
                                  <input
                                    name="dzEmail"
                                    type="email"
                                    className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                                    id="inputYourEmail"
                                    placeholder="Your Email"
                                  />
                                  <span className="absolute text-2xl top-4 left-0">
                                    <svg
                                      width={26}
                                      height={24}
                                      viewBox="0 0 26 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M19.8888 8.32617L14.705 12.5414C13.7256 13.3184 12.3476 13.3184 11.3682 12.5414L6.14062 8.32617"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.7296 22.5C22.2779 22.5098 24.6693 19.5945 24.6693 16.0114V7.99835C24.6693 4.4153 22.2779 1.5 18.7296 1.5H7.2756C3.72736 1.5 1.33594 4.4153 1.33594 7.99835V16.0114C1.33594 19.5945 3.72736 22.5098 7.2756 22.5H18.7296Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full wow fadeInUp"
                                data-wow-delay="0.4s"
                                data-wow-duration="0.8s"
                              >
                                <div className="relative">
                                  <input
                                    name="dzNumber"
                                    type="number"
                                    className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                                    id="inputYournumber"
                                    placeholder="Phone Number"
                                  />
                                  <span className="absolute text-2xl top-4 left-0">
                                    <svg
                                      width={25}
                                      height={24}
                                      viewBox="0 0 25 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.7422 0.916992C20.06 1.39649 23.4714 4.80316 23.9555 9.12099"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.7422 5.0498C17.8084 5.45114 19.423 7.06697 19.8255 9.13314"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.8727 12.5514C16.5265 17.2041 17.5823 11.8215 20.5454 14.7826C23.4021 17.6385 25.0452 18.2107 21.4246 21.8292C20.9712 22.1935 18.0907 26.577 7.96781 16.4566C-2.15637 6.33499 2.22443 3.45151 2.58887 2.99827C6.217 -0.630188 6.78056 1.02127 9.63723 3.87721C12.5991 6.83957 7.21889 7.89881 11.8727 12.5514Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>

                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp"
                                data-wow-delay="0.5s"
                                data-wow-duration="0.8s"
                              >
                                <div className="relative">
                                  <input
                                    name="dzOther[DateTime]"
                                    type="text"
                                    className="py-3.75 pl-10 text-2sm text-left text-white border-b-2 border-white min-h-15 w-full placeholder:text-white"
                                    id="dateTimePickerOnly"
                                    placeholder="Date"
                                  />
                                  <span className="absolute text-2xl top-4 left-0">
                                    <svg
                                      width={28}
                                      height={29}
                                      viewBox="0 0 28 29"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M3.60938 11.9608H24.404"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.1834 16.5174H19.1942"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.0037 16.5174H14.0146"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.81625 16.5174H8.82705"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M19.1834 21.0516H19.1942"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.0037 21.0516H14.0146"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.81625 21.0516H8.82705"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M18.7201 3.32227V7.16151"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9.2904 3.32227V7.16151"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.9446 5.16504H9.06612C5.63999 5.16504 3.5 7.07363 3.5 10.5819V21.1398C3.5 24.7033 5.63999 26.656 9.06612 26.656H18.9338C22.3708 26.656 24.5 24.7364 24.5 21.2281V10.5819C24.5108 7.07363 22.3816 5.16504 18.9446 5.16504Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>

                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp"
                                data-wow-delay="0.7s"
                                data-wow-duration="0.8s"
                              >
                                <div className="relative custom-select icon-select">
                                  <select
                                    name="dzOther[DoctorName]"
                                    className="dynamic-select"
                                  >
                                    <option defaultValue="Doctor Name">
                                      Doctor Name
                                    </option>
                                    <option>Nashid Martines</option>
                                    <option>Kenneth Fong</option>
                                  </select>
                                  <span className="absolute text-2xl top-4 left-0">
                                    <svg
                                      width={28}
                                      height={28}
                                      viewBox="0 0 28 28"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.8672 12.713C22.4947 12.4843 23.7477 11.089 23.7512 9.39851C23.7512 7.73251 22.5367 6.35118 20.9442 6.08984"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M23.0156 16.625C24.5918 16.8607 25.692 17.4125 25.692 18.55C25.692 19.3328 25.174 19.8415 24.3363 20.1612"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.8662 17.1074C10.1166 17.1074 6.91406 17.6756 6.91406 19.9448C6.91406 22.2128 10.0967 22.7973 13.8662 22.7973C17.6159 22.7973 20.8172 22.2349 20.8172 19.9646C20.8172 17.6943 17.6357 17.1074 13.8662 17.1074Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.8696 13.869C16.3301 13.869 18.3251 11.8752 18.3251 9.41351C18.3251 6.95301 16.3301 4.95801 13.8696 4.95801C11.4091 4.95801 9.4141 6.95301 9.4141 9.41351C9.40476 11.8658 11.3846 13.8608 13.8369 13.869H13.8696Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M6.86838 12.713C5.23971 12.4843 3.98788 11.089 3.98438 9.39851C3.98438 7.73251 5.19887 6.35118 6.79138 6.08984"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M4.7154 16.625C3.13923 16.8607 2.03906 17.4125 2.03906 18.55C2.03906 19.3328 2.55706 19.8415 3.39473 20.1612"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                              <div
                                className="xl:w-1/3 sm:w-1/2 w-full  wow fadeInUp"
                                data-wow-delay="0.8s"
                                data-wow-duration="0.8s"
                              >
                                <button
                                  type="submit"
                                  name="submit"
                                  value="submit"
                                  className="btn w-full justify-center btn-white text-primary"
                                >
                                  Book Appointment{" "}
                                  <i className="feather icon-arrow-right ms-1" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 w-full self-end">
                    <div
                      className="lg:-mt-37.5 xl:-mr-32.5 lg:-mr-6.25 lg:-ml-7.5 max-lg:text-center relative after:absolute after:top-2/5 after:left-0 after:size-full after:bg-no-repeat after:bg-pointed-arrow wow fadeInUp"
                      data-wow-delay="1.0s"
                      data-wow-duration="0.8s"
                    >
                      <img src="src/images/about/img1.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="src/images/background/bg4.webp"
                alt=""
                className="absolute right-0 top-0 -z-1"
              />
            </section>

            <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light">
              <div className="container">
                <div
                  className="sm:mb-7.5 mb-5 text-center wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="0.8s"
                >
                  <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize">
                    Have any questions?
                  </h2>
                  <p className="sm:text-lg text-base font-light max-w-162.5 mx-auto">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                <div className="row justify-center">
                  <div
                    className="xl:w-1/2 lg:w-2/3 w-full mb-10 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.8s"
                  >
                    <form className="dzSearch">
                      <div className="relative flex flex-wrap items-stretch w-full mb-0">
                        <input
                          name="dzSearch"
                          type="search"
                          className="relative w-[1%] flex-1 text-base text-bodycolor h-15 border-b border-secondary/20 pr-10"
                          placeholder="Type your question here"
                        />
                        <div className="absolute bottom-0 right-0 w-auto h-full">
                          <button
                            name="dzSearch"
                            value="search"
                            className="text-xl text-primary h-full relative z-2"
                          >
                            <i className="icon feather icon-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="xl:w-5/6 w-full custom-tab">
                    <div
                      className="myAccordion style-2 wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="0.8s"
                      id="accordionExample"
                    >
                      {[
                        "How much do you charge for pedicure ?",
                        "What types of treatments do you offer?",
                        "How do i book my appointment ?",
                        "Can i cancel my appointment",
                      ].map((q, idx) => {
                        const isOpen = idx === 0;
                        return (
                          <div className="accordion-item" key={q}>
                            <h2
                              className={`accordion-header font-base md:!text-[22px] !py-3.5 [.accordion-header.open]:!text-heading [.accordion-header.open]:!bg-white [.accordion-header.open]:!mb-3.75 mb-1.25 ${
                                isOpen ? "open" : ""
                              }`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                              >
                                {q}
                              </button>
                              <span
                                className={`arrow ${isOpen ? "active" : ""}`}
                              >
                                <i className="icon feather icon-chevron-right size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:hidden block" />
                                <i className="icon feather icon-chevron-down size-7.5 leading-7.5! text-center rounded-lg bg-primary/10 text-primary [.arrow.active_&]:bg-primary [.arrow.active_&]:text-white [.arrow.active_&]:block hidden" />
                              </span>
                            </h2>
                            <div
                              className={`accordion-content mb-3.75 ${
                                isOpen ? "show" : ""
                              }`}
                            >
                              <div className="content-inner">
                                <p className="md:text-lg mb-0">
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its. The point of using
                                  Lorem Ipsum is that it has a more-or-less
                                  normal distribution
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div>
              <div className="container-fluid !p-0">
                <div className="swiper portfolio-slider">
                  <div className="swiper-wrapper">
                    {[
                      "img1",
                      "img2",
                      "img3",
                      "img4",
                      "img5",
                      "img6",
                      "img7",
                    ].map((img) => (
                      <div className="swiper-slide" key={img}>
                        <div className="relative overflow-hidden">
                          <img
                            src={`src/images/portfolio/${img}.webp`}
                            alt=""
                            className="size-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Footer */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
      <button
        id="scrollProgress"
        title="Scroll to top"
        className="scroll-top fixed z-9999 right-5 bottom-5 size-12.5 rounded-full bg-secondary text-white cursor-pointer opacity-0 pointer-events-none duration-500 flex items-center justify-center [.scroll-top.active]:opacity-100 [.scroll-top.active]:pointer-events-auto"
      >
        <span className="icon text-xs relative z-1">
          <i className="fas fa-arrow-up" />
        </span>
        <svg
          className="absolute top-0 left-0 -rotate-90"
          width={50}
          height={50}
        >
          <circle
            className="stroke-white"
            cx={25}
            cy={25}
            r={20}
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="100.53"
            strokeDashoffset="100.53"
          />
        </svg>
      </button>
    </div>
    {/* JAVASCRIPT FILES ========================================= */}
  </div>
);

export default Services;

