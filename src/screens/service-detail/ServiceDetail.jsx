import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const ServiceDetail = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/service-detail.html"
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
                    Service Details
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
                        Service Details
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <section className="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5">
              <div className="container">
                <div className="row">
                  <div className="lg:w-2/3 single-inner lg:order-1">
                    <div
                      className="relative overflow-hidden xl:h-125 sm:h-100 h-62.5 rounded-2xl md:mb-11.25 sm:mb-6.25 mb-3.75"
                      data-wow-delay="0.2s"
                      data-wow-duration="0.8s"
                    >
                      <img
                        src="src/images/services/large/img1.webp"
                        alt=""
                        className="size-full object-cover"
                      />
                    </div>
                    <div
                      className="sm:mb-8.75 mb-5 wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="0.8s"
                    >
                      <h2 className="md:text-3xxl sm:text-3xl text-2xxl mb-2.5 capitalize">
                        Eye Specialist
                      </h2>
                      <p className="md:text-lg text-base font-light capitalize">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p className="md:text-lg text-base font-light capitalize">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including.
                      </p>
                    </div>
                    <div
                      className="sm:mb-8.75 mb-5 row g-4 wow fadeInUp"
                      data-wow-delay="0.6s"
                      data-wow-duration="0.8s"
                    >
                      <div className="xl:w-1/2 w-full">
                        <div className="dz-media relative overflow-hidden xl:h-125 sm:h-100 h-62.5 rounded-2xl xl:me-6">
                          <img
                            src="src/images/services/img1.webp"
                            alt=""
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="xl:w-1/2 w-full">
                        <h4 className="text-xl sm:mb-5 mb-3 capitalize">
                          Benefits of Eye Specialist:
                        </h4>
                        <p className="fs-6 font-normal">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry&apos;s standard dummy.
                        </p>
                        <ul className="list-style-1">
                          {[
                            {
                              title: "Dry Eye Treatment",
                              desc: "Helps improve the overall aesthetic appeal of the skin, making it look more youthful and refreshed.",
                            },
                            {
                              title: "Brighten Your Vision",
                              desc: "Many individuals experience an increase in self-esteem and confidence after cosmetic treatments.",
                            },
                            {
                              title: "Expert Eye Care",
                              desc: "Effective in treating acne scars, pigmentation issues, and other skin imperfections.",
                            },
                          ].map((item) => (
                            <li
                              key={item.title}
                              className="w-full py-3.5 pe-1.25 ps-18.75 relative text-base before:absolute before:left-0 before:font-black before:text-primary before:bg-light before:size-15 before:leading-15 before:text-center before:bg-no-repeat before:bg-center before:rounded-full before:top-2 before:bg-circle-check-3"
                            >
                              <h6 className="text-lg mb-1.25">{item.title}</h6>
                              <p className="sm:text-2sm text-sm font-normal leading-normal mb-0">
                                {item.desc}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="sm:mb-8.75 mb-5 wow fadeInUp"
                      data-wow-delay="0.8s"
                      data-wow-duration="0.8s"
                    >
                      <h3 className="md:text-2xxl sm:text-2xl text-xl sm:mb-5 mb-3 capitalize">
                        Long term care services
                      </h3>
                      <p className="md:text-lg text-base font-light capitalize">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p className="md:text-lg text-base font-light capitalize">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including.
                      </p>
                    </div>
                    <div
                      className="sm:mb-8.75 mb-5 wow fadeInUp"
                      data-wow-delay="1.0s"
                      data-wow-duration="0.8s"
                    >
                      <h3 className="md:text-2xxl sm:text-2xl text-xl sm:mb-5 mb-3 capitalize">
                        Frequently Asked Questions
                      </h3>
                      <p className="md:text-lg text-base font-light capitalize">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <div
                        className="myAccordion style-3 mb-8.75 wow fadeInUp"
                        data-wow-delay="0.4s"
                        data-wow-duration="0.8s"
                        id="accordionExample"
                      >
                        {[
                          "How much do you charge for pedicure ?",
                          "What types of treatments do you offer?",
                          "How do i book my appointment ?",
                          "Can i cancel my appointment",
                        ].map((q, idx) => (
                          <div className="accordion-item" key={q}>
                            <h2
                              className={`accordion-header font-base md:!text-[22px] ${
                                idx === 0 ? "open" : ""
                              }`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                              >
                                {q}
                              </button>
                              <span
                                className={`arrow ${idx === 0 ? "active" : ""}`}
                              >
                                <i className="icon feather icon-chevron-right [.arrow.active_&]:hidden block" />
                                <i className="icon feather icon-chevron-down [.arrow.active_&]:block hidden" />
                              </span>
                            </h2>
                            <div
                              className={`accordion-content ${
                                idx === 0 ? "show" : ""
                              }`}
                            >
                              <div className="content-inner">
                                <p className="text-lg mb-0">
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its. The point of using
                                  Lorem Ipsum is that it has a more-or-less
                                  normal distribution
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 w-full mb-7.5">
                    <aside className="xl:pr-11.25 pb-px my-sticky z-1 space-top-0 w-full">
                      <div
                        className="py-7.5 px-5 rounded-2xl bg-light md:mb-11.25 sm:mb-6.25 mb-3.75 wow fadeInUp"
                        data-wow-delay="0.2s"
                        data-wow-duration="0.8s"
                      >
                        <div className="px-5 mb-5 relative font-medium">
                          <h4 className="text-xl mb-0">All Services</h4>
                        </div>
                        <ul>
                          {[
                            "Eye Specialist",
                            "Dry Eye Treatment",
                            "Low Vision Services",
                            "Eye Evaluation",
                            "Retinal Surgery",
                            "Pediatric Eye Care",
                          ].map((service, idx) => (
                            <li
                              className={idx === 0 ? "active" : ""}
                              key={service}
                            >
                              <a
                                className="bg-light block rounded-2lg py-3 px-5 font-medium mb-1.25 text-secondary relative z-1 overflow-hidden before:content-['\\e829'] before:font-['feather'] before:absolute before:right-2.5 before:left-auto before:top-1/2 before:text-lg before:text-primary hover:before:text-white before:duration-500  before:-translate-1/2 hover:bg-primary hover:text-white [li.active_&]:bg-primary [li.active_&]:text-white [li.active_&]:before:text-white"
                                href="service-detail.html"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
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

export default ServiceDetail;

