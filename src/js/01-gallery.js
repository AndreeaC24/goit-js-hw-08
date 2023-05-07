import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryLink } from './01-gallery-markup.js';

//simplelightbox
var lightbox = new SimpleLightbox(galleryLink, {
  captionsData: 'alt',
  captionDelay: 250,
});
