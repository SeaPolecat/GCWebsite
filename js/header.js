document.write(`
<header>
<img class="logo" src="images/logo.png" alt="logo">

<div class="top-menu">
    <a href="index.html">
        <h1 id="about" class="top-menu">About Me</h1>
    </a>
    <a href="tutorial.html">
        <h1 id="tutorial" class="top-menu">Tutorial</h1>
    </a>
    <a href="commands.html">
        <h1 id="commands" class="top-menu">Commands</h1>
    </a>
    <a href="https://discord.gg/X8DKPfWTr7" target="_blank">
        <h1 class="top-menu">Support</h1>
    </a>
    <a href="https://discord.com/oauth2/authorize?client_id=814025499381727232&permissions=272448&scope=bot" target="_blank">
        <h1 class="top-menu">Invite Me</h1>
    </a>
</div>
</header>

<script>
function activate(id) {
    document.getElementById(id).classList.add("menu-active");
}
</script>
`);
