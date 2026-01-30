const BlogGrid = () => {
  const posts = [
    {
      img: "img1.webp",
      delay: "0.2s",
      title: "Eat clean meals, avoid sugar and junk.",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
    {
      img: "img2.webp",
      delay: "0.4s",
      title:
        "Using Laser to Reshape Cornea & Correct Error by Using Modern Technology.",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
    {
      img: "img3.webp",
      delay: "0.6s",
      title: "Burn fat fast with simple daily habits..",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
    {
      img: "img4.webp",
      delay: "0.8s",
      title: "Eat clean meals, avoid sugar and junk.",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
    {
      img: "img5.webp",
      delay: "1.0s",
      title:
        "Using Laser to Reshape Cornea & Correct Error by Using Modern Technology.",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
    {
      img: "img6.webp",
      delay: "1.2s",
      title: "Burn fat fast with simple daily habits..",
      date: "17 May 2025",
      author: "Nashid Martines",
    },
  ];

  return (
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
              Blog Grid
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
                  Blog Grid
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="w-full mb-7.5">
              <div className="row loadmore-content">
                {posts.map((post) => (
                  <div
                    className="xl:w-1/3 md:w-1/2 w-full mb-7.5 wow fadeInUp"
                    data-wow-delay={post.delay}
                    data-wow-duration="0.8s"
                    key={`${post.img}-${post.delay}`}
                  >
                    <div className="relative z-1 lg:p-7.5 p-5 h-full duration-200 bg-white rounded-3xl group">
                      <div className="rounded-xxl mb-6.25 sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                        <img
                          src={`src/images/blog/middle/${post.img}`}
                          alt=""
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="relative">
                        <div className="mb-2.5">
                          <ul className="flex flex-wrap items-center gap-1.25">
                            <li className="bg-[rgba(var(--primary-rgb),0.1)] text-primary rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-primary after:left-2.5">
                              {post.date}
                            </li>
                            <li className="bg-[rgba(var(--primary-rgb),0.1)] text-primary rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-primary after:left-2.5">
                              By <a href="javascript:void(0);">{post.author}</a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="xl:text-2xl text-xl mb-2.5">
                          <a href="blog-details.html">{post.title}</a>
                        </h3>
                        <p className="text-2sm">
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                        <a
                          href="blog-details.html"
                          className="text-2sm font-medium capitalize text-primary"
                        >
                          Read more{" "}
                          <i className="feather icon-arrow-right-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="text-center mt-7.5 lg:mt-0 wow fadeInUp"
                data-wow-delay="1.4s"
                data-wow-duration="0.8s"
              >
                <a
                  href="javascript:void(0);"
                  className="btn btn-lg btn-primary group dz-load-more"
                  rel="ajax/blog-grid.html"
                >
                  Load More{" "}
                  <i className="feather icon-refresh-ccw ml-1.75 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogGrid;

