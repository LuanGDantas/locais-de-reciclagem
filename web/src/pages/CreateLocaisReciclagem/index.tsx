import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { ICidadeDto } from '../../dtos/ICidadeDto';
import { api } from '../../services/api';


export function CreateLocaisReciclagem() {
  const [cidades, setCidades] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    Identificacao: '',
    CEP: '',
    Logradouro: '',
    NumeroEndereco: '',
    Complemento: '',
    Bairro: '',
    Cidade: '',
    Capacidade: undefined,
  });

  const [selectedCidade, setSelectedCidade] = useState('0');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get<ICidadeDto[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios').then(response => {
      const nomesCidades = response.data.map(cidade => cidade.nome)
      setCidades(nomesCidades)
    });
  }, []);

  function handleSelectCidade(event: ChangeEvent<HTMLSelectElement>) {
    const cidade = (event.target.value);
    setSelectedCidade(cidade);
  }

  function handleImputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const {
      Identificacao,
      CEP,
      Logradouro,
      NumeroEndereco,
      Complemento,
      Bairro,
      Capacidade
    } = formData;
    const Cidade = selectedCidade;
    const data = {
      Identificacao,
      CEP,
      Logradouro,
      NumeroEndereco,
      Complemento,
      Bairro,
      Cidade,
      Capacidade
    }

    await api.post('locaisReciclagem', data);
    alert('Local de Reciclagem criado')
    navigate('/')
  }

  return (
    <div id="page-create-local">
      <header>
        <img src={logo} alt="LReciclagem" />

        <Link to="/">
          <FiArrowLeft />
          Volta à Página Inicial
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastro do <br />local de reciclagem</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field-group">
            <div className="field">
              <label htmlFor="Identificacao">Identificação</label>
              <input
                type="text"
                name="Identificacao"
                id="Identificacao"
                onChange={handleImputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="Capacidade">Capacidade</label>
              <input
                type="number"
                name="Capacidade"
                id="Capacidade"
                onChange={handleImputChange}
              />
            </div>
          </div>

        </fieldset>

        <div className="field-group">
          <div className="field">
            <label htmlFor="Logradouro">Logradouro</label>
            <input
              type="text"
              name="Logradouro"
              id="Logradouro"
              onChange={handleImputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="NumeroEndereco">Número</label>
            <input
              type="number"
              name="NumeroEndereco"
              id="NumeroEndereco"
              onChange={handleImputChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="field">
            <label htmlFor="Bairro">Bairro</label>
            <input
              type="text"
              name="Bairro"
              id="Bairro"
              onChange={handleImputChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="field">
            <label htmlFor="Complemento">Complemento</label>
            <input
              type="text"
              name="Complemento"
              id="Complemento"
              onChange={handleImputChange}
            />
          </div>
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="Cidade">Cidade</label>
            <select
              name="Cidade"
              id="Cidade"
              value={selectedCidade}
              onChange={handleSelectCidade}
            >
              <option value="0">Selecione a Cidade</option>
              {cidades.map(cidade => (
                <option key={cidade} value={cidade}>{cidade}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="CEP">CEP</label>
            <input
              type="text"
              name="CEP"
              id="CEP"
              onChange={handleImputChange}
            />
          </div>
        </div>

        <button type="submit">
          Cadastrar Local de Reciclagem
        </button>
      </form>
    </div >
  )
};