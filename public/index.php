<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to Shawarma Zone</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to Shawarma Zone 🍔</h1>
  <div id="categories">
    <button onclick="loadMenu('shawarma')">Shawarma</button>
    <button onclick="loadMenu('burger')">Burger</button>
    <button onclick="loadMenu('pizza')">Pizza</button>
  </div>
  <div id="menu-container">
    <!-- Menu will load here via JS -->
  </div>
  <script src="app.js"></script>
</body>
</html>
