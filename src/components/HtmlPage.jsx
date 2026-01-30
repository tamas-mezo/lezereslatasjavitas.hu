import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadScriptsSequentially } from "../utils/scriptLoader";

const SCRIPT_URLS = [
  "/assets/vendor/swiper/swiper-bundle.min.js",
  "/assets/vendor/gsap/gsap.min.js",
  "/assets/vendor/gsap/ScrollSmoother.js",
  "/assets/vendor/gsap/ScrollTrigger.min.js",
  "/assets/vendor/xmenu/xmenu.js",
  "/assets/js/dz.carousel.js",
  "/assets/js/dz.ajax.js",
  "/assets/js/animation.js",
  "/assets/js/custom.js",
];

const scriptsReady = loadScriptsSequentially(SCRIPT_URLS);

const normalizePathname = (pathname) => {
  const stripped = pathname.replace(/^\/+/, "");
  if (!stripped) return "index.html";
  const cleaned = stripped.endsWith("/") ? `${stripped}index` : stripped;
  return cleaned.endsWith(".html") ? cleaned : `${cleaned}.html`;
};

const extractBodyHtml = (html) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    doc.querySelectorAll("script").forEach((node) => node.remove());
    const body = doc.querySelector("body");
    return body?.innerHTML || html;
  } catch (err) {
    console.error("HTML parse failed", err);
    return html;
  }
};

const HtmlPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filePath = useMemo(() => normalizePathname(pathname), [pathname]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");

    fetch(`/ophthalmology/${filePath}`)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.text();
      })
      .then((html) => {
        if (cancelled) return;
        setContent(extractBodyHtml(html));
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Unable to load page");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filePath]);

  useEffect(() => {
    const handleLinkClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (anchor.target === "_blank") return;
      if (href.startsWith("http") || href.startsWith("mailto:")) return;
      if (href.startsWith("#") || href.startsWith("javascript:")) return;

      try {
        const url = new URL(href, window.location.href);
        const isHtmlLink =
          url.pathname.endsWith(".html") || url.pathname === "/" || url.pathname === "";
        if (!isHtmlLink) return;
        event.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      } catch (err) {
        console.error("Navigation interception failed", err);
      }
    };

    document.body.addEventListener("click", handleLinkClick);
    return () => {
      document.body.removeEventListener("click", handleLinkClick);
    };
  }, [navigate, content]);

  useEffect(() => {
    if (!content) return;
    const initScripts = async () => {
      try {
        await scriptsReady;
        window.ClinicMaster?.init?.();
        try {
          const gsapInstance = window.ClinicMasterGsap?.();
          gsapInstance?.init?.();
        } catch (err) {
          console.error("ClinicMasterGsap init error", err);
        }
        document.getElementById("dzPreloader")?.remove();
      } catch (err) {
        console.error("Script init failed", err);
      }
    };

    initScripts();
  }, [content]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">Loading page…</div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 text-center text-red-600">
        Failed to load this page: {error}
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default HtmlPage;

