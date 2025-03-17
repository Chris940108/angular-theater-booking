export interface Movie{
    posterUrl:String;
    title:String;
    description:String;
    genre:String;
    rating:String;
}

export interface Genre{
    title:String;
    description:String;
    movies:Movie[];
}


export interface ShowTimes{
    time:String;
    seatsAvailable:number;
}

export interface Theaters{
    name:String;
    showTimes:ShowTimes[];
}

export interface Movies{
    title:String;
    theaters:Theaters[];
}

export interface MovieSchedule{
    movies:Movies[];
}