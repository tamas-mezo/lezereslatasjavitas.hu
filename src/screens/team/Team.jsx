import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const Team = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/team.html"
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
                <li className="py-5 border-b border-black/10">
                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
                      <img
                        src="src/images/shop/img1.webp"
                        alt="Herbal beauty"
                      />
                    </div>
                    <div className="mr-2.5 flex-1">
                      <h3 className="font-semibold text-sm">
                        <a href="shop-details.html">Herbal beauty</a>
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
                <li className="py-5 border-b border-black/10">
                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
                      <img src="src/images/shop/img2.webp" alt="Green beauty" />
                    </div>
                    <div className="mr-2.5 flex-1">
                      <h3 className="font-semibold text-sm">
                        <a href="shop-details.html">Green beauty</a>
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
                <li className="py-5 border-b border-black/10">
                  <div className="flex items-center justify-center">
                    <div className="relative overflow-hidden size-20 min-w-20 rounded-2xl mr-4">
                      <img src="src/images/shop/img4.webp" alt="Sun beauty" />
                    </div>
                    <div className="mr-2.5 flex-1">
                      <h3 className="font-semibold text-sm">
                        <a href="shop-details.html">Sun beauty</a>
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
                    Team
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
                        Team
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <section className="2xxl:py-25 xl:py-17.5 md:py-12.5 sm:py-10 py-7.5 bg-light bg-[linear-gradient(to_bottom,rgba(0,0,0,0)0%,var(--body-bg)_100%)]">
              <div className="container">
                <div className="row box-hover-wrapper">
                  {[
                    { img: "img1.webp", name: "Dr. Raiyan Kovin" },
                    { img: "img2.webp", name: "Dr. Jon doe" },
                    { img: "img3.webp", name: "Dr. Damion Kovin" },
                    { img: "img4.webp", name: "Dr. Jolian Acenj" },
                    { img: "img5.webp", name: "Dr. Raiyan Kovin" },
                    { img: "img6.webp", name: "Dr. Jon doe" },
                    { img: "img7.webp", name: "Dr. Damion Kovin" },
                    { img: "img8.webp", name: "Dr. Jolian Acenj" },
                  ].map((member, idx) => (
                    <div
                      key={member.name + idx}
                      className="xl:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp"
                      data-wow-delay="0.2s"
                      data-wow-duration={`${0.8 + idx * 0.2}s`}
                    >
                      <div className="bg-light rounded-2xl overflow-hidden box-hover active">
                        <div className="relative overflow-hidden">
                          <img
                            src={`src/images/team/${member.img}`}
                            alt={member.name}
                            className="w-full"
                          />
                        </div>
                        <div className="bg-white py-3.75 px-5 rounded-b-2xl border-2 border-primary/10 border-b-0">
                          <div className="relative group">
                            <a
                              className="inline-block size-11.5 leading-11.5 text-center rounded-lg text-[22px] bg-primary text-white float-right -mt-10"
                              href="javascript:void(0);"
                            >
                              <i className="icon feather icon-plus" />
                            </a>
                            <ul className="absolute bottom-0 right-0 auto z-1 w-12.5 opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-12.5">
                              <li className="mb-2">
                                <a
                                  className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-t-2lg"
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li className="mb-2">
                                <a
                                  className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12"
                                  href="https://twitter.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fa-brands fa-x-twitter" />
                                </a>
                              </li>
                              <li className="mb-2">
                                <a
                                  className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12"
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li className="mb-2">
                                <a
                                  className="text-white bg-primary inline-block text-center -mb-5 h-12.5 w-12.5 text-lg leading-12 rounded-b-2lg"
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fa-brands fa-linkedin-in" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h3 className="text-2xl mb-0 font-poppins">
                            <a href="team-detail.html">{member.name}</a>
                          </h3>
                          <span className="text-sm text-primary font-poppins block">
                            Ophthalmologist
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white"
              style={{ backgroundImage: "url(src/images/background/bg7.webp)" }}
            >
              <div className="container">
                <div className="row content-wrapper style-43 items-end justify-center">
                  <div className="xl:w-1/2 w-full mb-7.5">
                    <div className="2xxl:mb-17.5 sm:mb-10">
                      <div className="sm:mb-7.5 mb-5">
                        <span
                          className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block wow fadeInUp"
                          data-wow-delay="0.2s"
                          data-wow-duration="0.8s"
                        >
                          Best Ophthalmology
                        </span>
                        <h2
                          className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] wow fadeInUp"
                          data-wow-delay="0.4s"
                          data-wow-duration="0.8s"
                        >
                          Dr. Williams Florence
                        </h2>
                        <p
                          className="text-lg font-normal text-secondary wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="0.8s"
                        >
                          <strong className="text-secondary fw-semibold">
                            Dr. Williams Florence
                          </strong>{" "}
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don&apos;t look even slightly believable.
                        </p>
                      </div>
                      <h3
                        className="text-xl font-semibold pb-2.5 relative mb-3 !text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-size-[10px_1px] after:bg-repeat-x after:bg-linear-(--title-gradient) wow fadeInUp"
                        data-wow-delay="0.8s"
                        data-wow-duration="0.8s"
                      >
                        About Skills
                      </h3>
                      <ul
                        className="flex flex-wrap text-secondary font-medium mb-8.75 wow fadeInUp"
                        data-wow-delay="1.0s"
                        data-wow-duration="0.8s"
                      >
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          Root Canal Therapy
                        </li>
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          Dental Examinations
                        </li>
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          Endodontic Surgery
                        </li>
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          X-Rays and Imaging
                        </li>
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          Cracked Tooth Treatment
                        </li>
                        <li className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                          Oral Cancer Screenings
                        </li>
                      </ul>
                      <div
                        className="row items-center g-4 wow fadeInUp"
                        data-wow-delay="1.2s"
                        data-wow-duration="0.8s"
                      >
                        <div className="sm:w-1/2 flex">
                          <div className="text-center">
                            <img src="src/images/sign.webp" alt="" />
                            <span className="text-sm block text-primary">
                              Dr. Williams Florence
                            </span>
                          </div>
                        </div>
                        <div className="sm:w-1/2">
                          <a
                            href="appointment.html"
                            className="btn btn-lg btn-icon btn-primary"
                          >
                            Appointment
                            <i className="feather icon-arrow-right ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 lg:w-2/3 w-full">
                    <div className="relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom after:bg-content-media">
                      <div className="relative z-1 md:ps-12.5 md:pe-25 px-7.5">
                        <img
                          src="src/images/about/img6.webp"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="absolute sm:bottom-37.5 bottom-15 lg:-left-15 left-0 z-99 max-sm:hidden">
                        <div className="inline-flex items-center gap-3.75 bg-white/90 sm:rounded-xxl rounded-lg py-3 px-5 backdrop-blur-xs shadow-info-widget-10 animate-move3">
                          <span className="xl:text-5xxl text-3xxl font-bold text-primary">
                            <span className="value counted" data-value="20">
                              20
                            </span>
                            +
                          </span>
                          <span className="sm:text-lg text-base text-justify text-secondary font-semibold block font-title">
                            Years <br /> Experienced
                          </span>
                        </div>
                      </div>
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

export default Team;

