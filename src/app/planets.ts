export interface myInfo
{
    A4Name: string;
    A4Email: string;
    A4Login: string;
    A4Desc: string
}


export interface Planets{
    planetName : string,
    planetColor : string,
    planetRadiusKM : number,
    distInMillionsKM : {
        fromSun : number,
        fromEarth : number
        },
    image : string
}