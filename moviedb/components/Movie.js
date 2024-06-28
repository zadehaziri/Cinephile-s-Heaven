const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export function Movie(movie) {
    const image = (movie.backdrop_path !== null) ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'http://127.0.0.1:5500/assets/images/noimage.png';
    return `
    <div class="row">
        <div class="col-5">
            <img src="${image}" class="card-img-top" alt="${movie.original_title}" style="margin-top: 70px;">
        </div>
        <div class="col-6 offset-1">
            <div class="d-flex align-items-center justify-content-between">
                <h3>${movie.original_title}</h3>
                <div>
                    <button class="btn btn-sm btn-outline-warning" id="add-to-favourites">
                        <i class="bi bi-heart"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-warning ms-2" id="share">
                        <i class="bi bi-share"></i>
                    </button>
                </div>
            </div>
            <p class="my-4">
                ${movie.overview}
            </p>
            <table class="table">
                 <tr>
                    <td>Spoken languages</td><td>${movie.spoken_languages.map(language => language.name).join(', ')}</td>
                <tr> 
                <tr>
                    <td>Runtime</td><td>${movie.runtime}</td>
                </tr>

                    <td>Genres</td><td>${movie.genres.map(genre => genre.name).join(', ')}</td></tr>
                <tr>
                    <td>Release date</td><td>${movie.release_date}</td>
                </tr>
                <tr>
                    <td>Rating</td><td>${movie.vote_average}</td>
                </tr>
            </table>
        </div>
    </div>
    `;
}
