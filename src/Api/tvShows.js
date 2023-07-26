import axios from "axios";

const BaseUrl = "https://api.themoviedb.org/3/";
const Auth = "?api_key=11b7d3f9368869b6fb62ab44ab899e55";

export class fechMovieData {
  static async fechPopular() {
    const responce = await axios.get(BaseUrl + "tv/popular" + Auth);
    console.log("-->", responce.data);
    return responce.data.results;
  }
  static async fechRecommendations(curreShowID) {
    const responce = await axios.get(
      BaseUrl + `tv/${curreShowID}/recommendations` + Auth
    );
    console.log("-->", responce.data);
    return responce.data.results;
  }
  static async searchQuery(searchParams) {
    const responce = await axios.get(
      BaseUrl + "search/tv" + Auth + `&query=${searchParams}`
    );
    console.log("-->", responce.data);
    return responce.data.results;
  }
}
