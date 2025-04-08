export const LOGO = "/Netflix-Logo.png";
export const ACC = "https://tse3.mm.bing.net/th?id=OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa&pid=Api&P=0&h=220";

export const OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzhjMGFhZjA2YmZiMmNkMjI5MDJhNDY3N2JhYjkyOSIsIm5iZiI6MTcyNDY2NTI1Ni44MDg1NDQsInN1YiI6IjY2Y2M0YjliY2VkNjZkMjZlYjNkMmE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mL-ZfMVuqB-eIbtEZM0p8zDVGy-si2uhVVjp1xtju6M',
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

// export const MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const SUPPORTED_LANGUAES = [{identifier:"en", name:"English"}, {identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}];