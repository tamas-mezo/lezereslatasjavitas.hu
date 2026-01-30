const Footer = () => (
  <footer
    className="text-bodycolor bg-[#006562] bg-blend-luminosity bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: "url(src/images/background/bg3.webp)" }}
  >
    {/* Footer Top */}
    <div className="md:pt-17.5 md:pb-7.5 sm:pt-12.5 sm:pb-5 pt-11.25">
      <div className="container">
        <div className="row">
          <div
            className="xl:w-1/3 w-full wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <div className="mb-7.5 me-2">
              <div className="mb-6">
                <a href="index.html">
                  <img
                    src="src/images/logo-white.svg"
                    alt
                    className="max-w-45"
                  />
                </a>
              </div>
              <p className="text-lg font-light leading-[1.2] text-white/80 mb-5">
                ClinicMaster Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit,
                Sed Diam{" "}
              </p>
              <div className="inline-flex items-center gap-3.75 bg-white py-3 px-5 rounded-xxl text-secondary text-sm font-medium">
                <img src="src/images/google.svg" alt />
                <div className="clearfix">
                  <div className="flex">
                    <ul className="flex gap-1">
                      <li className="text-yellow-400 text-base leading-[1.2]">
                        <i className="fa fa-star" />
                      </li>
                      <li className="text-yellow-400 text-base leading-[1.2]">
                        <i className="fa fa-star" />
                      </li>
                      <li className="text-yellow-400 text-base leading-[1.2]">
                        <i className="fa fa-star" />
                      </li>
                      <li className="text-yellow-400 text-base leading-[1.2]">
                        <i className="fa fa-star" />
                      </li>
                      <li className="text-yellow-400 text-base leading-[1.2]">
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                    <span className="font-bold ms-1">(4.8)</span>
                  </div>
                  <span className="text">12k+ ratings on google</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="xl:w-1/6 lg:w-1/4 md:w-1/2 w-full wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            <div className="mb-7.5">
              <h2 className="text-xl relative mb-5 text-white font-medium">
                Quick Links !!{" "}
              </h2>
              <ul className="list-hover1">
                <li className="relative py-2 text-2sm leading-5 font-light text-white/80">
                  <a className="block" href="about-us.html">
                    <span className="link-hover">About Us</span>
                  </a>
                </li>
                <li className="relative py-2 text-2sm leading-5 font-light text-white/80">
                  <a className="block" href="services.html">
                    <span className="link-hover">Our Services</span>
                  </a>
                </li>
                <li className="relative py-2 text-2sm leading-5 font-light text-white/80">
                  <a className="block" href="team.html">
                    <span className="link-hover">Our Team</span>
                  </a>
                </li>
                <li className="relative py-2 text-2sm leading-5 font-light text-white/80">
                  <a className="block" href="appointment.html">
                    <span className="link-hover">Appointments</span>
                  </a>
                </li>
                <li className="relative py-2 text-2sm leading-5 font-light text-white/80">
                  <a className="block" href="contact-us.html">
                    <span className="link-hover">Contact Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/4 md:w-1/2 w-full wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            <div className="mb-7.5">
              <h2 className="text-xl relative mb-5 text-white font-medium">
                Contacts us
              </h2>
              <ul>
                <li className="py-3.75 font-light text-white/80 border-b border-white/20">
                  <a href="mailto:info@example.com">
                    <i className="feather icon-mail text-[#57EEE9] mr-1.25" />{" "}
                    contact@company.com
                  </a>
                </li>
                <li className="py-3.75 font-light text-white/80 border-b border-white/20">
                  <a href="tel:+11234567890">
                    <i className="feather icon-phone-call text-[#57EEE9] mr-1.25" />{" "}
                    (414) 687 - 5892
                  </a>
                </li>
                <li className="py-3.75 font-light text-white/80">
                  <a href="javascript:void(0);">
                    <i className="feather icon-map-pin text-[#57EEE9] mr-1.25" />{" "}
                    794 Mcallister St San Francisco, 94102
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="xl:w-1/4 lg:w-1/2 w-full wow fadeInUp"
            data-wow-delay="0.6s"
            data-wow-duration="0.8s"
          >
            <div className="mb-7.5 me-2">
              <h2 className="text-xl relative mb-5 text-white font-medium">
                Newsletter
              </h2>
              <p className="text-sm font-light text-white/80">
                Subscribe our newsletter to get the latest news and updates
              </p>
              <form
                className="dzSubscribe style-1 mb-3.75"
                action="../assets/script/mailchimp.php"
                method="post"
              >
                <div className="dzSubscribeMsg" />
                <div className="form-group">
                  <div className="relative flex flex-wrap items-stretch w-full">
                    <input
                      name="dzEmail"
                      required="required"
                      type="email"
                      className="relative flex-1 w-[1%] py-3.75 pl-6.25 pr-15 text-base text-left text-bodycolor border border-white bg-white placeholder:text-bodycolor rounded-[18px]"
                      placeholder="Your Email Address"
                    />
                    <div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="size-12 min-w-12 text-lg leading-12 text-center text-primary"
                      >
                        <i className="flaticon-message" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="dz-social-icon">
                <ul className="flex gap-2.5">
                  <li className="inline-block">
                    <a
                      className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block"
                      href="https://www.linkedin.com"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block"
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block"
                      href="https://www.facebook.com"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="size-10 leading-10 text-center rounded-2lg bg-white text-primary block"
                      href="https://twitter.com"
                      target="_blank"
                    >
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Top End */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="py-7.5 border-t border-white/30 text-base">
          <div className="row">
            <div className="lg:w-1/2 w-full lg:text-start text-center">
              <p className="text-sm font-light text-white/80 mb-0">
                © <span className="current-year">2025</span>{" "}
                <a
                  href="https://themeforest.net/user/dexignzone"
                  target="_blank"
                  className="text-white"
                >
                  DexignZone
                </a>{" "}
                Theme. All Rights Reserved.
              </p>
            </div>
            <div className="lg:w-1/2 w-full lg:text-end text-center max-lg:!mt-3.75">
              <ul className="footer-link style-1">
                <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white">
                  All Rights Reserved
                </li>
                <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white before:h-3.25 before:w-px before:bg-white before:absolute before:top-1/2 before:-left-0.5 before:rounded-lg before:-translate-1/2">
                  <a href="javascript:void(0);">Terms and Conditions</a>
                </li>
                <li className="inline-block font-poppins relative px-1.25 text-sm font-light text-white before:h-3.25 before:w-px before:bg-white before:absolute before:top-1/2 before:-left-0.5 before:rounded-lg before:-translate-1/2">
                  <a href="javascript:void(0);">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom End */}
  </footer>
);

export default Footer;

