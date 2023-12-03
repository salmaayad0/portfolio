import bootstrapHome from "./assets/projects/bootstrap-home.webp";
import furniture from "./assets/projects/furntuire.webp";
import landing from "./assets/projects/landing-page.webp";
import login from "./assets/projects/login.webp";
import movies from "./assets/projects/movies.webp";
import productDashboard from "./assets/projects/product-dashboard.webp";
import products from "./assets/projects/products.webp";
import realestate from "./assets/projects/realestate.webp";
import pdr from "./assets/projects/pdr.webp";

import bookShop from "./assets/projects/bookShop.webp";
import hms from "./assets/projects/odoo-hms.webp";
import crowdFund from "./assets/projects/crowd-fund.webp";
import blog from "./assets/projects/blog.webp";


type project ={
id: number,
category: string,
img: string,
title: string,
skills:string[],
url_code: string,
url_deploy?: string
}


export const projects: project[] = [
  {
    id: 0,
    category: "front-end",
    img: realestate,
    title: "real estate home page",
    skills: ["react", "CSS3", "responsive"],
    url_code: "https://github.com/salmaayad0/RealState.git",
    url_deploy: "https://realstate-7r3.pages.dev/",
  },
  {
    id: 1,
    category: "front-end",
    img: pdr,
    title: "patient doctor track system",
    skills: ["React", "Redux", "styled-componets", "API"],
    url_code: "https://github.com/salmaayad0/PDR-system.git",
  },
  {
    id: 2,
    category: "front-end",
    img: movies,
    title: "movies website",
    skills: ["JS", "CSS3", "Bootstrp", "API"],
    url_code: "https://github.com/salmaayad0/Movies.git",
    url_deploy: "https://movies-sigma-two.vercel.app/",
  },
  {
    id: 3,
    category: "front-end",
    img: furniture,
    title: "furniture-landing page",
    skills: ["HTML5", "CSS3", "Bootstrap"],
    url_code: "https://github.com/salmaayad0/furniture.git",
    url_deploy: "https://furniture-tawny-gamma.vercel.app/",
  },
  {
    id: 4,
    category: "front-end",
    img: login,
    title: "login signup page",
    skills: ["React", "styled-components", "custom-hook", "tailwind"],
    url_code: "https://github.com/salmaayad0/login-registration.git",
    url_deploy: "https://login-app-one-blue.vercel.app/login",
  },
  {
    id: 5,
    category: "front-end",
    img: bootstrapHome,
    title: "Bootstrap theme",
    skills: ["Bootstrap", "CSS3", "HTML5"],
    url_code: "https://github.com/salmaayad0/Bootstrap-themes.git",
    url_deploy: "https://bootstrap-themes-mocha.vercel.app/",
  },
  {
    id: 6,
    category: "front-end",
    img: products,
    title: "products storage system",
    skills: ["React", "Redux", "Bootstrap", "API"],
    url_code: "https://github.com/salmaayad0/products-storage-system.git",
  },
  {
    id: 7,
    category: "front-end",
    img: productDashboard,
    title: "product dashboard",
    skills: ["Bootstrap", "CSS3", "HTML5", "JS"],
    url_code: "https://github.com/salmaayad0/Product-Dashboard-.git",
  },
  {
    id: 8,
    category: "front-end",
    img: landing,
    title: "landing page",
    skills: ["HTML5", "CSS3", "js", "animations"],
    url_code: "https://github.com/salmaayad0/Landing-page.git",
  },
  {
    id: 9,
    category: "back-end",
    img: bookShop,
    title: "BookShop e-commerce",
    skills: ["Django", "PostgreSql", "Django.test"],
    url_code: "https://github.com/salmaayad0/book-shop-django.git",
  },
  {
    id: 10,
    category: "back-end",
    img: hms,
    title: "odoo hospital management system",
    skills: ["Odoo", "PostgreSql"],
    url_code: "https://github.com/salmaayad0/odoo-hms.git",
  },
  {
    id: 11,
    category: "back-end",
    img: crowdFund,
    title: "CRUD for users and projects",
    skills: ["Python"],
    url_code: "https://github.com/salmaayad0/crowd-fund-python.git",
  },
  {
    id: 12,
    category: "back-end",
    img: blog,
    title: "Blog",
    skills: ["Flask"],
    url_code: "https://github.com/salmaayad0/flask-blog.git",
  },
];

