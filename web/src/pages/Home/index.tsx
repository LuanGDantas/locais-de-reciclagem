import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import './styles.css'
import logo from '../../assets/logo.svg';
import { ILocaisReciclagemDto } from '../../dtos/ILocaisReciclagemDto';


export function Home() {
  const [locais, setLocais] = useState<ILocaisReciclagemDto[]>([])

  useEffect(() => {
    api.get('locaisReciclagem').then(response => {
      setLocais(response.data)
    })
  }, []);

  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="LReciclagem" />
        </header>
        <main>
          <h1>
            Gerenciar Locais de Reciclagem
          </h1>
          <Link to="/create-locais">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um Local de Reciclagem</strong>
          </Link>
        </main>
        <div className='listagem'>
          <Link to="/listar-locais">
            <strong>Locais de Reciclagem</strong>
          </Link>
        </div>
        <section className='map'>
          <MapContainer center={[-23.6815315, -46.8754904]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locais.map(local => (
              <Marker
                position={[-23.6815315 + (local.LocalReciclagem_Id / 190), -46.8754904 + (local.LocalReciclagem_Id / 1000)]} key={String(local.LocalReciclagem_Id)}
              >
                <Tooltip>
                  {local.Identificacao}
                </Tooltip>
                <Popup>
                  {`Capacidade: ${local.Capacidade} m³`}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </section>
      </div>
    </div>
  );
};