import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutmePageComponent } from './pages/aboutme-page/aboutme-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AchievementPageComponent } from './pages/achievement-page/achievement-page.component';
import { ContactmePageComponent } from './pages/contactme-page/contactme-page.component';
import { HeaderComponent } from './components/individual/header/header.component';
import { FooterComponent } from './components/individual/footer/footer.component';
import { HeaderHeroComponent } from './components/combined/header-hero/header-hero.component';
import { HeroSectionComponent } from './components/individual/hero-section/hero-section.component';
import { CarouselTechStackComponent } from './components/individual/carousel-tech-stack/carousel-tech-stack.component';
import { SmallIntroComponent } from './components/individual/small-intro/small-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutmePageComponent,
    BlogPageComponent,
    ProjectPageComponent,
    AchievementPageComponent,
    ContactmePageComponent,
    HeaderComponent,
    FooterComponent,
    HeaderHeroComponent,
    HeroSectionComponent,
    CarouselTechStackComponent,
    SmallIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
