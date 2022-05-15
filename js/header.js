document.write(`
<header>
<img class="logo" src="images/logo.png" alt="Gimme Cards logo">

<a href="about.html">
    <h1 id="about" class="menu">About Me</h1>
</a>

<a href="tutorial.html">
    <h1 id="tutorial" class="menu">Tutorial</h1>
</a>

<a href="commands.html">
    <h1 id="commands" class="menu">Commands</h1>
</a>

<a href="https://discord.gg/X8DKPfWTr7" target="_blank">
    <h1 class="menu">Support</h1>
</a>

<a href="https://discord.com/oauth2/authorize?client_id=814025499381727232&permissions=272448&scope=bot" target="_blank">
    <h1 class="menu">Invite Me</h1>
</a>
</header>

<script>
function activate(id) {
    document.getElementById(id).classList.add("menu-active");
}
</script>
`);
