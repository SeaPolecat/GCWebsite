document.write(`
    <header>
        <img class="logo" src="images/logo.png" alt="Gimme Cards logo">

        <a id="about" class="menu" href="about.html">
            <h1>About Me</h1>
        </a>

        <a id="tutorial" class="menu" href="tutorial.html">
            <h1>Tutorial</h1>
        </a>

        <a id="commands" class="menu" href="commands.html">
            <h1>Commands</h1>
        </a>

        <a class="menu" href="tutorial.html">
            <h1>Support</h1>
        </a>

        <a class="menu" href="tutorial.html">
            <h1>Invite Me</h1>
        </a>
    </header>

    <script>
        function activate(id) {
            document.getElementById(id).classList.add("menu-active");
        }
    </script>
`);
