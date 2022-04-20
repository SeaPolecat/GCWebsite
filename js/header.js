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

<a href="tutorial.html">
    <h1 class="menu">Support</h1>
</a>

<a href="tutorial.html">
    <h1 class="menu">Invite Me</h1>
</a>
</header>

<script>
function activate(id) {
    document.getElementById(id).classList.add("menu-active");
}
</script>
`);
