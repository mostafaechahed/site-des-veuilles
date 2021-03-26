const search = document.getElementById('search');
const matchlist = document.getElementById('match_list');

//search states.json and filter it
const searchstates = async searchText => {
    const res = await fetch('../data/vielle.json');
    const states = await res.json();

    //get marches to current text input
let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);

}
    );

    if  (searchText.lenght ===0){
        matches =[];
        matchlist.innerHTML ='';
    }

    outputHTML(matches);
  
};

// show result in htmlo

const outputHTML=matches => {
    if(matches.lenght > 0){
        const html = matches.map(match =>
            <div class="card card-body mb-1">
                <h2>${match.name} (${match.abbr}) <span class   ="text-primary">
                    ${match.capital}
                </span>
                </h2>
                <small>lat:${match.lat}</small>

            </div>
            )
            .join('');
            matchlist.innerHTML = html;

    }
};

search.addEventListener('input', () => searchstates(search.value));
