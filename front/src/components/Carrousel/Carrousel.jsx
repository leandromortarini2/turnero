import React, { useEffect } from "react";

const Carrousel = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById("auto-carousel");

      if (carousel) {
        const scrollTop = carousel.scrollTop;
        const scrollHeight = carousel.scrollHeight;
        const clientHeight = carousel.clientHeight;

        const isAtBottom = scrollTop + clientHeight >= scrollHeight;

        if (isAtBottom) {
          carousel.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          carousel.scrollBy({ top: clientHeight, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="auto-carousel"
      className="carousel carousel-vertical rounded-box h-[550px] overflow-y-scroll scroll-smooth"
    >
      {[
        "https://st.depositphotos.com/1183609/2025/i/450/depositphotos_20256657-stock-photo-hospital-corridor-with-chairs.jpg",
        "https://media.gettyimages.com/id/1194419312/es/foto/salir-a-salvar-m%C3%A1s-vidas.jpg?s=612x612&w=gi&k=20&c=u7K_dOLRkw1HJheGfSsXWGdrC0GVWaLKfxkLgwP9NrU=",
        "https://media.gettyimages.com/id/1065300316/es/foto/paciente-femenino-senior-de-consultor%C3%ADa-con-la-joven-doctora.jpg?s=612x612&w=gi&k=20&c=cmy7DuA_Pc0IltIJD64vE9tLQ9MG-MdO5FREU_4yWf8=",
        "https://previews.123rf.com/images/bialasiewicz/bialasiewicz1409/bialasiewicz140900519/31368634-vertical-view-of-doctor-comforting-female-patient.jpg",
        "https://www.shutterstock.com/image-photo/friendly-positive-pediatrician-examining-patient-600nw-2261002203.jpg",
        "https://www.shutterstock.com/image-photo/vertical-shot-young-black-patient-260nw-2162251905.jpg",
      ].map((photoId) => (
        <div className="carousel-item h-full" key={photoId}>
          <img src={photoId} alt={photoId} />
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
