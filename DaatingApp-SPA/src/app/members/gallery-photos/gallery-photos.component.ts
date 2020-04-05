import { Component, OnInit, Input } from "@angular/core";
import { Photo } from "src/app/_models/photo";

@Component({
  selector: "app-gallery-photos",
  templateUrl: "./gallery-photos.component.html",
  styleUrls: ["./gallery-photos.component.css"],
})
export class GalleryPhotosComponent implements OnInit {
  @Input() photos: Photo[];
  constructor() {}

  ngOnInit() {}
}
