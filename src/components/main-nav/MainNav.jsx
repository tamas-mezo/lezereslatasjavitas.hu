const MainNav = () => (
  <header className="site-header sticky-header-wrapper relative w-full z-999 border-b border-black/10">
    <div className="main-bar relative lg:text-heading text-secondary bg-white w-full">
      <div className="container-fluid flex 3xl:px-20! xl:px-12.5! md:px-7.5! px-3.75!">
        {/* Website Logo */}
        <div className="flex items-center align-middle xl:w-41.25 w-33.75 sm:h-20 h-15.25 xl:me-7.5 me-2 logo-dark">
          <a href="/" className="table-cell align-middle">
            <img
              src="../ophthalmology/images/logo.svg"
              alt="logo"
              className="object-contain"
            />
          </a>
        </div>
        <button
          className="xmenu-toggler lg:hidden float-right sm:mt-4.5 sm:mb-4 sm:ml-7 my-2.5 ml-5 size-11 bg-secondary rounded-md relative cursor-pointer max-lg:order-1 max-md:ms-auto"
          type="button"
        >
          <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5" />
          <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25" />
          <span className="block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4" />
        </button>
        <div className="lg:hidden fixed top-0 left-0 bg-black size-full duration-300 z-999 opacity-0 visible pointer-events-none menu-close fade-overlay" />
        <div className="flex lg:basis-auto lg:grow max-lg:flex-col justify-start max-lg:fixed max-lg:h-screen max-lg:px-5 max-lg:top-0 max-lg:-left-75 max-lg:z-9999 max-lg:bg-white max-lg:w-72 max-lg:overflow-auto max-lg:duration-700 header-nav custom-scroll">
          <div className="flex items-center relative z-9 py-6.25 lg:hidden w-33.75 h-15.25">
            <a href="index.html" className="table-cell align-middle">
              <img
                src="../ophthalmology/images/logo.svg"
                alt
                className="object-contain duration-500"
              />
            </a>
          </div>
          <ul className="lg:flex flex-wrap navbar-nav">
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="/news"
              >
                <span className="inline-block leading-7.5">Hírek</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">Szemészet</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">
                  Lézeres Látásjavítás
                </span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">Optika</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">Fogászat</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">Belgyógyászat</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="service-detail"
              >
                <span className="inline-block leading-7.5">Pszichológia</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="team"
              >
                <span className="inline-block leading-7.5">Szakembereink</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="prices"
              >
                <span className="inline-block leading-7.5">Áraink</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary"
                href="contact-us"
              >
                <span className="inline-block leading-7.5">Kapcsolat</span>
              </a>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden"
                href="javascript:void(0);"
              >
                <span className="inline-block leading-7.5">Menu</span>
                <i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end" />
              </a>
              <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="about-us"
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="/appointment"
                  >
                    <span>Appointment</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="prices"
                  >
                    <span>Pricing Table</span>
                  </a>
                </li>
                <li className="group/second relative sub-menu-down">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white"
                    href="javascript:void(0);"
                  >
                    <span>Team</span>
                  </a>
                  <ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="team"
                      >
                        <span>Team</span>
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="team-detail"
                      >
                        <span>Team Detail</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="group/second relative sub-menu-down">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white"
                    href="javascript:void(0);"
                  >
                    <span>Services</span>
                  </a>
                  <ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="services"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="service-detail"
                      >
                        <span>Services Detail</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="error-404.html"
                  >
                    <span>Error 404</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="coming-soon.html"
                  >
                    <span>Coming Soon</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="under-construction.html"
                  >
                    <span>Under Construction</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden"
                href="javascript:void(0);"
              >
                <span className="inline-block leading-7.5">Services</span>
                <i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end" />
              </a>
              <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="services.html"
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="service-detail.html"
                  >
                    <span>Services Detail</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="lg:inline-block block max-lg:border-b max-lg:border-gray-200 relative group">
              <a
                className="lg:py-7 py-2 xl:px-4 lg:px-2 relative lg:inline-block block xl:text-lg text-2sm font-medium hover:text-primary after:ml-1 after:-mt-1 after:inline-block after:size-3 after:bg-starsvg max-lg:after:hidden"
                href="javascript:void(0);"
              >
                <span className="inline-block leading-7.5">Blogs</span>
                <i className="fas fa-chevron-right lg:!hidden !block size-7 !leading-7 text-center text-xs bg-secondary rounded text-white float-end" />
              </a>
              <ul className="lg:absolute bg-white block lg:left-0 lg:py-5 max-lg:py-2.5 max-lg:border-t max-lg:border-gray-200 w-full lg:w-55 lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0 max-lg:hidden sub-menu">
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="blog-grid.html"
                  >
                    <span>Blog Grid</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="blog-list-sidebar.html"
                  >
                    <span>Blog List Sidebar</span>
                  </a>
                </li>
                <li className="relative">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                    href="blog-details.html"
                  >
                    <span>Blog Details</span>
                  </a>
                </li>
                <li className="group/second relative sub-menu-down">
                  <a
                    className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary after:content-['\\f054'] after:inline-block after:font-black after:font-['Font_Awesome_5_Free'] after:text-tiny after:float-right after:duration-500 max-lg:after:size-7 max-lg:after:leading-7 max-lg:after:text-center max-lg:after:text-xs max-lg:after:rounded max-lg:after:bg-secondary max-lg:after:text-white"
                    href="javascript:void(0);"
                  >
                    <span>Post Layout </span>
                  </a>
                  <ul className="bg-white lg:py-5 lg:w-55 2xl:left-55 lg:-left-55 lg:top-0 lg:absolute lg:opacity-0 lg:invisible lg:translate-y-10 z-10 mt-0 text-left duration-500 lg:group-hover/second:opacity-100 lg:group-hover/second:visible lg:group-hover/second:translate-y-0 max-lg:hidden max-lg:pl-5 sub-menu">
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="standard-post.html"
                      >
                        <span>Standard Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="gutenberg-post.html"
                      >
                        <span>Gutenberg Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="corner-post.html"
                      >
                        <span>Corner Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="header-image.html"
                      >
                        <span>Header Image</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="post-gallery.html"
                      >
                        <span> Post Gallery </span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="link-post.html"
                      >
                        <span>Link Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="video-post.html"
                      >
                        <span>Video Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="audio-post.html"
                      >
                        <span>Audio Post</span>{" "}
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="block relative text-sm text-gray-600 font-normal py-1.25 lg:px-7.5 duration-500 hover:text-primary"
                        href="post-slider.html"
                      >
                        <span>Post Slider </span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="lg:hidden block max-lg:p-5 text-center mt-auto">
            <ul>
              <li className="inline-block mx-0.5">
                <a
                  className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-facebook-f"
                  target="_blank"
                  href="https://www.facebook.com/dexignzone"
                />
              </li>
              <li className="inline-block mx-0.5">
                <a
                  className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-twitter"
                  target="_blank"
                  href="https://twitter.com/dexignzones"
                />
              </li>
              <li className="inline-block mx-0.5">
                <a
                  className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-linkedin-in"
                  target="_blank"
                  href="https://www.linkedin.com/showcase/3686700/admin/"
                />
              </li>
              <li className="inline-block mx-0.5">
                <a
                  className="size-10 !leading-10 border border-black/10 text-center text-primary fab fa-instagram"
                  target="_blank"
                  href="https://www.instagram.com/dexignzone/"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="extra-nav flex items-center h-20 3xl:pl-7.5 ml-auto max-sm:w-full max-sm:bg-white max-sm:fixed max-sm:-bottom-20 max-sm:left-0 max-sm:px-5 max-sm:shadow-3 max-sm:h-15 max-sm:duration-500 [.extra-nav.active]:bottom-0 [.extra-nav.bottom-end]:-bottom-20">
          <div className="flex items-center w-full">
            <ul className="lg:ml-5 sm:ml-3.75 flex items-center gap-11.25 w-full justify-between">
              <li className="2xxl:inline-flex items-center gap-3.75 hidden">
                <div className="widget-media">
                  <i className="feather icon-phone-call dz-ring-effect text-3xxl inline-flex animate-dzRing text-primary" />
                </div>
                <div className="widget-content">
                  <h6 className="text-primary text-sm font-normal mb-0 font-base!">
                    Hívjon minket
                  </h6>
                  <a
                    href="tel:+11234567890"
                    className="sm:text-lg text-base font-semibold text-secondary font-title!"
                  >
                    06 52 480-500
                  </a>
                  <a
                    href="tel:+11234567890"
                    className="sm:text-lg text-base font-semibold text-secondary font-title!"
                  >
                    06 52 321-352
                  </a>
                </div>
              </li>
              <li className="inline-block max-xl:hidden max-sm:!block">
                <a
                  href="/appointment"
                  className="btn btn-primary btn-hover1 max-md:!text-sm max-md:!py-2.5 max-md:!px-4.5 max-md:!rounded-2lg"
                >
                  Időpont foglalás
                  <i className="feather icon-arrow-right ms-1.25 text-xl text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="fixed -top-full left-0 size-full bg-black/80 z-999 flex items-center justify-center p-8 duration-500 xmenu-search"
          id="searchOverlay4"
        >
          <form className="w-full" action="#">
            <div className="relative max-w-3xl w-3xl mx-auto">
              <input
                name="search"
                defaultValue
                type="text"
                className="h-14 py-4 px-5 border border-white/20 text-white w-full outline-none duration-300 focus:border-primary"
                placeholder="Type to search"
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-10 flex items-center"
              >
                <i className="fa fa-search text-base text-white" />
              </button>
            </div>
            <button
              type="button"
              className="absolute right-8 top-8 text-white text-xl opacity-80 size-8 cursor-pointer search-remove"
            >
              <i className="fa fa-close" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
);

export default MainNav;
