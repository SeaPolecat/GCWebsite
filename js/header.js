document.write(`
<header id="top">
<img class="top-logo" src="images/logo2.png" alt="top-logo">

<div class="top-menu">
    <a href="index.html">
        <h1 id="about" class="top-menu">About Me</h1>
    </a>
    <h1 class="top-menu">|</h1>

    <a href="tutorial.html">
        <h1 id="tutorial" class="top-menu">Tutorial</h1>
    </a>
    <h1 class="top-menu">|</h1>

    <a href="commands.html">
        <h1 id="commands" class="top-menu">Commands</h1>
    </a>
    <h1 class="top-menu">|</h1>

    <a href="https://ko-fi.com/gimmecards" target="_blank">
        <h1 class="top-menu">Premium</h1>
    </a>
    <h1 class="top-menu">|</h1>

    <a href="https://discord.gg/wmVvK2cyzM" target="_blank">
        <h1 class="top-menu">Play Now</h1>
    </a>

    <a class="menu-link" href="menu.html">
        <h1 class="menu-icon">☰ Menu</h1>
    </a>
</div>
</header>

<script>
function activate(id) {
    document.getElementById(id).classList.add("menu-active");
}
</script>
`);
