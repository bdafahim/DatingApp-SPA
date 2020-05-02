import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../_models/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPost(id): Observable<Post> {
    return this.http.get<Post>(this.baseUrl + "users/" + id + "/posts");
  }
}
