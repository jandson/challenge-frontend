import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoListComponent } from './video-list/video-list.component';
import { DetailsComponent } from './details/details.component';
import { YouTubePlayerModule } from '@angular/youtube-player';



@NgModule({
  declarations: [HomeComponent, VideoListComponent, DetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    HomeRoutes
  ],
})
export class HomeModule { }
