import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    //public Server: string = "http://localhost:5000/";
    public Server: string = "http://www.omdbapi.com/";
    public localhost: string = "http://localhost:8081/roominfo/";
    
    //public ApiUrl: string = "api/";
    public ApiUrl: string = "?";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public ServerWithRoomUrl = this.localhost ;
}