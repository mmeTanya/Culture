/* import React, { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader';
import { Bounce } from "react-awesome-reveal"
import s from "../styles/gallery.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Gallery1 = () => {
  const [images, setImages] = useState([])
  const [status, setStatus] = useState(Status.IDLE);
  const [showIndex, setShowIndex] = useState(false)
  const [status, setStatus] = useState(Status.IDLE);

  showBullets: true,
  infinite: true,
  showThumbnails: true,
  showFullscreenButton: true,
  showGalleryFullscreenButton: true,
  showPlayButton: true,
  showGalleryPlayButton: true,
  showNav: true,
  isRTL: false,
  slideDuration: 450,
  slideInterval: 2000,
  slideOnThumbnailOver: false,
  thumbnailPosition: "bottom",
  showVideo: false,
  useWindowKeyDown: true,


  useEffect(() => {
    onLoadImages()
  }, []);

  const onLoadImages = async () => {
    try {
      const response = await fetch('/api/gallery')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.gallery.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setImages(result.gallery)
      console.log(images)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.gallery}>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <div className={s.gallery__list}>
        <ImageGallery items={images} />
      </div>
      }
    </section>
  );
};

export default Gallery1;
 */