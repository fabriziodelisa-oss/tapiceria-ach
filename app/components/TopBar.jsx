import { Mail, MapPin, Phone } from "lucide-react";

/**
 * TopBar — barra superior estilo eltapicero.es
 *
 * Props (todas opcionales, con valores por defecto):
 *   logo        {string}  URL del logo
 *   logoAlt     {string}  Texto alternativo del logo
 *   email       {string}
 *   address     {string}
 *   phone       {string}  Número en formato tel: (ej. "+34667626552")
 *   phoneLabel  {string}  Etiqueta encima del teléfono (ej. "Presupuesto Gratuito")
 */
export default function TopBar({
  logo = "../images/achlogo.png",
  logoAlt = "Logo",
  email = "tapiceriaach@hotmail.com",
  address = "Calle Olimpia Nº57, Costa del silencio, Tenerife",
  phone = "+34 638 74 67 88",
  phoneLabel = "Presupuesto Gratuito",
}) {
  return (
    <>
      <style>{`
        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 60;
          background-color: #1a1a1a;
          color: #e70a0a;
          font-family: 'Georgia', serif;
          width: 100%;
          border-bottom: 2px solid #920606;
        }

        .topbar__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* Logo */
        .topbar__logo a {
          display: inline-flex;
          align-items: center;
        }
        .topbar__logo img {
          height: 54px;
          width: auto;
          object-fit: contain;
          filter: brightness(1.05);
        }

        /* Info items */
        .topbar__info {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .topbar__item {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .topbar__icon {
          color: #e70a0a;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
        }

        .topbar__text {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .topbar__label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #e70a0a;
          font-family: 'Arial Narrow', 'Arial', sans-serif;
          font-weight: 700;
        }

        .topbar__value {
          font-size: 13.5px;
          color: #ffffff;
          font-family: 'Arial', sans-serif;
          font-weight: 400;
        }

        .topbar__item--link:hover .topbar__value {
          color: #e70a0a;
          transition: color 0.2s ease;
        }

        /* Divisor vertical */
        .topbar__divider {
          width: 1px;
          height: 36px;
          background: #3a3228;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .topbar__inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 12px 16px;
            gap: 12px;
          }
          .topbar__info {
            gap: 16px;
          }
          .topbar__divider {
            display: none;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="topbar__inner">

          {/* Logo */}
          <div className="topbar__logo">
            <a href="/">
              <img src={logo} alt={logoAlt} />
            </a>
          </div>

          {/* Info */}
          <div className="topbar__info">

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="topbar__item topbar__item--link"
              aria-label={`Enviar email a ${email}`}
            >
              <Mail className="topbar__icon" strokeWidth={1.5} />
              <span className="topbar__text">
                <span className="topbar__label">E-mail</span>
                <span className="topbar__value">{email}</span>
              </span>
            </a>

            <div className="topbar__divider" />

            {/* Dirección */}
            <div className="topbar__item" aria-label="Dirección">
              <MapPin className="topbar__icon" strokeWidth={1.5} />
              <span className="topbar__text">
                <span className="topbar__label">Dirección</span>
                <span className="topbar__value">{address}</span>
              </span>
            </div>

            <div className="topbar__divider" />

            {/* Teléfono */}
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="topbar__item topbar__item--link"
              aria-label={`Llamar al ${phone}`}
            >
              <Phone className="topbar__icon" strokeWidth={1.5} />
              <span className="topbar__text">
                <span className="topbar__label">{phoneLabel}</span>
                <span className="topbar__value">{phone}</span>
              </span>
            </a>

          </div>
        </div>
      </header>
    </>
  );
}
