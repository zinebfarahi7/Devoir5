import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1 className="text-center mt-5">Contact</h1>
      <p className="text-center mt-3 mb-3">
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <hr className="w-25 mx-auto text-primary mb-5" />
      <div className="container shadow p-4 mb-5 bg-white rounded mt-5">
        <div className="row ">
          <div className="row col-12 col-md-6">
            <form className="col">
              <h2>Formulaire de contact</h2>
              <hr className="ms-0 text-primary mb-5" />
              <div className="mb-1">
                <label for="name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-1">
                <label for="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adress email"
                  required
                />
              </div>
              <div className="mb-1">
                <label for="phone" className="form-label"></label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>
              <div class="mb-1">
                <label class="form-label" for="sujet"></label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  class="form-control"
                  placeholder="Sujet"
                  required
                />
              </div>
              <div className="mb-1">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="18"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <div className="container text-center mb-3">
                <button type="submit" className="btn btn-primary mt-3">
                  <span>Envoyer</span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <h2>Mes coordonnées</h2>
            <hr className="ms-0 text-primary mb-5" />
            <div className="container">
              <h2>John Doe</h2>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-map me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"
                  />
                </svg>
                40 rue Laure Diebold <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                69009 Lyon, France <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-phone me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>{" "}
                10 20 30 40 50
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
                john.doe@gmail.com
              </p>
            </div>
            <div className="ratio ratio-1x1">
              <iframe
                title="Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.286357135106!2d4.796945040824569!3d45.77834083357677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1745656096359!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
