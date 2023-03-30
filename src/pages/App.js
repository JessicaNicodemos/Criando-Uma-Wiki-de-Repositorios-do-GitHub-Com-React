import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import gitLogo from '../assets/github.png';
import { useState } from 'react';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

const handleSerchRepo = async () => {

  const {data} = await api.get(`repos/${currentRepo}`)

  if(data.id){
    setRepos(prev => [...prev, data]);
    setCurrentRepo('')
    return
  }
  alert('Repositório não encontrado')
}

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="githib logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSerchRepo} />
      {repos.map(repo => <ItemRepo repo={repo}/> )}
    </Container>
  );
}

export default App;
