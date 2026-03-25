// ── Shared Navigation & Footer ──────────────

function getNav(activePage) {
    const pages = [
        { name: 'Home', href: 'index.html' },
        { name: 'Solutions', href: 'solutions.html' },
        { name: 'Other', href: 'other.html' },
        { name: 'Contact', href: 'contact.html' },
    ];

    const links = pages.map(p =>
        `<a href="${p.href}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a>`
    ).join('');

    return `
    <nav class="nav">
        <a href="index.html" class="nav-brand">Tyree<span>Spatial</span></a>
        <ul class="nav-links" id="navLinks">${links}</ul>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </nav>`;
}

function getFooter() {
    return `
    <footer class="footer">
        <div class="footer-grid">
            <div>
                <div class="footer-brand">Tyree<span>Spatial</span></div>
                <p class="footer-tagline">Geospatial data infrastructure and intelligence platforms for energy and environmental industries.</p>
            </div>
            <div class="footer-col">
                <h4>Products</h4>
                <a href="solutions.html#snapshot">Snapshot</a>
                <a href="solutions.html#groundwork">Groundwork</a>
                <a href="solutions.html#docudistill">DocuDistill</a>
            </div>
            <div class="footer-col">
                <h4>Navigation</h4>
                <a href="index.html">Home</a>
                <a href="solutions.html">Solutions</a>
                <a href="other.html">Other Work</a>
            </div>
            <div class="footer-col">
                <h4>Contact</h4>
                <a href="mailto:tyreespatial@gmail.com">tyreespatial@gmail.com</a>
                <a href="contact.html">Get in Touch</a>
            </div>
        </div>
        <div class="footer-bottom">&copy; ${new Date().getFullYear()} Tyree Spatial. All rights reserved.</div>
    </footer>`;
}

function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        links.classList.toggle('open');
    });

    // Close menu when a link is tapped
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('open');
            links.classList.remove('open');
        });
    });
}

// Scroll reveal
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const check = () => {
        const wh = window.innerHeight;
        els.forEach((el, i) => {
            if (el.getBoundingClientRect().top < wh - 80) {
                setTimeout(() => el.classList.add('active'), (i % 6) * 60);
            }
        });
    };
    window.addEventListener('scroll', check);
    window.addEventListener('load', check);
    check();
}
