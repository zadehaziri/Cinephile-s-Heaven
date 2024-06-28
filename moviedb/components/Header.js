
export function Header() {
    const current_page = window.location.pathname;
    return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand permanent-marker-regular" href="home.html" style="font-size: 2rem; font-style: cursive;">Cinephile's Heaven</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link ${current_page === '/home.html' ? 'active' : ''}" href="home.html"><i class="bi bi-house fs-5 me-1"></i> Home</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link ${current_page === '/favourites.html' ? 'active' : ''}" href="favourites.html"><i class="bi bi-heart-fill fs-5 me-1"></i> Favorites</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link ${current_page === '/about.html' ? 'active' : ''}" href="about.html"><i class="bi bi-info-circle fs-5 me-1"></i> About</a>
                    </li>
                </ul>
                <button class="btn btn-outline-success" id="search-btn"><i class="bi bi-search fs-5"></i></button>
            </div>
        </div>
    </nav>
    `;
}
