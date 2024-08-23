const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "kaziabulhasib",
  id: 105558871,
  node_id: "U_kgDOBkqzVw",
  avatar_url: "https://avatars.githubusercontent.com/u/105558871?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/kaziabulhasib",
  html_url: "https://github.com/kaziabulhasib",
  followers_url: "https://api.github.com/users/kaziabulhasib/followers",
  following_url:
    "https://api.github.com/users/kaziabulhasib/following{/other_user}",
  gists_url: "https://api.github.com/users/kaziabulhasib/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/kaziabulhasib/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/kaziabulhasib/subscriptions",
  organizations_url: "https://api.github.com/users/kaziabulhasib/orgs",
  repos_url: "https://api.github.com/users/kaziabulhasib/repos",
  events_url: "https://api.github.com/users/kaziabulhasib/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/kaziabulhasib/received_events",
  type: "User",
  site_admin: false,
  name: "Kazi Abul Hasib",
  company: null,
  blog: "https://kaziabulhasib-54756.web.app",
  location: "Burdwan, West Bengal, India",
  email: null,
  hireable: null,
  bio: "Hi, I’m Hasib, a Junior Web Developer specializing in front-end development with a growing proficiency in back-end technologies.\r\n\r\n",
  twitter_username: null,
  public_repos: 58,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2022-05-14T16:41:55Z",
  updated_at: "2024-07-21T11:21:59Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.json(githubData);
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact me for details .............</h1>");
});
app.get("/contactme", (req, res) => {
  res.send("<h1>Contact me for details 222.............</h1>");
});

app.listen(port, () => {
  console.log(`First express app listening on port ${port}`);
});
