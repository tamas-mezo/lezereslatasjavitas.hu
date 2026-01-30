import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const ContactUs = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/contact-us.html"
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
                      <a href="javascript:void(0);" className="size-7 flex items-center justify-center">
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
                <a href="shop-checkout.html" className="btn btn-primary btn-hover1 mx-0.25">
                  Checkout
                </a>
                <a href="shop-cart.html" className="btn btn-secondary btn-hover1 mx-0.25">
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
                    Contact Us
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
                        Contact Us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <section className="2xl:py-25 md:py-17.5 sm:py-12.5 py-10 bg-light">
              <div className="container">
                <div className="row box-hover-wrapper">
                  {[
                    {
                      icon: "feather icon-map-pin",
                      title: "Address",
                      content:
                        "1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad",
                      delay: "0.2s",
                      active: true,
                    },
                    {
                      icon: "feather icon-phone",
                      title: "Call Us",
                      content: (
                        <>
                          <a href="tel:+01234567890" className="text-body">
                            +0 123-456-7890
                          </a>
                          <br />
                          <a href="tel:+09876543210" className="text-body">
                            +0 987-654-3210
                          </a>
                        </>
                      ),
                      delay: "0.4s",
                    },
                    {
                      icon: "feather icon-mail",
                      title: "Send us a Mail",
                      content: (
                        <>
                          <a href="mailto:info@example.com" className="text-body">
                            info@example.com
                          </a>
                          <br />
                          <a href="mailto:medical@example.com" className="text-body">
                            medical@example.com
                          </a>
                        </>
                      ),
                      delay: "0.6s",
                    },
                    {
                      icon: "feather icon-clock",
                      title: "Opening Time",
                      content: "Mon-Thu: 8:00am-5:00pm \n Fri: 8:00am-1:00pm",
                      delay: "0.8s",
                    },
                  ].map((card) => (
                    <div
                      className="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp"
                      data-wow-delay={card.delay}
                      data-wow-duration="0.8s"
                      key={card.title}
                    >
                      <div
                        className={`rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%_-_40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%_-_50px)] after:absolute after:bg-primary after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover${
                          card.active ? " active" : ""
                        }`}
                      >
                        <div className="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&]:bg-primary">
                          <span className="text-white">
                            <i className={card.icon} />
                          </span>
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-lg font-semibold">{card.title}</h5>
                          <p className="mb-0 whitespace-pre-line">{card.content}</p>
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
                <div className="row content-wrapper style-43 items-end justify-between">
                  <div className="lg:w-1/2 w-full lg:order-1 order-2">
                    <div className="relative z-1 after:absolute after:top-0 after:left-0 after:size-full after:bg-no-repeat after:bg-bottom after:bg-content-media">
                      <div className="relative z-1 md:ps-12.5 md:pe-25 px-7.5">
                        <img src="src/images/about/img7.webp" alt="" className="w-full" />
                      </div>
                      <div className="absolute sm:bottom-37.5 bottom-15 lg:-right-15 right-0 z-99 max-sm:hidden">
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
                  <div className="xl:w-5/12 lg:w-1/2 w-full mb-7.5 lg:order-2 order-1">
                    <div className="relative rounded-2xl 2xxl:p-13.75 sm:p-10 p-6.25 bg-light">
                      <div className="form-body">
                        <div className="mb-4">
                          <h2 className="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl font-bold capitalize mb-0">
                            Get in Touch
                          </h2>
                          <p className="xl:text-lg text-base font-normal mb-0">
                            You Can React Us Anytime
                          </p>
                        </div>
                        <form
                          action="../assets/script/contact_smtp.php"
                          className="dzForm"
                          method="POST"
                        >
                          <input
                            type="hidden"
                            className="py-3.75 pl-10 text-lg text-left text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor"
                            name="dzToDo"
                            defaultValue="Contact"
                          />
                          <div className="dzFormMsg" />
                          <div className="row">
                            <div className="w-full mb-5">
                              <div className="relative">
                                <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                  <i className="feather icon-user" />
                                </span>
                                <input
                                  name="dzName"
                                  type="text"
                                  className="py-3.75 pl-10 text-lg text-left text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor"
                                  placeholder="Your Name"
                                />
                              </div>
                            </div>
                            <div className="w-full mb-5">
                              <div className="relative">
                                <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                  <i className="feather icon-mail" />
                                </span>
                                <input
                                  name="dzEmail"
                                  type="email"
                                  className="py-3.75 pl-10 text-lg text-left text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor"
                                  placeholder="Your Email Address"
                                />
                              </div>
                            </div>
                            <div className="w-full mb-5">
                              <div className="relative">
                                <span className="absolute left-0 top-4 flex items-center justify-center text-2xl text-primary">
                                  <i className="feather icon-phone" />
                                </span>
                                <input
                                  name="dzPhoneNumber"
                                  type="text"
                                  className="py-3.75 pl-10 text-lg text-left text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="w-full mb-5">
                              <div className="floating-underline underline-1">
                                <textarea
                                  name="dzMessage"
                                  className="py-3.75 text-lg text-left text-bodycolor border-b border-secondary/60 w-full placeholder:text-bodycolor"
                                  rows={5}
                                  placeholder="Write Message"
                                />
                              </div>
                            </div>
                            <div className="w-full mb-5">
                              <div className="input-recaptcha">
                                <div
                                  className="g-recaptcha"
                                  data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                  data-callback="verifyRecaptchaCallback"
                                  data-expired-callback="expiredRecaptchaCallback"
                                />
                                <input
                                  className="hidden"
                                  style={{ display: "none" }}
                                  data-recaptcha="true"
                                  required
                                  data-error="Please complete the Captcha"
                                />
                              </div>
                            </div>
                            <div className="w-full mt-2.5">
                              <button
                                type="submit"
                                name="submit"
                                value="submit"
                                className="btn btn-lg btn-primary w-full justify-center"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="2xxl:pt-25 2xxl:pb-17.5 md:pt-17.5 sm:pt-12.5 pt-10 pb-10 bg-light">
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                    <div className="row">
                      {[
                        { country: "Canada", delay: "0.4s", map: "map2.webp" },
                        { country: "United State", delay: "0.6s", map: "map1.webp" },
                        { country: "Canada", delay: "0.8s", map: "map2.webp" },
                      ].map((item, idx) => (
                        <div
                          className="xl:w-1/3 md:w-1/2 mb-7.5 wow fadeInUp"
                          data-wow-delay={item.delay}
                          data-wow-duration="0.8s"
                          key={`${item.country}-${idx}`}
                        >
                          <div className="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
                            <div className="min-w-75 h-75 rounded-2xl overflow-hidden">
                              <img
                                src={`src/images/map/${item.map}`}
                                alt=""
                                className="size-full object-cover"
                              />
                            </div>
                            <div className="p-6.25">
                              <h3 className="flex items-center gap-2.5 text-[20px] font-semibold font-base">
                                {item.country}
                              </h3>
                              <p className="mb-2.5">Address:</p>
                              <p className="mb-0">
                                123 Health Way, Suite 456 Goodland, 78910 United States
                              </p>
                              <p className="text-heading font-normal mb-2.5">Service</p>
                              <a href="javascript:void(0);">Mon -Sat: 7:00 - 17:00</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="map-wrapper xl:h-125 sm:h-100 h-62.5 wow fadeIn">
              <iframe
                className="size-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ClinicMaster Location"
              />
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

export default ContactUs;

