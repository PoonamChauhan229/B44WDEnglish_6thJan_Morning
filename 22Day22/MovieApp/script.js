// 
// /kqjL17yufvn9OVLyXYpvtyrFfak.jpg

let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9ccfb971e2a6651bed5113fb46e7f431"
let imgUrl="https://image.tmdb.org/t/p/w500"
async function getMovieData(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res.results)
    showMovies(res.results)//args
}
getMovieData()

let mainMovieDiv=document.getElementById('mainMovieDiv')
//console.log(mainMovieDiv)

function showMovies(movies){
    //mainMovieDiv.innerHTML=""
    console.log(movies)
    movies.map((element,index)=>{
        console.log(element)
        console.log(index)
        var movieDiv=document.createElement('div')
        movieDiv.classList.add("col","movie")
        movieDiv.innerHTML=`
        <div class="card h-100">
            <img src=${imgUrl+element.poster_path} class="card-img-top" alt="..." />
            <div class="card-body p-0 m-1">
              <div class="d-flex justify-content-between">
              <h5 class="card-title">${element.title}</h5>
              <h5 class="card-title">
              <span class='${getClassByVote(element.vote_average)}'>${element.vote_average}</span>  
              </h5>
              </div>
              <!-- overview Details -->
              <div class="card card-header overview">
                <p>OverView</p>
                <p>${element.overview}</p>
              </div>
            </div>        
          </div>

        `
        mainMovieDiv.append(movieDiv)
    })
}


function getClassByVote(vote){
    if(vote>=8){
        return "green"
    }else if(vote>=5){
        return"orange"
    }else{
        return "red"
    }
}

//Reference:
{/* <span id=btn${i} onClick="getWeather('${cityname}')"></span> */}