import MainNav from "../../components/main-nav/MainNav";
import Footer from "../../components/footer/Footer";

const Error404 = () => (
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
      href="https://clinicmaster.dexignzone.com/tailwind/ophthalmology/error-404.html"
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
                    Error 404
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
                        Error 404
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <section className="error-page style-1 2xl:py-25 md:py-17.5 sm:py-12.5 py-10 bg-light overflow-hidden">
              <div className="container">
                <div className="row items-center g-5 justify-center">
                  <div
                    className="lg:w-1/2 md:w-9/12 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="0.8s"
                  >
                    <div className="relative">
                      <img src="src/images/error.webp" alt="" />
                      <div className="absolute sm:top-0 sm:right-12.5 -top-7.5 right-7.5 animate-shake xl:w-auto sm:w-35 w-25">
                        <img
                          src="src/images/error2.webp"
                          alt=""
                          className="absolute left-1/2 top-1/2 -translate-1/2 w-[60%]"
                        />
                        <svg
                          className="w-full"
                          width={234}
                          height={220}
                          viewBox="0 0 234 220"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.8986 163.335C-24.2798 77.0297 10.8709 -27.2904 157.814 7.29291C157.814 7.29291 250.039 33.9858 231.155 133.954C215.053 219.194 100.586 243.163 41.6752 194.874C26.1745 205.432 -13.9549 231.297 30.6519 184.225C25.2719 178.082 20.6185 171.131 16.8986 163.335Z"
                            fill="var(--color-primary)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:w-1/2 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.8s"
                  >
                    <div className="inner-content text-center">
                      <h2
                        className="2xxl:text-[290px] lg:text-[200px] sm:text-[150px] text-[100px] font-bold inline-block leading-none relative z-1 after:content-[attr(data-name)] after:absolute after:top-1.75 after:left-1.75 after:size-[calc(100%_-_5px)] after:[-webkit-text-stroke:1px_var(--primary)] after:text-transparent after:-z-1"
                        data-name="404"
                      >
                        404
                      </h2>
                      <p className="md:text-3xxl sm:text-2xxl text-lg font-semibold mx-auto max-w-162.5 text-secondary mb-7.5 leading-[1.5]">
                        We are sorry. But the page you are looking for cannot be found.
                      </p>
                      <a href="index.html" className="btn btn-lg btn-primary btn-hover1">
                        Back To Home
                      </a>
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

export default Error404;

