import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const TeamDetail = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/team-detail.html"
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
                    Team Details
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
                        Team Details
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <section className="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-white">
              <div className="container">
                <div className="row">
                  <div className="xl:w-5/12 w-full mb-7.5">
                    <aside className="side-bar my-sticky space-top-0 p-0">
                      <div
                        className="lg:mb-11.25 mb-7.5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.8s"
                      >
                        <div className="relative">
                          <div className="relative overflow-hidden rounded-2xl">
                            <img
                              src="src/images/team/img5.webp"
                              alt=""
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative rounded-2xl 2xl:p-13.75 sm:p-10 p-6.25 bg-[#006562] before:w-36.25 before:aspect-square before:absolute before:right-5 before:top-5 before:z-0 before:bg-size-[100%] before:bg-no-repeat before:bg-commentsvg wow fadeInUp"
                        data-wow-delay="0.4s"
                        data-wow-duration="0.8s"
                      >
                        <div>
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
                              className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
                              name="dzToDo"
                              defaultValue="Appointment"
                            />
                            <input
                              type="hidden"
                              className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
                              name="reCaptchaEnable"
                              defaultValue={0}
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
                                    className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
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
                                    className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
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
                                    className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
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
                                    type="text"
                                    className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
                                    id="datePickerOnly"
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
                                    type="text"
                                    className="py-3.75 pl-10 text-lg text-left text-white border-b border-white/80 placeholder:text-white w-full"
                                    id="timePickerOnly"
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
                                  const id = `checkBoxA${idx}`;
                                  return (
                                    <div
                                      className="form-check2 mb-1.25"
                                      key={id}
                                    >
                                      <input
                                        className="size-4.5 bg-transparent border border-white appearance-none rounded-[2px] mr-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check"
                                        type="checkbox"
                                        id={id}
                                      />
                                      <label
                                        className="text-white text-base inline"
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
                                  const id = `checkBoxB${idx}`;
                                  return (
                                    <div
                                      className="form-check2 mb-1.25"
                                      key={id}
                                    >
                                      <input
                                        className="size-4.5 bg-transparent border border-white appearance-none rounded-[2px] mr-2 my-1 align-top bg-center bg-no-repeat checked:bg-primary checked:bg-input-check"
                                        type="checkbox"
                                        id={id}
                                      />
                                      <label
                                        className="text-white text-base inline"
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
                                  className="btn btn-lg btn-white w-full justify-center hover:!bg-primary"
                                >
                                  <i className="feather icon-calendar mr-1.25" />{" "}
                                  Book An appointment
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </aside>
                  </div>
                  <div className="xl:w-7/12 w-full mb-2.5 xl:!ps-12">
                    <div
                      className="sm:mb-7.5 mb-5 wow fadeInUp"
                      data-wow-delay="0.2s"
                      data-wow-duration="0.8s"
                    >
                      <div className="inline-block text-primary text-lg leading-[1.5] font-semibold font-montserrat">
                        Best ophthalmology
                      </div>
                      <h2 className="lg:text-4xl sm:text-3xxl text-2xxl font-bold capitalize leading-[1.3]">
                        Dr. Williams Florence
                      </h2>
                      <p className="sm:text-base text-sm leadding-[1.6] font-normal">
                        <strong className="text-primary font-semibold">
                          Dr. Nashid Martines
                        </strong>{" "}
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable.
                      </p>
                    </div>
                    <table
                      className="md:mb-10 mb-5 wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="0.8s"
                    >
                      <tbody>
                        <tr className="odd:bg-light">
                          <th className="sm:py-3.75 sm:px-6.25 p-3.75 text-start font-medium text-secondary rounded-s-2lg">
                            Specialty
                          </th>
                          <td className="sm:py-3.75 sm:px-6.25 p-3.75 text-start rounded-e-2lg">
                            Orthodontist Surgeon Specialize
                          </td>
                        </tr>
                        <tr className="odd:bg-light">
                          <th className="sm:py-3.75 sm:px-6.25 p-3.75 text-start font-medium text-secondary rounded-s-2lg">
                            Degrees
                          </th>
                          <td className="sm:py-3.75 sm:px-6.25 p-3.75 text-start rounded-e-2lg">
                            <a href="javascript:void(0);">
                              MBBS University of California
                            </a>
                          </td>
                        </tr>
                        <tr className="odd:bg-light">
                          <th className="sm:py-3.75 sm:px-6.25 p-3.75 text-start font-medium text-secondary rounded-s-2lg">
                            Experience
                          </th>
                          <td className="sm:py-3.75 sm:px-6.25 p-3.75 text-start rounded-e-2lg">
                            20+ years, New York Urgent Medical Care Serving
                            California
                          </td>
                        </tr>
                        <tr className="odd:bg-light">
                          <th className="sm:py-3.75 sm:px-6.25 p-3.75 text-start font-medium text-secondary rounded-s-2lg">
                            Awards
                          </th>
                          <td className="sm:py-3.75 sm:px-6.25 p-3.75 text-start rounded-e-2lg">
                            2018 - 2019 : William Allan Award
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="clearfix mb-1.250 m-md-b20 wow fadeInUp"
                      data-wow-delay="0.6s"
                      data-wow-duration="0.8s"
                    >
                      <h3 className="text-primary text-xl font-semibold pb-2.5 relative mb-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-size-[10px_1px] after:bg-repeat-x after:bg-linear-(--title-gradient) wow fadeInUp">
                        About Skills
                      </h3>
                      <ul
                        className="flex flex-wrap text-secondary font-medium mb-8.75 wow fadeInUp"
                        data-wow-delay="1.0s"
                        data-wow-duration="0.8s"
                      >
                        {[
                          "Radiant Skin Dermatology",
                          "Flawless Dermatology",
                          "Luminous Dermatology",
                          "Laser Resurfacing",
                          "Refined Skin Dermatology",
                          "Anti Aging",
                        ].map((item) => (
                          <li
                            key={item}
                            className="sm:w-1/2 w-full relative lg:p-1.25 p-1 lg:ps-7.5 ps-6.25 xl:text-base text-2sm before:absolute before:left-0 before:font-black before:content-['\\f109'] before:font-['flaticon'] before:text-primary before:top-2"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className="sm:p-7.5 sm:pb-6.25 p-5 pb-3.75 rounded-xxl lg:mb-12.5 mb-5 bg-light relative wow fadeInUp"
                      data-wow-delay="0.8s"
                      data-wow-duration="0.8s"
                    >
                      <div className="widget-content">
                        <h2 className="relative pb-2.5 text-lg font-bold mb-0">
                          My Time Schedule
                        </h2>
                        <ul>
                          {[
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday",
                          ].map((day) => (
                            <li
                              key={day}
                              className="flex justify-between py-2.5 text-secondary border-b border-black/10 text-2sm font-medium"
                            >
                              {day} <span>09:30 - 07:30</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="2xxl:py-6.25 2xxl:px-7.5 p-3.75 rounded-2xl lg:mb-12.5 mb-5 bg-light relative wow fadeInUp"
                      data-wow-delay="1.0s"
                      data-wow-duration="0.8s"
                    >
                      <div className="row g-xl-5 g-4">
                        <div className="md:w-1/2 relative after:h-full after:absolute after:right-2.5 after:top-0 after:w-px after:bg-black/10 max-md:after:hidden">
                          <div className="flex gap-3.75 text-left relative items-center">
                            <div className="lg:size-15 lg:min-w-15 size-12.5 min-w-12.5 bg-primary text-white lg:text-2xl text-lg rounded-full flex items-center justify-center">
                              <span className="icon-cell">
                                <i className="feather icon-phone flex" />
                              </span>
                            </div>
                            <div className="overflow-hidden">
                              <h5 className="text-lg mb-1.25 font-semibold">
                                Send us a Mail
                              </h5>
                              <p className="text-sm font-normal">
                                <a
                                  href="mailto:info@example.com"
                                  className="text-body"
                                >
                                  info@example.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/2">
                          <div className="flex gap-3.75 text-left relative items-center">
                            <div className="lg:size-15 lg:min-w-15 size-12.5 min-w-12.5 bg-primary text-white lg:text-2xl text-lg rounded-full flex items-center justify-center">
                              <span className="icon-cell">
                                <i className="feather icon-phone flex" />
                              </span>
                            </div>
                            <div className="overflow-hidden">
                              <h5 className="text-lg mb-1.25 font-semibold">
                                Call Us:
                              </h5>
                              <p className="text-sm font-normal">
                                <a
                                  href="tel:+11234567890"
                                  className="text-body"
                                >
                                  +0 123-456-7890
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="clearfix wow fadeInUp"
                      data-wow-delay="1.2s"
                      data-wow-duration="0.8s"
                    >
                      <h3 className="text-primary text-xl font-semibold pb-2.5 relative mb-5 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-size-[10px_1px] after:bg-repeat-x after:bg-linear-(--title-gradient)">
                        My Awards
                      </h3>
                      <div className="row">
                        {[
                          { img: "logo1.png", title: "ClinicMaster 2024" },
                          { img: "logo2.png", title: "ClinicMaster 2024" },
                        ].map((award) => (
                          <div className="md:w-1/2 w-full mb-5" key={award.img}>
                            <div className="flex bg-light rounded-xxl py-4.5 px-3.75 gap-3 items-center shadow-[0_0_35px_rgba(var(--secondary-rgb),0.05)]">
                              <div className="relative overflow-hidden">
                                <img
                                  src={`src/images/logo/${award.img}`}
                                  alt=""
                                />
                              </div>
                              <div>
                                <h3 className="text-lg mb-0.75">
                                  {award.title}
                                </h3>
                                <p className="text-sm font-medium mb-0.75">
                                  Quality and Accreditation Institute
                                </p>
                                <a
                                  href="javascript:void(0);"
                                  className="text-sm text-primary"
                                >
                                  Best Dermatologists
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
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

export default TeamDetail;

