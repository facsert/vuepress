import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    // "",
    {
      text: "Table",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Articles",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
  "/Bash/": [
    {
      text: "Bash Tutorial",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Code/": [
    {
      text: "Go Tutorial",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Python/": [
    {
      text: "Python skills",
      icon: "python",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Go/": [
    {
      text: "Go Tutorial",
      icon: "laptop-code",
      prefix: "modules/",
      link: "modules/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Go Tutorial",
      icon: "laptop-code",
      prefix: "tutorial/",
      link: "tutorial/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Tool/": [
    {
      text: "Tool",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Docker/": [
    {
      text: "Docker Tutorial",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Linux/": [
    {
      text: "Linux Tutorial",
      icon: "linux",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    },
  ],
  "/Git/": [
    {
      text: "Git Tutorial",
      icon: "laptop-code",
      prefix: "",
      link: "/",
      collapsible: true,
      children: "structure",
    }
  ],
});
