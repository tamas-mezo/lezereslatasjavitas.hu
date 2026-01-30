import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const Appointment = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/appointment.html"
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
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
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
                    Appointment
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
                        Appointment
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <section
              className="2xxl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10 relative z-1 bg-white"
              style={{ backgroundImage: "url(src/images/background/bg7.webp)" }}
            >
              <div className="container">
                <div className="row items-end justify-between">
                  <div className="xl:w-5/12 w-full mb-7.5">
                    <div className="relative rounded-2xl 2xl:p-13.75 sm:p-10 p-6.25 bg-[#006562] before:w-36.25 before:aspect-square before:absolute before:right-5 before:top-5 before:z-0 before:bg-size-[100%] before:bg-no-repeat before:bg-commentsvg">
                      <div>
                        <h2 className="sm:text-2xxl text-2xl text-white sm:mb-5 mb-3.75">
                          Book Your Appointment
                        </h2>
                      </div>
                      <form
                        action="../assets/script/contact_smtp.php"
                        className="dzForm"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                          name="dzToDo"
                          defaultValue="Appointment"
                        />
                        <input
                          type="hidden"
                          className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                          name="reCaptchaEnable"
                          defaultValue="0"
                        />
                        <div className="dzFormMsg" />
                        <div className="row">
                          <div className="w-full mb-7.5">
                            <div className="relative">
                              <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                <i className="feather icon-user" />
                              </span>
                              <input
                                name="dzName"
                                type="text"
                                className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="w-full mb-7.5">
                            <div className="relative">
                              <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                <i className="feather icon-mail" />
                              </span>
                              <input
                                name="dzEmail"
                                type="email"
                                className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="w-full mb-7.5">
                            <div className="relative">
                              <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                <i className="feather icon-phone" />
                              </span>
                              <input
                                name="dzPhoneNumber"
                                type="text"
                                className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="sm:w-1/2 w-full mb-7.5">
                            <div className="relative">
                              <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                <i className="feather icon-calendar" />
                              </span>
                              <input
                                name="dzOther[dzDate]"
                                required
                                type="date"
                                className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                          <div className="sm:w-1/2 w-full mb-7.5">
                            <div className="relative">
                              <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                <i className="feather icon-clock" />
                              </span>
                              <input
                                name="dzOther[dzTime]"
                                required
                                type="time"
                                className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 w-full"
                                placeholder="Time"
                              />
                            </div>
                          </div>
                          <div className="sm:w-1/2 w-full">
                            {[
                              "Skin Allergy Testing",
                              "Laser Treatments",
                              "Hair Fall Treatments",
                            ].map((label, idx) => {
                              const id = `checkBox${idx + 1}`;
                              return (
                                <div className="form-check2 mb-1.25" key={id}>
                                  <input
                                    className="size-4.5 bg-transparent border border-white appearance-none rounded-[2px] mr-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check"
                                    type="checkbox"
                                    id={id}
                                  />
                                  <label
                                    className="text-[#BED2E7] text-base inline"
                                    htmlFor={id}
                                  >
                                    {label}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                          <div className="sm:w-1/2 w-full mb-7.5">
                            {[
                              "Plastic Surgery",
                              "Acne Scar Treatment",
                              "Pedicure",
                            ].map((label, idx) => {
                              const id = `checkBox${idx + 4}`;
                              return (
                                <div className="form-check2 mb-1.25" key={id}>
                                  <input
                                    className="size-4.5 bg-transparent border border-white appearance-none rounded-[2px] mr-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check"
                                    type="checkbox"
                                    id={id}
                                  />
                                  <label
                                    className="text-[#BED2E7] text-base inline"
                                    htmlFor={id}
                                  >
                                    {label}
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                          <div className="w-full mt-2.5">
                            <button
                              type="submit"
                              name="submit"
                              value="submit"
                              className="btn btn-lg btn-white w-full justify-center hover:!bg-white hover:!text-black"
                            >
                              <i className="feather icon-calendar mr-1.25" />{" "}
                              Book An appointment
                            </button>
                          </div>
                        </div>
                      </form>
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
            <section
              className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 pt-10 pb-5 bg-light overflow-hidden"
              style={{
                backgroundImage: "url(src/images/background/bg7.webp)",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row content-wrapper style-7 items-center">
                  <div className="xl:w-1/2 w-full mb-7.5">
                    <div className="sm:mb-7.5 mb-5">
                      <span
                        className="text-primary font-medium sm:text-xl text-base leading-[1.2] font-sub-title rounded-3xl italic mb-2.5 block"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.7s"
                      >
                        Why Choose us
                      </span>
                      <h2
                        className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3] mb-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.7s"
                      >
                        a Holistic View On Eye Care And Health
                      </h2>
                    </div>
                    <div className="row">
                      {[
                        {
                          delay: "0.4s",
                          title: "Eye Specialist",
                          icon: (
                            <svg
                              className="group-hover:[--primary:#fff]"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.52134 26.8669C2.57037 26.8666 2.57037 26.8666 2.62039 26.8663C2.72908 26.8658 2.83776 26.8658 2.94645 26.8658C3.02473 26.8655 3.10301 26.8652 3.18129 26.8649C3.39339 26.8642 3.60549 26.8639 3.81759 26.8637C3.95032 26.8636 4.08304 26.8634 4.21576 26.8631C4.58407 26.8625 4.95237 26.8619 5.32068 26.8618C5.35596 26.8618 5.35596 26.8618 5.39196 26.8618C5.43963 26.8618 5.4873 26.8618 5.53497 26.8618C5.57047 26.8618 5.57047 26.8618 5.60667 26.8618C5.63037 26.8617 5.65406 26.8617 5.67846 26.8617C6.06191 26.8616 6.44535 26.8607 6.8288 26.8594C7.22356 26.8582 7.61832 26.8575 8.01308 26.8575C8.23429 26.8575 8.45549 26.8572 8.6767 26.8562C8.88496 26.8553 9.09321 26.8553 9.30148 26.8558C9.37753 26.8559 9.45359 26.8556 9.52964 26.8551C10.381 26.8494 11.0271 27.0628 11.6578 27.6738C12.0664 28.1051 12.3506 28.7329 12.3442 29.3409C12.3711 29.3409 12.398 29.3409 12.4257 29.3409C13.0907 29.3401 13.7557 29.3395 14.4207 29.3392C14.7424 29.339 15.064 29.3388 15.3857 29.3384C17.842 29.3355 17.842 29.3355 18.9192 29.35C19.0005 29.3511 19.0817 29.352 19.163 29.3528C20.0984 29.3622 21.0164 29.4871 21.932 29.6807C21.9562 29.6858 21.9804 29.6908 22.0054 29.6961C22.1526 29.7284 22.2928 29.772 22.4351 29.8225C22.5488 29.8615 22.6645 29.8919 22.7803 29.9234C23.0046 29.9861 23.2248 30.0576 23.4442 30.1365C23.4707 30.146 23.4972 30.1555 23.5245 30.1652C23.7034 30.2307 23.8762 30.3063 24.0487 30.3877C24.231 30.4707 24.4163 30.5432 24.6032 30.6145C24.6993 30.6556 24.7795 30.7037 24.8683 30.7591C24.9817 30.8189 25.0962 30.8763 25.2105 30.9342C25.6202 31.1439 26.0115 31.3755 26.4011 31.6222C26.4294 31.6401 26.4577 31.658 26.4869 31.6764C26.6846 31.8027 26.8752 31.9374 27.065 32.0759C27.1017 32.1019 27.1384 32.1278 27.1752 32.1536C27.4107 32.3189 27.6383 32.4922 27.8626 32.6732C27.9187 32.7184 27.9749 32.7634 28.0313 32.8083C28.0698 32.8392 28.1084 32.8701 28.1469 32.901C28.2004 32.9439 28.2539 32.9868 28.3077 33.0293C28.3764 33.0888 28.3764 33.0888 28.4616 33.1789C28.7017 33.4256 28.8871 33.5072 29.2251 33.5075C29.2785 33.5063 29.332 33.5051 29.3855 33.5039C29.4429 33.504 29.5004 33.5042 29.5578 33.5046C29.7127 33.5051 29.8675 33.5035 30.0224 33.5014C30.1852 33.4996 30.348 33.5001 30.5108 33.5003C30.8192 33.5004 31.1274 33.4987 31.4357 33.4963C31.9873 33.4921 32.5389 33.4912 33.0905 33.4905C33.2837 33.4902 33.4769 33.4892 33.6701 33.4876C33.7907 33.4867 33.9114 33.4862 34.032 33.4858C34.0875 33.4855 34.1429 33.485 34.1984 33.4843C34.5353 33.4803 34.8354 33.5056 35.163 33.5953C35.2016 33.6055 35.2016 33.6055 35.2409 33.6159C35.9739 33.8239 36.6201 34.3595 37.0026 35.0332C37.3445 35.6691 37.4576 36.2496 37.4252 36.9718C37.4472 36.9608 37.4692 36.9498 37.4919 36.9384C37.9286 36.7205 38.3661 36.5046 38.8063 36.2944C38.8441 36.2763 38.882 36.2582 38.9209 36.2396C39.0701 36.1685 39.2194 36.0976 39.37 36.0295C39.5715 35.9378 39.7703 35.8399 39.9696 35.7429C40.3449 35.5603 40.7206 35.3787 41.0972 35.1991C41.4366 35.0373 41.7753 34.8738 42.1136 34.7095C42.5674 34.4892 43.0221 34.2708 43.4773 34.0537C43.6676 33.9629 43.8578 33.872 44.0479 33.781C44.1237 33.7448 44.1995 33.7086 44.2752 33.6723C44.4146 33.6057 44.554 33.539 44.6933 33.4723C44.7759 33.4328 44.8586 33.3932 44.9412 33.3537C44.9986 33.3262 45.0561 33.2987 45.1135 33.2712C45.2823 33.1904 45.4512 33.1099 45.6205 33.0301C45.648 33.0172 45.6756 33.0042 45.704 32.9908C46.1108 32.8062 46.4892 32.7395 46.9331 32.7427C46.9691 32.7425 47.0051 32.7422 47.0422 32.742C47.8905 32.744 48.5806 33.1528 49.1871 33.7367C49.7446 34.3301 50.0054 35.1703 49.9999 35.9838C49.9894 36.306 49.9181 36.6002 49.8182 36.9042C49.8074 36.9385 49.8074 36.9385 49.7964 36.9735C49.5833 37.6378 49.1227 38.1634 48.5723 38.5587C48.5336 38.587 48.5336 38.587 48.4941 38.6158C48.4424 38.6533 48.3906 38.6906 48.3386 38.7277C48.2419 38.7969 48.1457 38.8669 48.0496 38.937C47.8253 39.1007 47.6 39.2627 47.3731 39.4226C47.2145 39.5346 47.0565 39.6476 46.8987 39.761C46.5924 39.9811 46.285 40.1995 45.9761 40.4158C45.9433 40.4388 45.9104 40.4618 45.8766 40.4855C45.6503 40.6436 45.4231 40.8001 45.1954 40.956C45.1537 40.9847 45.1119 41.0133 45.0702 41.042C45.0136 41.0809 44.957 41.1197 44.9004 41.1586C44.7882 41.2355 44.6761 41.3126 44.5642 41.3898C43.4667 42.146 42.349 42.8706 41.2284 43.5897C41.1995 43.6081 41.1707 43.6266 41.1411 43.6457C39.7939 44.5096 39.7939 44.5096 39.221 44.8357C39.0755 44.9185 38.9317 45.0042 38.7879 45.0901C38.7481 45.1138 38.7481 45.1138 38.7076 45.138C38.5861 45.2105 38.4649 45.2835 38.3444 45.3576C37.9295 45.6123 37.5063 45.8511 37.0827 46.09C36.9753 46.1506 36.8681 46.2114 36.7608 46.2722C36.4763 46.4333 36.1915 46.5912 35.9001 46.7386C35.7944 46.793 35.6901 46.8492 35.5858 46.9063C34.8934 47.2858 34.1929 47.6477 33.4738 47.9707C33.2874 48.0547 33.1081 48.1427 32.9316 48.247C32.8444 48.2964 32.7545 48.3324 32.6611 48.3674C32.524 48.4199 32.3881 48.4737 32.2533 48.532C32.2212 48.5459 32.1891 48.5597 32.156 48.574C32.1205 48.5894 32.085 48.6048 32.0484 48.6206C31.9583 48.6595 31.8681 48.6981 31.7779 48.7367C31.7573 48.7456 31.7366 48.7545 31.7153 48.7637C31.3017 48.9401 30.8798 49.0933 30.455 49.2387C30.3806 49.2642 30.3063 49.2899 30.232 49.3157C29.8897 49.4338 29.5447 49.5374 29.196 49.6335C29.1734 49.6398 29.1508 49.6461 29.1275 49.6526C28.7285 49.7634 28.3254 49.8373 27.9174 49.9037C27.8934 49.9078 27.8694 49.9119 27.8446 49.9161C27.2656 50.0131 26.6127 50.0476 26.0412 49.9008C25.9103 49.8681 25.7798 49.8453 25.647 49.8231C25.101 49.7315 24.581 49.5812 24.0528 49.4141C24.0135 49.4017 23.9741 49.3892 23.9336 49.3765C23.7058 49.3033 23.4831 49.2218 23.261 49.132C23.1295 49.0798 22.9964 49.0344 22.8623 48.9899C22.6533 48.9193 22.4481 48.8441 22.2455 48.7557C22.1799 48.7275 22.1144 48.6994 22.0488 48.6712C22.0157 48.657 21.9825 48.6427 21.9484 48.628C21.8619 48.591 21.7752 48.5549 21.6881 48.5193C21.1753 48.3087 21.1753 48.3087 20.9332 48.1802C20.8616 48.1444 20.789 48.1144 20.7148 48.0846C20.4095 47.9613 20.1151 47.8134 19.8241 47.658C19.7408 47.6173 19.6584 47.5816 19.5727 47.547C19.3623 47.4615 19.1576 47.364 18.9526 47.2658C18.9325 47.2562 18.9124 47.2466 18.8917 47.2367C18.5621 47.0789 18.2395 46.9101 17.9194 46.7328C17.8166 46.6765 17.7126 46.6227 17.6084 46.5694C17.5882 46.559 17.5679 46.5486 17.5471 46.538C17.4391 46.4827 17.331 46.4276 17.2229 46.3725C16.3912 45.9489 16.3912 45.9489 16.0483 45.7407C15.9464 45.6806 15.843 45.6266 15.7376 45.5733C15.4095 45.4071 15.0905 45.2234 14.7704 45.0415C14.7318 45.0197 14.7318 45.0197 14.6925 44.9973C14.5214 44.9001 14.3507 44.8022 14.1802 44.7039C14.1503 44.6866 14.1203 44.6693 14.0894 44.6515C13.7631 44.4631 13.4375 44.2742 13.1181 44.0736C12.8437 43.9026 12.5605 43.7471 12.2787 43.5897C12.2744 43.6101 12.2701 43.6305 12.2657 43.6516C12.26 43.6786 12.2542 43.7057 12.2483 43.7336C12.2427 43.7603 12.2371 43.787 12.2313 43.8145C12.1429 44.1994 11.9207 44.5876 11.6558 44.8727C11.6341 44.8727 11.6125 44.8727 11.5902 44.8727C11.5826 44.8923 11.575 44.912 11.5671 44.9322C11.3531 45.3126 10.7616 45.5118 10.3669 45.6267C10.0258 45.7165 9.6815 45.7061 9.33177 45.7038C9.2548 45.704 9.17783 45.7042 9.10086 45.7044C8.89359 45.7049 8.68633 45.7043 8.47906 45.7035C8.28347 45.7029 8.08788 45.703 7.89229 45.7031C7.5049 45.7032 7.11751 45.7025 6.73012 45.7014C6.3552 45.7003 5.98028 45.6998 5.60535 45.7C5.19564 45.7002 4.78592 45.7001 4.3762 45.6995C4.3545 45.6994 4.3328 45.6994 4.31044 45.6994C4.27802 45.6993 4.27802 45.6993 4.24494 45.6993C4.07232 45.699 3.89969 45.6989 3.72707 45.6989C3.52378 45.699 3.3205 45.6985 3.11722 45.6976C3.04284 45.6974 2.96846 45.6973 2.89408 45.6974C2.17853 45.6983 2.17853 45.6983 1.85286 45.5818C1.8213 45.5713 1.78973 45.5608 1.75721 45.55C1.22971 45.3709 0.794688 45.0377 0.475865 44.5688C0.449747 44.5306 0.449747 44.5306 0.423101 44.4915C0.317169 44.3234 0.24187 44.1476 0.172598 43.9611C0.164521 43.9395 0.156443 43.9178 0.148121 43.8956C0.017305 43.5266 0.00732429 43.1664 0.00809913 42.7782C0.0079765 42.7198 0.00782551 42.6614 0.00764889 42.6031C0.00724902 42.4432 0.00725652 42.2834 0.00733397 42.1236C0.00734738 41.951 0.00698504 41.7784 0.00667437 41.6058C0.00613035 41.2678 0.00594955 40.9299 0.00591296 40.5919C0.00588177 40.3171 0.00574696 40.0422 0.00553926 39.7674C0.00496195 38.9875 0.00465912 38.2077 0.00470831 37.4278C0.00471093 37.3858 0.00471362 37.3438 0.00471632 37.3005C0.004719 37.2584 0.00472156 37.2164 0.00472432 37.173C0.00475096 36.4916 0.00412377 35.8101 0.003199 35.1286C0.00225616 34.4283 0.00180444 33.7279 0.00186103 33.0276C0.00188277 32.6347 0.00170396 32.2417 0.000996821 31.8488C0.000398479 31.5142 0.000258279 31.1796 0.000702413 30.8449C0.000915867 30.6744 0.000922684 30.5038 0.000351474 30.3333C-0.000167216 30.1768 -6.73406e-05 30.0203 0.000501305 29.8638C0.000601309 29.8076 0.000485388 29.7513 0.000117099 29.695C-0.00278402 29.22 0.047122 28.7352 0.273004 28.3111C0.284378 28.2889 0.295752 28.2666 0.307471 28.2437C0.401264 28.0649 0.506641 27.9045 0.639793 27.754C0.663249 27.7268 0.686705 27.6995 0.710871 27.6714C1.19142 27.1434 1.81928 26.865 2.52134 26.8669ZM1.44073 28.6376C1.18304 28.9776 1.18282 29.3336 1.18422 29.7441C1.18406 29.8025 1.18385 29.861 1.18361 29.9194C1.18308 30.0796 1.18315 30.2397 1.18333 30.3999C1.18342 30.5728 1.18294 30.7457 1.18254 30.9186C1.18185 31.2572 1.1817 31.5957 1.18176 31.9343C1.1818 32.2096 1.18168 32.4848 1.18143 32.7601C1.18136 32.8394 1.1813 32.9187 1.18123 32.9981C1.18119 33.0376 1.18116 33.077 1.18112 33.1177C1.1805 33.8643 1.18054 34.6109 1.18076 35.3574C1.18094 36.0401 1.18026 36.7227 1.17918 37.4054C1.17807 38.1067 1.17757 38.8079 1.17772 39.5092C1.1778 39.9027 1.17763 40.2963 1.17681 40.6899C1.17612 41.025 1.176 41.3601 1.17662 41.6952C1.17692 41.866 1.17696 42.0369 1.17628 42.2078C1.17567 42.3644 1.17582 42.521 1.17656 42.6777C1.1767 42.7341 1.17656 42.7906 1.17612 42.8471C1.17272 43.3079 1.24894 43.6958 1.54998 44.0548C1.80535 44.316 2.09029 44.4775 2.45263 44.4812C2.48239 44.481 2.51214 44.4808 2.5428 44.4806C2.59119 44.4809 2.59119 44.4809 2.64055 44.4812C2.74817 44.4817 2.85577 44.4814 2.96339 44.4812C3.04074 44.4814 3.11809 44.4816 3.19545 44.4819C3.40523 44.4825 3.61502 44.4825 3.82481 44.4823C3.95594 44.4822 4.08706 44.4823 4.21819 44.4824C4.25089 44.4824 4.25089 44.4824 4.28425 44.4825C4.32854 44.4825 4.37283 44.4826 4.41712 44.4826C4.83208 44.4831 5.24703 44.4829 5.66199 44.4825C6.04114 44.4822 6.42029 44.4826 6.79944 44.4834C7.18927 44.4843 7.5791 44.4846 7.96893 44.4844C8.18759 44.4842 8.40624 44.4843 8.62489 44.4849C8.83054 44.4854 9.03618 44.4853 9.24183 44.4847C9.31719 44.4845 9.39255 44.4846 9.46791 44.485C9.57102 44.4855 9.6741 44.4851 9.7772 44.4845C9.80681 44.4848 9.83642 44.4851 9.86693 44.4854C10.2428 44.481 10.5723 44.2991 10.8364 44.0287C11.1182 43.6863 11.2018 43.2797 11.2011 42.8443C11.2011 42.8097 11.2012 42.7751 11.2013 42.7395C11.2015 42.6236 11.2014 42.5076 11.2014 42.3916C11.2015 42.3085 11.2016 42.2255 11.2017 42.1424C11.202 41.9634 11.2022 41.7844 11.2023 41.6054C11.2025 41.3223 11.203 41.0393 11.2036 40.7562C11.2038 40.6593 11.2041 40.5625 11.2043 40.4656C11.2043 40.4414 11.2044 40.4171 11.2044 40.3922C11.205 40.1167 11.2055 39.8412 11.206 39.5657C11.2061 39.5405 11.2061 39.5153 11.2062 39.4894C11.2069 39.0814 11.2072 38.6734 11.2075 38.2654C11.2078 37.8463 11.2085 37.4272 11.2097 37.0081C11.2104 36.7497 11.2108 36.4914 11.2106 36.233C11.2104 36.0349 11.211 35.8368 11.2118 35.6387C11.212 35.5576 11.212 35.4764 11.2118 35.3952C11.2115 35.2843 11.212 35.1735 11.2127 35.0626C11.2125 35.0306 11.2122 34.9985 11.2119 34.9654C11.2143 34.7624 11.2496 34.6095 11.3607 34.4394C11.4744 34.3351 11.6037 34.3072 11.7521 34.2854C11.9136 34.2955 12.0607 34.362 12.1803 34.4732C12.3039 34.6651 12.3296 34.8311 12.3236 35.0574C12.3232 35.1032 12.3232 35.1032 12.3228 35.1499C12.3218 35.2517 12.3199 35.3534 12.3179 35.4551C12.317 35.5283 12.3162 35.6014 12.3154 35.6746C12.3137 35.832 12.3117 35.9893 12.3094 36.1466C12.3059 36.3957 12.304 36.6447 12.3025 36.8938C12.3022 36.9569 12.3022 36.9569 12.3018 37.0213C12.3013 37.1074 12.3007 37.1935 12.3002 37.2795C12.2967 37.8591 12.292 38.4387 12.283 39.0183C12.277 39.4096 12.2735 39.8008 12.2729 40.1921C12.2725 40.3991 12.2708 40.6058 12.2659 40.8127C12.2056 41.6101 12.2056 41.6101 12.4152 42.3502C12.5814 42.5126 12.7625 42.5941 12.982 42.6537C13.0944 42.6864 13.1786 42.7382 13.2767 42.8026C13.3326 42.835 13.3886 42.8674 13.4446 42.8996C13.5079 42.9362 13.5712 42.9728 13.6344 43.0095C13.6653 43.0274 13.6962 43.0452 13.7281 43.0637C13.8449 43.1316 13.9611 43.2006 14.0774 43.2695C14.3869 43.453 14.6994 43.6302 15.0139 43.8045C15.1907 43.9026 15.3665 44.002 15.5408 44.1046C15.8468 44.2841 16.1592 44.4516 16.4704 44.6212C16.7354 44.7656 16.9994 44.9117 17.2621 45.0605C17.5221 45.2075 17.7845 45.3476 18.0508 45.4819C18.1192 45.5166 18.1872 45.5518 18.2553 45.5872C18.2787 45.5993 18.3021 45.6115 18.3262 45.624C18.3706 45.647 18.4149 45.6701 18.4591 45.6932C18.5936 45.7628 18.7302 45.8246 18.8686 45.8857C18.9441 45.9238 19.0191 45.9624 19.094 46.0017C19.3332 46.126 19.5739 46.2469 19.8153 46.3668C19.8667 46.3925 19.8667 46.3925 19.9191 46.4187C20.1002 46.5084 20.2817 46.5911 20.4689 46.6663C20.5632 46.7054 20.6532 46.7513 20.7435 46.7994C20.9465 46.9055 21.1515 46.9952 21.3644 47.078C21.5053 47.1333 21.6422 47.1926 21.7783 47.2595C21.9916 47.3627 22.2091 47.454 22.4279 47.5443C22.479 47.5656 22.479 47.5656 22.5313 47.5873C22.7323 47.6698 22.9344 47.7449 23.1405 47.8128C23.2297 47.8442 23.315 47.8808 23.4012 47.92C24.284 48.3041 25.2397 48.5428 26.1798 48.7219C26.2266 48.731 26.2266 48.731 26.2744 48.7403C26.4645 48.7689 26.6561 48.7619 26.8478 48.762C26.8894 48.7624 26.931 48.7628 26.9739 48.7632C27.4741 48.764 27.9556 48.682 28.444 48.5805C28.4814 48.5728 28.4814 48.5728 28.5196 48.5649C29.199 48.4233 29.8406 48.2005 30.4915 47.9565C30.6628 47.8924 30.8351 47.8324 31.0087 47.775C31.1338 47.7296 31.2523 47.6716 31.3722 47.6135C31.4966 47.5563 31.6233 47.5143 31.7533 47.4726C31.7533 47.4503 31.7533 47.428 31.7533 47.4051C31.7819 47.4012 31.8105 47.3972 31.8399 47.3932C31.9497 47.3714 32.0364 47.3384 32.138 47.291C32.1928 47.2656 32.1928 47.2656 32.2487 47.2398C32.2885 47.221 32.3283 47.2023 32.3681 47.1835C32.4102 47.1638 32.4523 47.1441 32.4944 47.1244C32.6301 47.0609 32.7655 46.9967 32.9008 46.9324C32.9232 46.9217 32.9457 46.9111 32.9688 46.9001C33.8866 46.464 34.7987 46.0132 35.683 45.5082C35.8624 45.406 36.0443 45.3092 36.2265 45.2125C36.5788 45.0247 36.9242 44.8257 37.2684 44.6226C37.357 44.5704 37.4459 44.5184 37.5347 44.4665C38.0823 44.1463 38.6248 43.8176 39.1608 43.4774C39.2881 43.397 39.4161 43.32 39.5481 43.2478C39.6966 43.1663 39.8366 43.0747 39.9774 42.9798C40.1726 42.8491 40.3726 42.7268 40.5727 42.6041C40.96 42.3662 41.3413 42.1196 41.7201 41.8677C41.7558 41.8439 41.7558 41.8439 41.7922 41.8197C41.8812 41.7605 41.9702 41.7012 42.0592 41.6417C42.1934 41.552 42.328 41.463 42.4631 41.3745C42.8711 41.107 43.276 40.8355 43.6775 40.5577C43.7121 40.5338 43.7467 40.5099 43.7823 40.4853C43.8155 40.4623 43.8486 40.4394 43.8828 40.4158C44.0129 40.3275 44.1454 40.2434 44.2787 40.1602C44.2999 40.1442 44.3211 40.1283 44.343 40.1119C44.343 40.0896 44.343 40.0673 44.343 40.0444C44.362 40.0405 44.381 40.0366 44.4006 40.0326C44.4803 40.0087 44.5336 39.9762 44.6022 39.9282C44.6264 39.9114 44.6506 39.8946 44.6755 39.8773C44.701 39.8593 44.7265 39.8413 44.7528 39.8228C44.8061 39.7857 44.8594 39.7486 44.9126 39.7115C44.9386 39.6933 44.9645 39.6751 44.9913 39.6564C45.0862 39.5901 45.1817 39.525 45.2774 39.4598C45.4177 39.3635 45.5563 39.2649 45.6941 39.1649C45.8047 39.0852 45.916 39.0066 46.0274 38.928C46.4611 38.6215 46.8912 38.3095 47.3205 37.9965C47.5052 37.8621 47.6913 37.7299 47.8781 37.5986C47.9348 37.5587 47.9913 37.5185 48.0478 37.4782C48.0743 37.4595 48.1008 37.4407 48.1281 37.4214C48.1532 37.3994 48.1532 37.3994 48.1789 37.3769C48.1789 37.3547 48.1789 37.3324 48.1789 37.3094C48.2068 37.299 48.2068 37.299 48.2353 37.2883C48.3367 37.2254 48.3927 37.1386 48.4576 37.0393C48.4771 37.0098 48.4771 37.0098 48.4969 36.9798C48.8034 36.5034 48.8711 35.9515 48.7816 35.3938C48.6401 34.8651 48.3192 34.4652 47.8706 34.185C47.7666 34.1246 47.6681 34.077 47.556 34.0342C47.5244 34.0216 47.5244 34.0216 47.4922 34.0086C47.0635 33.8466 46.5879 33.8847 46.1745 34.0739C46.1322 34.0944 46.09 34.1149 46.0478 34.1355C46.0046 34.1558 45.9614 34.1759 45.9181 34.1961C45.8017 34.251 45.6863 34.3079 45.5712 34.3654C45.4467 34.4275 45.3219 34.489 45.1972 34.5504C45.1321 34.5825 45.0671 34.6146 45.0022 34.6468C44.8402 34.7269 44.6777 34.8046 44.5133 34.8791C44.3871 34.937 44.2627 34.9986 44.1381 35.0598C43.9273 35.1634 43.7157 35.2651 43.5036 35.3657C43.3932 35.4181 43.283 35.4709 43.1728 35.5237C42.8234 35.6913 42.4739 35.8586 42.1218 36.02C41.9355 36.1055 41.752 36.1944 41.5706 36.2901C41.2971 36.4345 41.0157 36.5597 40.7345 36.687C40.5073 36.7903 40.2836 36.8979 40.0627 37.0147C39.8789 37.1114 39.6909 37.1954 39.5007 37.2779C39.38 37.332 39.263 37.3927 39.1456 37.4538C38.8985 37.5824 38.6472 37.6997 38.3945 37.8159C38.3091 37.8552 38.2238 37.8946 38.1384 37.9341C38.1175 37.9437 38.0965 37.9534 38.075 37.9634C37.9033 38.0429 37.7328 38.1248 37.5625 38.2073C37.453 38.2601 37.3432 38.311 37.2317 38.3589C36.9323 38.4893 36.7589 38.6144 36.5728 38.8964C36.2462 39.3 35.7986 39.5335 35.327 39.7067C35.302 39.7175 35.2771 39.7284 35.2514 39.7395C34.9143 39.8719 34.5664 39.8904 34.2098 39.8886C34.1617 39.8888 34.1136 39.889 34.0654 39.8892C33.9346 39.8897 33.8038 39.8895 33.6729 39.8893C33.5313 39.8891 33.3897 39.8895 33.248 39.8899C32.9712 39.8905 32.6944 39.8905 32.4175 39.8903C32.1925 39.8902 31.9675 39.8902 31.7426 39.8904C31.7105 39.8904 31.6784 39.8905 31.6453 39.8905C31.5802 39.8905 31.515 39.8906 31.4498 39.8906C30.8396 39.8911 30.2294 39.8909 29.6191 39.8905C29.0609 39.8902 28.5026 39.8906 27.9444 39.8914C27.3707 39.8923 26.797 39.8926 26.2233 39.8924C25.9014 39.8922 25.5795 39.8923 25.2576 39.8929C24.9838 39.8934 24.7099 39.8934 24.4361 39.8928C24.2965 39.8926 24.1568 39.8925 24.0171 39.893C23.8893 39.8935 23.7614 39.8933 23.6336 39.8927C23.5873 39.8925 23.5411 39.8926 23.4949 39.893C23.0643 39.896 23.0643 39.896 22.8684 39.7405C22.7641 39.6127 22.7102 39.4789 22.6881 39.3142C22.7146 39.1301 22.7632 38.9899 22.9012 38.8668C23.0368 38.7679 23.126 38.7571 23.2882 38.7572C23.3281 38.7571 23.3681 38.7571 23.4092 38.757C23.4538 38.7571 23.4983 38.7572 23.5429 38.7573C23.59 38.7573 23.6372 38.7573 23.6843 38.7573C23.7871 38.7572 23.8898 38.7573 23.9926 38.7574C24.1597 38.7576 24.3269 38.7576 24.4941 38.7576C24.7054 38.7575 24.9167 38.7575 25.128 38.7576C25.5436 38.7578 25.9592 38.7575 26.3748 38.7571C26.4403 38.757 26.5057 38.7569 26.5712 38.7569C26.7037 38.7567 26.8362 38.7566 26.9687 38.7564C27.3096 38.7561 27.6505 38.7557 27.9914 38.7555C28.0256 38.7554 28.0598 38.7554 28.095 38.7554C28.6485 38.7549 29.202 38.7551 29.7555 38.7555C30.3241 38.7558 30.8927 38.7554 31.4613 38.7543C31.8117 38.7537 32.1622 38.7536 32.5126 38.7544C32.7532 38.7548 32.9938 38.7546 33.2344 38.7537C33.373 38.7532 33.5116 38.7531 33.6501 38.7538C34.4292 38.7674 34.4292 38.7674 35.163 38.5249C35.1954 38.5081 35.2278 38.4913 35.2612 38.474C35.7663 38.1963 36.055 37.7501 36.2275 37.2044C36.3596 36.721 36.2932 36.2069 36.0728 35.7668C35.7823 35.2445 35.3697 34.8924 34.8004 34.7243C34.5241 34.6548 34.2507 34.663 33.9681 34.6655C33.9079 34.6656 33.8477 34.6657 33.7875 34.6657C33.6586 34.6659 33.5297 34.6664 33.4008 34.6671C33.1967 34.6681 32.9926 34.6682 32.7885 34.6681C32.2084 34.668 31.6283 34.6687 31.0482 34.6712C30.7272 34.6726 30.4063 34.673 30.0854 34.6724C29.8827 34.672 29.6801 34.6729 29.4775 34.6746C29.3512 34.6753 29.2249 34.675 29.0986 34.6743C29.0403 34.6742 28.9821 34.6746 28.9238 34.6755C28.5546 34.6807 28.3276 34.647 28.0485 34.3719C28.021 34.3465 27.9935 34.3211 27.9652 34.295C27.9131 34.2469 27.8613 34.1983 27.8098 34.1495C27.6526 34.0058 27.4858 33.8747 27.3193 33.7425C27.2647 33.699 27.2103 33.6551 27.156 33.611C26.3623 32.9697 25.4867 32.3828 24.5733 31.9408C24.5249 31.9173 24.5249 31.9173 24.4756 31.8933C23.5013 31.4208 22.4302 30.9261 21.3529 30.7745C21.2619 30.7591 21.2619 30.7591 21.1522 30.7269C20.9559 30.6753 20.7539 30.6624 20.5526 30.645C20.4844 30.6391 20.4163 30.6325 20.3481 30.6259C20.016 30.5955 19.6834 30.5821 19.3503 30.5721C19.3136 30.571 19.3136 30.571 19.2762 30.5699C18.6188 30.5507 17.9615 30.5521 17.304 30.5531C17.1288 30.5533 16.9536 30.5533 16.7784 30.5533C16.4486 30.5534 16.1189 30.5537 15.7892 30.554C15.413 30.5544 15.0367 30.5546 14.6605 30.5548C13.8884 30.5551 13.1163 30.5557 12.3442 30.5565C12.3438 30.6037 12.3438 30.6037 12.3433 30.6519C12.3419 30.7697 12.3398 30.8874 12.3374 31.0051C12.3365 31.0559 12.3358 31.1067 12.3354 31.1575C12.3347 31.2309 12.3331 31.3042 12.3314 31.3775C12.3304 31.4436 12.3304 31.4436 12.3294 31.5109C12.3027 31.6984 12.2328 31.8232 12.0963 31.9535C11.9292 32.0682 11.7518 32.0622 11.5574 32.0421C11.3782 31.9582 11.3122 31.8472 11.2295 31.6707C11.1908 31.5504 11.1925 31.4354 11.1921 31.3093C11.1919 31.2755 11.1919 31.2755 11.1918 31.2411C11.1915 31.1924 11.1913 31.1437 11.1912 31.095C11.191 31.0176 11.1905 30.9402 11.1899 30.8628C11.1882 30.6427 11.1866 30.4226 11.1861 30.2025C11.1857 30.0677 11.1848 29.9329 11.1834 29.7981C11.183 29.7471 11.1828 29.696 11.1829 29.645C11.1835 29.1402 11.0829 28.7994 10.7429 28.4314C10.5221 28.2152 10.2235 28.0542 9.91399 28.0534C9.88715 28.0532 9.86031 28.0531 9.83266 28.0529C9.80336 28.0529 9.77405 28.0529 9.74386 28.0529C9.71259 28.0528 9.68131 28.0527 9.64909 28.0525C9.54402 28.0522 9.43895 28.052 9.33387 28.0519C9.25864 28.0517 9.18341 28.0515 9.10817 28.0512C8.8608 28.0505 8.61343 28.0502 8.36605 28.0498C8.28085 28.0497 8.19565 28.0496 8.11045 28.0494C7.75593 28.0489 7.40142 28.0484 7.0469 28.0481C6.95494 28.0481 6.86297 28.048 6.77101 28.0479C6.74816 28.0479 6.7253 28.0479 6.70175 28.0479C6.33198 28.0476 5.96222 28.0467 5.59246 28.0456C5.21237 28.0445 4.83229 28.0439 4.45221 28.0438C4.23899 28.0437 4.02578 28.0434 3.81256 28.0426C3.61178 28.0418 3.41101 28.0416 3.21024 28.042C3.13677 28.042 3.0633 28.0418 2.98983 28.0413C2.34421 28.0375 1.87499 28.0986 1.44073 28.6376Z"
                                fill="var(--primary)"
                              />
                            </svg>
                          ),
                        },
                        {
                          delay: "0.6s",
                          title: "We Are Certified",
                          icon: (
                            <svg
                              className="group-hover:[--primary:#fff]"
                              width="38"
                              height="48"
                              viewBox="0 0 38 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.0846 31.3413L32.1023 31.2905C32.2301 30.8106 32.4297 30.3528 32.6944 29.9325C33.0304 29.5818 33.4185 29.2851 33.8449 29.0526C34.705 28.6139 35.4189 27.9346 35.8998 27.0974C36.2351 26.1978 36.3092 25.2216 36.1134 24.2817C36.0237 23.7817 36.0103 23.271 36.0737 22.767C36.2251 22.3083 36.4449 21.8751 36.7258 21.4822C37.3172 20.7016 37.6726 19.7679 37.75 18.7916C37.6723 17.8158 37.3172 16.8826 36.7267 16.102C36.4452 15.7088 36.225 15.2753 36.0735 14.8162C36.0101 14.3125 36.0235 13.8021 36.1132 13.3025C36.3088 12.3626 36.2351 11.3866 35.9006 10.4868C35.4195 9.65036 34.7061 8.97152 33.8468 8.53261C33.4199 8.29955 33.0314 8.00207 32.6952 7.65063C32.4304 7.23033 32.2305 6.77251 32.1022 6.29261C31.8805 5.35314 31.3944 4.49678 30.7015 3.8248C29.9134 3.28319 28.9832 2.98607 28.0271 2.97063C27.5415 2.94916 27.0623 2.85169 26.607 2.68178C26.2007 2.42463 25.8358 2.10738 25.5246 1.74084C24.9187 0.980037 24.1023 0.414411 23.1771 0.114488C22.241 -0.0179449 21.2867 0.127446 20.4325 0.532612C19.9776 0.73228 19.4943 0.85938 19 0.909279C18.5061 0.859561 18.0232 0.732561 17.5687 0.532925C16.7145 0.127097 15.7595 -0.0178348 14.8232 0.116258C13.8985 0.415085 13.0822 0.97965 12.4764 1.73949C12.1657 2.10658 11.8007 2.42391 11.394 2.68042C10.9386 2.85034 10.4594 2.9478 9.97385 2.96928C9.01778 2.98471 8.0875 3.28183 7.29948 3.82345C6.6064 4.49588 6.12003 5.35246 5.89771 6.2922C5.76987 6.77211 5.57026 7.22995 5.30562 7.65022C4.96959 8.00087 4.58153 8.29766 4.1551 8.53011C3.29503 8.96879 2.58108 9.64811 2.10021 10.4853C1.76486 11.385 1.6908 12.3611 1.88656 13.301C1.97632 13.801 1.98971 14.3117 1.92625 14.8157C1.77493 15.2744 1.55508 15.7076 1.27417 16.1005C0.6827 16.8813 0.32729 17.8151 0.25 18.7916C0.327726 19.7673 0.682788 20.7005 1.27333 21.4812C1.55476 21.8743 1.77497 22.3078 1.92646 22.767C1.98997 23.2708 1.97659 23.7814 1.88677 24.2812C1.69116 25.221 1.76485 26.197 2.09938 27.0969C2.58046 27.9333 3.29393 28.6121 4.15323 29.051C4.58013 29.2841 4.96855 29.5816 5.30479 29.933C5.56958 30.3533 5.7695 30.8111 5.89781 31.291L5.91708 31.3465C5.91375 31.3519 5.90813 31.3547 5.9049 31.3602L0.531771 40.6666C0.335382 41.0064 0.239012 41.3947 0.253768 41.7869C0.268523 42.1791 0.393805 42.5592 0.615172 42.8832C0.836539 43.2073 1.14498 43.4623 1.50494 43.6187C1.8649 43.775 2.26173 43.8265 2.64969 43.7672L6.27615 43.2158L7.61281 46.6348C7.75427 47.001 7.99707 47.3194 8.31282 47.5527C8.62858 47.7859 9.00422 47.9245 9.39583 47.9521C9.44972 47.9562 9.50364 47.9582 9.5576 47.9582C9.92284 47.9591 10.2818 47.8632 10.5979 47.6802C10.914 47.4972 11.176 47.2337 11.3571 46.9166L16.9225 37.2757C17.1437 37.2045 17.3592 37.1263 17.5674 37.0502C18.0223 36.8506 18.5057 36.7236 19 36.6739C19.4938 36.7236 19.9768 36.8506 20.4312 37.0502C20.6396 37.1265 20.8574 37.2021 21.0787 37.2735L21.0833 37.2873L26.6426 46.9166C26.8237 47.2337 27.0857 47.4972 27.4018 47.6802C27.7179 47.8632 28.0768 47.9591 28.4421 47.9582C28.496 47.9582 28.5499 47.9562 28.6039 47.9521C28.9957 47.9244 29.3716 47.7857 29.6876 47.5522C30.0036 47.3188 30.2465 47.0002 30.3881 46.6338L31.7238 43.2158L35.3488 43.7672C35.7368 43.8268 36.1338 43.7756 36.494 43.6193C36.8542 43.4631 37.1629 43.2082 37.3845 42.884C37.606 42.5599 37.7315 42.1797 37.7463 41.7874C37.7611 41.395 37.6647 41.0065 37.4682 40.6666L32.0846 31.3413ZM9.55281 45.8749L7.91406 41.6807C7.82726 41.461 7.6686 41.2771 7.46393 41.1591C7.25926 41.041 7.02065 40.9958 6.78698 41.0307L2.33635 41.7082L7.06667 33.5148C7.13902 33.6005 7.21645 33.6819 7.29854 33.7583C8.08656 34.3 9.01684 34.5971 9.97292 34.6125C10.4585 34.634 10.9377 34.7314 11.393 34.9014C11.7993 35.1585 12.1642 35.4758 12.4754 35.8423C13.0218 36.4865 13.707 36.9986 14.4796 37.3401L9.55281 45.8749ZM21.1458 35.093C20.4653 34.8016 19.7391 34.6316 19 34.5905C18.2608 34.6311 17.5345 34.8012 16.8542 35.093C16.3687 35.33 15.8339 35.4485 15.2937 35.4389C14.7774 35.2025 14.3252 34.8456 13.9754 34.3982C13.5054 33.8501 12.9433 33.3882 12.3143 33.0337C11.6438 32.7478 10.9285 32.5813 10.2007 32.5416C9.64827 32.5408 9.10443 32.4046 8.61687 32.1448C8.25368 31.7048 7.99895 31.1856 7.87323 30.6291C7.67985 29.9213 7.36625 29.2521 6.94615 28.6505C6.46974 28.1019 5.90099 27.6409 5.26562 27.2884C4.75667 27.0381 4.31651 26.6673 3.98333 26.2082C3.84206 25.6556 3.833 25.0775 3.95688 24.5207C4.0804 23.7909 4.08177 23.0456 3.96094 22.3153C3.76686 21.6217 3.45549 20.9664 3.04031 20.3778C2.67881 19.9146 2.4361 19.3701 2.33333 18.7916C2.43596 18.2131 2.67869 17.6686 3.04031 17.2056C3.45589 16.6173 3.76729 15.9619 3.96094 15.2681C4.0818 14.5377 4.08043 13.7923 3.95688 13.0624C3.83275 12.5056 3.84218 11.9274 3.98438 11.3749C4.31719 10.9148 4.75757 10.5432 5.26708 10.2925C5.90277 9.94049 6.47189 9.47985 6.94865 8.93147C7.36777 8.33008 7.68055 7.66119 7.87333 6.95397C7.99961 6.39721 8.25462 5.8778 8.61792 5.4374C9.10547 5.17761 9.64932 5.04137 10.2018 5.04063C10.9297 5.00087 11.6451 4.83423 12.3156 4.54824C12.9451 4.1943 13.5074 3.7324 13.9768 3.18365C14.3267 2.73661 14.7788 2.3801 15.2951 2.14407C15.8349 2.13544 16.3691 2.25391 16.8546 2.4899C17.5349 2.78131 18.261 2.95144 19 2.99261C19.7392 2.95205 20.4655 2.78196 21.1458 2.49011C21.6317 2.25421 22.1662 2.13575 22.7062 2.14428C23.2226 2.38065 23.6748 2.73752 24.0246 3.1849C24.4946 3.73309 25.0567 4.1949 25.6857 4.54949C26.3562 4.83534 27.0715 5.00187 27.7993 5.04157C28.3517 5.04231 28.8956 5.17854 29.3831 5.43834C29.7463 5.87835 30.0011 6.39755 30.1268 6.95407C30.3202 7.66183 30.6337 8.33109 31.0539 8.93261C31.5303 9.48122 32.099 9.94221 32.7344 10.2947C33.2433 10.5451 33.6835 10.9159 34.0167 11.3749C34.1579 11.9275 34.167 12.5056 34.0431 13.0624C33.9196 13.7922 33.9182 14.5375 34.0391 15.2678C34.2331 15.9615 34.5445 16.6167 34.9597 17.2053C35.3212 17.6685 35.5639 18.2131 35.6667 18.7916C35.564 19.37 35.3213 19.9145 34.9597 20.3775C34.5441 20.9658 34.2327 21.6212 34.0391 22.315C33.9182 23.0454 33.9196 23.7908 34.0431 24.5207C34.1672 25.0775 34.1578 25.6558 34.0156 26.2082C33.6828 26.6683 33.2424 27.0399 32.7329 27.2906C32.0972 27.6427 31.5281 28.1033 31.0514 28.6517C30.6322 29.2531 30.3195 29.9219 30.1267 30.6292C30.0004 31.186 29.7454 31.7055 29.3821 32.1459C28.8945 32.4057 28.3507 32.542 27.7982 32.5427C27.0703 32.5825 26.3549 32.7491 25.6844 33.0351C25.0549 33.389 24.4926 33.8509 24.0232 34.3997C23.6733 34.8467 23.2212 35.2033 22.7049 35.4393C22.1653 35.4472 21.6313 35.3286 21.1458 35.093ZM31.2135 41.0305C30.9799 40.9959 30.7414 41.0413 30.5368 41.1593C30.3322 41.2773 30.1735 41.461 30.0865 41.6805L28.4472 45.8749L23.5201 37.3401C24.2924 36.999 24.9774 36.4874 25.5236 35.8437C25.8343 35.4766 26.1993 35.1592 26.606 34.9027C27.0614 34.7328 27.5406 34.6353 28.0261 34.6139C28.9822 34.5984 29.9125 34.3013 30.7005 33.7597C30.783 33.6829 30.8608 33.6012 30.9334 33.515L35.6636 41.7082L31.2135 41.0305Z"
                                fill="var(--primary)"
                              />
                            </svg>
                          ),
                        },
                        {
                          delay: "0.8s",
                          title: "Happy Clients",
                          icon: (
                            <svg
                              className="group-hover:[--primary:#fff]"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M31.1013 11.0068C31.1327 11.0133 31.1642 11.0198 31.1967 11.0265C31.5767 11.1071 31.9259 11.2193 32.2815 11.3782C32.3338 11.3992 32.3861 11.4202 32.4384 11.441C33.3388 11.8104 34.2591 12.4387 34.8847 13.2067C34.9363 13.268 34.9907 13.323 35.0478 13.3788C35.2061 13.5393 35.3321 13.7256 35.4617 13.9106C35.4821 13.9393 35.5025 13.968 35.5235 13.9975C35.6495 14.1783 35.7603 14.3652 35.8673 14.5585C35.9123 14.6385 35.9595 14.7156 36.0089 14.7927C36.0827 14.9131 36.1331 15.0373 36.182 15.1702C36.2183 15.2678 36.2578 15.3635 36.2978 15.4596C36.3792 15.6606 36.4479 15.8637 36.5109 16.0715C36.5217 16.1056 36.5324 16.1397 36.5435 16.1748C36.6479 16.5231 36.7032 16.8787 36.7595 17.2379C36.7683 17.2914 36.7786 17.3448 36.7907 17.3977C36.8118 17.5251 36.8132 17.6518 36.8149 17.7808C36.8153 17.8093 36.8157 17.8378 36.8162 17.8671C36.8243 18.572 36.791 19.2302 36.642 19.9207C36.6354 19.9531 36.6287 19.9856 36.6219 20.0189C36.4113 21.0354 35.9361 22.0213 35.2978 22.8245C35.2764 22.853 35.255 22.8815 35.2329 22.9109C34.2418 24.2262 32.841 25.0561 31.298 25.4919C31.2611 25.5024 31.2243 25.513 31.1863 25.5238C30.3893 25.7261 29.5177 25.768 28.7078 25.6373C28.6403 25.6266 28.5727 25.6174 28.5049 25.6082C27.9616 25.5299 27.3585 25.389 26.8719 25.1205C26.7876 25.0756 26.7102 25.0417 26.6199 25.0086C25.941 24.7534 25.317 24.2565 24.795 23.7518C24.7259 23.6856 24.656 23.6227 24.5831 23.561C24.4577 23.4514 24.3548 23.3252 24.2491 23.1959C24.2213 23.1631 24.1935 23.1303 24.1648 23.0965C23.6584 22.4964 23.2855 21.8255 22.9704 21.1025C22.9535 21.0641 22.9365 21.0258 22.9191 20.9863C22.8611 20.8382 22.817 20.688 22.7737 20.5348C22.7656 20.5065 22.7575 20.4782 22.7491 20.449C22.7327 20.3917 22.7164 20.3344 22.7001 20.277C22.6836 20.2194 22.6666 20.1619 22.6492 20.1045C22.5945 19.9233 22.5527 19.7451 22.5237 19.5578C22.5198 19.5342 22.5158 19.5107 22.5117 19.4865C22.4467 19.0792 22.4386 18.6656 22.4377 18.2536C22.4376 18.2304 22.4376 18.2072 22.4375 18.1833C22.4374 17.6527 22.4768 17.126 22.6098 16.6118C22.6179 16.5777 22.6259 16.5437 22.6343 16.5086C22.8605 15.5581 23.2315 14.6846 23.8106 13.9041C23.8567 13.8416 23.9013 13.7781 23.9458 13.7143C24.0557 13.563 24.1798 13.4259 24.3043 13.2873C24.3608 13.2234 24.4144 13.1596 24.4663 13.0918C24.5492 12.9929 24.6377 12.911 24.7343 12.8266C24.7823 12.784 24.8294 12.7403 24.8755 12.6955C25.8593 11.7416 27.2038 11.1 28.544 10.9393C28.5898 10.933 28.6357 10.9266 28.6815 10.9203C29.4907 10.8158 30.3025 10.8395 31.1013 11.0068Z"
                                fill="var(--primary)"
                              />
                            </svg>
                          ),
                        },
                        {
                          delay: "1.0s",
                          title: "Duration of Service",
                          icon: (
                            <svg
                              className="group-hover:[--primary:#fff]"
                              width="50"
                              height="50"
                              viewBox="0 0 50 50"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M42.1539 31.5533L33.6539 35.1442C33.669 35.0381 33.6842 34.9321 33.6842 34.8184C33.6842 33.1669 32.3433 31.826 30.6918 31.826H24.5705C24.3205 31.826 24.0781 31.773 23.8509 31.6669L18.6615 29.3184C17.8509 28.9548 16.9493 28.7578 16.063 28.7578H11.8357V30.273H16.063C16.7372 30.273 17.419 30.4169 18.0402 30.6972L23.2296 33.0457C23.6539 33.2351 24.1084 33.3336 24.5781 33.3336H30.6993C31.5175 33.3336 32.1766 34.0002 32.1766 34.8108C32.1766 35.6215 31.5099 36.2881 30.6993 36.2881H22.7675V37.8033H30.6918C31.2145 37.8033 31.6993 37.6593 32.1236 37.4245V37.4321L42.7372 32.9396C43.616 32.5684 44.5781 32.576 45.4493 32.9548C46.116 33.2502 46.6615 33.7275 47.0251 34.3487L28.2902 44.2881C26.8584 45.0457 25.1539 45.1972 23.6084 44.7048L14.4418 41.7578L11.8281 41.7199V43.2351H14.0933L23.1463 46.1442C23.8963 46.3866 24.669 46.5002 25.4493 46.5002C26.6766 46.5002 27.9039 46.2048 28.9948 45.6215L48.9569 35.0457L48.7372 34.4245C48.2751 33.1366 47.3206 32.1214 46.063 31.5684C44.8054 31.0305 43.419 31.0154 42.1539 31.5533Z"
                                fill="var(--primary)"
                              />
                              <path
                                d="M10.1908 44.4247V28.3413C10.1908 27.508 9.509 26.8262 8.67566 26.8262H1.04688V28.3413H8.67566V44.4322H1.04688V45.9474H8.67566C9.509 45.9398 10.1908 45.258 10.1908 44.4247Z"
                                fill="var(--primary)"
                              />
                              <path
                                d="M6.68347 42.0682C6.68347 42.6515 6.2062 43.1288 5.62287 43.1288C5.03196 43.1288 4.55469 42.6515 4.55469 42.0682C4.55469 41.4773 5.03196 41 5.62287 41C6.2062 41 6.68347 41.4773 6.68347 42.0682Z"
                                fill="var(--primary)"
                              />
                            </svg>
                          ),
                        },
                      ].map((item) => (
                        <div className="sm:w-1/2 w-full mb-5" key={item.title}>
                          <div
                            className="relative bg-white p-6.25 rounded-2xl group hover:bg-primary duration-500 wow fadeInUp"
                            data-wow-delay={item.delay}
                            data-wow-duration="0.7s"
                          >
                            <div className="size-12.5 rounded-full flex items-center justify-center mb-3.75">
                              <span className="icon-cell">{item.icon}</span>
                            </div>
                            <div className="overflow-hidden">
                              <h3 className="text-[22px] mb-3.75 duration-500 group-hover:text-white">
                                {item.title}
                              </h3>
                              <p className="md:text-lg text-sm font-normal text-[#496A77] duration-500 group-hover:text-white mb-0">
                                Our expert ophthalmologists provide specialized
                                patient.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="xl:w-1/2 w-full mb-7.5 lg:!ps-12 wow fadeInUp before-after-slider"
                    style={{ ["--position" as string]: "50%" }}
                    data-wow-delay="0.2s"
                    data-wow-duration="0.7s"
                  >
                    <div className="image-container relative overflow-hidden md:!h-161.25 sm:!h-125 !h-95 object-cover rounded-2xxl box-content">
                      <div className="[clip-path:polygon(0_0,var(--position)_0,var(--position)_100%,0%_100%)] absolute inset-0">
                        <img
                          className="image-before size-full object-cover object-center"
                          src="src/images/compare/before1.webp"
                          alt="before1"
                        />
                      </div>
                      <img
                        className="image-after size-full object-cover object-center"
                        src="src/images/compare/after1.webp"
                        alt="after1"
                      />
                      <input
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={50}
                        aria-label="Percentage of before photo shown"
                        className="slider absolute inset-0 cursor-pointer opacity-0 size-ful"
                      />
                      <div
                        className="absolute inset-0 w-1 h-full bg-white left-[var(--position)] -translate-x-1/2 pointer-events-none slider-line z-1"
                        aria-hidden="true"
                      />
                      <div
                        className="absolute p-2 top-1/2 left-[var(--position)] -translate-1/2 pointer-events-none flex gap-3 items-center justify-center text-xl bg-primary text-white rounded-full sm:size-20 size-15 z-0 slider-button"
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-angle-left sm:text-lg" />
                        <i className="fa-solid fa-angle-right sm:text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10">
              <div className="container">
                <div className="row content-wrapper">
                  <div className="w-full">
                    <div
                      className="sm:mb-7.5 mb-5 wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="0.8s"
                    >
                      <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-2.5">
                        All Locations
                      </h2>
                      <p className="sm:text-lg text-base font-light">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="row">
                      {[
                        { country: "Canada", map: "map2.webp", delay: "0.4s" },
                        {
                          country: "United State",
                          map: "map1.webp",
                          delay: "0.6s",
                        },
                        { country: "Canada", map: "map2.webp", delay: "0.8s" },
                      ].map((loc, idx) => (
                        <div
                          className="xl:w-1/3 md:w-1/2 mb-7.5 wow fadeInUp"
                          data-wow-delay={loc.delay}
                          data-wow-duration="0.8s"
                          key={`${loc.country}-${idx}`}
                        >
                          <div className="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
                            <div className="min-w-75 h-75 rounded-2xl overflow-hidden">
                              <img
                                src={`src/images/map/${loc.map}`}
                                alt=""
                                className="size-full object-cover"
                              />
                            </div>
                            <div className="p-6.25">
                              <h3 className="flex items-center gap-2.5 text-[20px] font-semibold font-base">
                                {loc.country}
                              </h3>
                              <p className="mb-2.5">Address:</p>
                              <p className="mb-0">
                                123 Health Way, Suite 456 Goodland, 78910 United
                                States
                              </p>
                              <p className="text-heading font-normal mb-2.5">
                                Service
                              </p>
                              <a href="javascript:void(0);">
                                Mon -Sat: 7:00 - 17:00
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="lg:pt-17.5 pt-12.5 overflow-hidden bg-light">
              <div className="container">
                <div className="row items-end">
                  <div className="xl:w-1/2 w-full xl:order-1 order-2">
                    <div className="relative">
                      <div className="relative z-1 2xl:-ml-25 max-md:px-7.5">
                        <img src="src/images/about/img2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 w-full mb-7.5 self-center xl:order-2 order-1">
                    <div className="content-info right">
                      <div
                        className="wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.8s"
                      >
                        <h2 className="2xxl:text-5xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize leading-[1.3]">
                          Frequently Asked Questions
                        </h2>
                      </div>
                      <div
                        className="myAccordion style-3 wow fadeInUp"
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
                                className={`accordion-header font-base md:!text-[22px]${
                                  isOpen ? " open" : ""
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
                                className={`accordion-content${
                                  isOpen ? " show" : ""
                                }`}
                              >
                                <div className="content-inner">
                                  <p className="md:text-lg mb-0">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its. The point of
                                    using Lorem Ipsum is that it has a
                                    more-or-less normal distribution
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
              </div>
            </section>
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

export default Appointment;
