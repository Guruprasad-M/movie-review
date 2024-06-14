import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies =createAsyncThunk(' movies/fetchAsyncMovies',async(term)=>{
  
  const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
return (response.data);

})


export const fetchAsyncShows=createAsyncThunk(
  "movies/fetchAsyncShows",
  async(term)=>{

  const response=await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
      );
  return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail=createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async(id)=>{

  const response=await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
      );
  return response.data;
  }
);


const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched successfully-movies!");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("Rejected");
      })
      .addCase(fetchAsyncShows.fulfilled, (state,{payload}) => {
        console.log(payload);  
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state,{payload}) => {
        console.log("Fetched successfully-MovieandShows!"); 
        console.log(payload)
        state.selectMovieOrShow = payload;
      })

  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShow = (state) => state.movies.selectMovieOrShow;

export default movieSlice.reducer;


