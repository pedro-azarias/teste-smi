import React, { useState, useEffect } from 'react';
import {
  Container,
  NavBar,
  Img,
  ImgLixeira,
  Header,
  H1,
  BotaoAdicionar,
  Table,
  FixedTableContainer,
  THead,
  Tr,
  Td,
  Th,
  Tbody,
  EditarDemandaModal,
  EditarDemandaTable,
  TheadEditar,
  TrEditar,
  ThEditar,
  ThDescricaoEditar,
  ThPlanEditar,
  ThProdEditar,
  ThRemoverEditar,
  TbodyEditar,
  TdEditarSku,
  TdDescricaoEditar,
  TdPlanEditar,
  TdProdEditar,
  TdLixeiraEditar,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  H1Modal,
  InputData,
  TabelaModal,
  TheadModal,
  Select,
  TrModal,
  TdSku,
  TdDescricaoModal,
  TdTotalPlan,
  TdTotalProd,
  TdRemover,
  InputPlan,
  InputProd,
  DescricaoModal,
  TbodyModal,
  Footer,
  FooterParagraph,
  ThTotalPlan,
  ThTotalProd,
  ThRemover,
  ThSku,
  IconeEditar,
  BotaoCancelar,
  BotaoSalvar,
  BotaoExcluir
} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Index() {
  const [demandas, setDemandas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingDemanda, setEditingDemanda] = useState(null);
  const [editDemanda, setEditDemanda] = useState({});
  const [quantidadeSkus, setQuantidadeSkus] = useState([]);
  const [linhaAtiva, setLinhaAtiva] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [totalPlan1, setTotalPlan1] = useState('');
  const [totalProd1, setTotalProd1] = useState('');
  const [totalPlan2, setTotalPlan2] = useState('');
  const [totalProd2, setTotalProd2] = useState('');
  const [totalPlan3, setTotalPlan3] = useState('');
  const [totalProd3, setTotalProd3] = useState('');
  const [descricaoSKU, setDescricaoSKU] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  

  
  const apiUrl = 'http://localhost:3001';
  const [linhaEditando, setLinhaEditando] = useState(null);
  const [skus, setSkus] = useState({
    1: '',
    2: '',
    3: '',
  });

  const optionsToDescriptions = {
    '4298': 'LATINHA VERMELHA COM AZUL',
    '2323': 'LATINHA ROSA',
    '2222': 'LATINHA PRETA COM DOURADO',
  };

  const obterDescricaoDoSKU = (selectedSku) => {
    switch (selectedSku) {
      case '4298':
        return 'LATINHA VERMELHA COM AZUL';
      case '2323':
        return 'LATINHA ROSA';
      case '2222':
        return 'LATINHA PRETA COM DOURADO';
      default:
        return '';
    }
  };

  const openEditModal = (demanda, linha) => {
    setEditDemanda(demanda);
    setEditingDemanda(demanda);
    setLinhaAtiva(linha);
  
    
    const selectedSku = demanda.sku;
    const selectedTotalPlan = demanda.totalPlan;
    const selectedTotalProd = demanda.totalProd;
  
    
    const selectedDescricao = optionsToDescriptions[selectedSku];
  
    setEditDemanda((prevEditDemanda) => ({
      ...prevEditDemanda,
      sku: selectedSku,
      totalPlan: selectedTotalPlan,
      totalProd: selectedTotalProd,
    }));
    setDescricaoSKU(selectedDescricao);
  
    setIsEditModalOpen(true);
  };
  
  
  


  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingDemanda(null);
  };


  const handleRemoveDemand = (demandaParaRemover) => {
    const confirmRemoval = window.confirm('Tem certeza de que deseja remover esta demanda?');
  
    if (confirmRemoval) {
      setDemandas((prevDemandas) => prevDemandas.filter((demanda) => demanda.id !== demandaParaRemover.id));
  
      closeEditModal();
    }
  };
  
  












  useEffect(() => {
    fetchDemandas();
  }, []);

  const fetchDemandas = async () => {
    try {
      const response = await fetch(`${apiUrl}/demandas`); 
      const data = await response.json();
      setDemandas(data);
    } catch (error) {
      console.error('Erro ao buscar demandas:', error);
    }
  };

  const handleSelectChange = (e, linha) => {
    const selectedSku = e.target.value;
    const descricao = obterDescricaoDoSKU(selectedSku);
  
    setDescricaoSKU(descricao);
  
    setDescricao(optionsToDescriptions[selectedSku]);
  
    setLinhaEditando(linha);
  
    setSkus((prevSkus) => ({
      ...prevSkus,
      [linha]: selectedSku,
    }));
  };
  


  const openModal = () => {
    setIsModalOpen(true);
    setLinhaAtiva(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSkus({
      1: '',
      2: '',
      3: '',
    });
    setDescricao('');
    setTotalPlan1('');
    setTotalPlan2('');
    setTotalPlan3('');
    setTotalProd1('');
    setTotalProd2('');
    setTotalProd3('');
  };

  const closeModalIfNoData = () => {
    closeModal();
  };



  const handleSave = () => {
    const skusArray = Object.values(skus).filter((sku) => sku !== '');
  
    if (skusArray.length > 0) {
      let totalPlan = 0;
      let totalProd = 0;
  
      skusArray.forEach((sku) => {
        const skuTotalPlan = Number(
          sku === '4298' ? totalPlan1 : sku === '2323' ? totalPlan2 : totalPlan3
        );
        const skuTotalProd = Number(
          sku === '4298' ? totalProd1 : sku === '2323' ? totalProd2 : totalProd3
        );
        totalPlan += skuTotalPlan;
        totalProd += skuTotalProd;
      });
  
      const status =
        totalProd === 0 ? 'Em planejamento' : totalProd === totalPlan ? 'Concluído' : 'Em andamento';
  
      const updatedDemandas = [...demandas];
  
      const novaDemanda = {
        sku: skusArray[0], 
        descricao: optionsToDescriptions[skusArray[0]], 
        totalPlan,
        totalProd,
        data: selectedDate,
        status,
      };
  
      if (updatedDemandas.length === 0) {
        updatedDemandas.push(novaDemanda);
      } else {
        updatedDemandas.unshift(novaDemanda);
      }
  
      setDemandas(updatedDemandas);
  
      fetch(`${apiUrl}/demandas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([novaDemanda]),
      })
        .then((response) => response.json())
        .then(() => {
          closeModal();
        })
        .catch((error) => {
          console.error('Erro ao salvar demanda:', error);
        });
    } else {
      alert('Por favor, selecione pelo menos um SKU antes de salvar.');
    }
  };
  
  
  
  

  const handleRemove = (linha) => {
    setLinhaAtiva(linha); 

    if (linha === 1) {
      setSkus((prevSkus) => ({
        ...prevSkus,
        1: '',
      }));
      setDescricao('');
      setTotalPlan1('');
      setTotalProd1('');
    } else if (linha === 2) {
      setSkus((prevSkus) => ({
        ...prevSkus,
        2: '',
      }));
      setTotalPlan2('');
      setTotalProd2('');
    } else if (linha === 3) {
      setSkus((prevSkus) => ({
        ...prevSkus,
        3: '',
      }));
      setTotalPlan3('');
      setTotalProd3('');
    }
  };

  const confirmCancel = () => {
    const confirm = window.confirm(
      'Tem certeza que deseja cancelar? Todas as alterações feitas serão descartadas'
    );
    if (confirm) {
      closeModal();
    }
  };

  const handleEditSave = () => {
    fetch(`/demandas/${editDemanda.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editDemanda),
    })
      .then((response) => response.json())
      .then(() => {
        closeEditModal();
      });
  };


  const handleEditCancel = () => {
    setSelectedDate(demandas[linhaAtiva - 1].data);
    setSkus((prevSkus) => ({
      ...prevSkus,
      [linhaAtiva]: demandas[linhaAtiva - 1].sku,
    }));
    setTotalPlan1('');
    setTotalPlan2('');
    setTotalPlan3('');
    setTotalProd1('');
    setTotalProd2('');
    setTotalProd3('');

    closeModal();
  };

  return (
    <Container>
      <GlobalStyle />
      <NavBar>
        <Img src="/logo.png" alt="Logo da Empresa" />
      </NavBar>
      <Header>
        <H1>DEMANDAS DE PRODUÇÃO DE LATINHAS</H1>
        <BotaoAdicionar onClick={openModal}>+ ADICIONAR</BotaoAdicionar>
      </Header>
      <FixedTableContainer>
        <Table>
          <THead>
            <Tr>
              <Th>EDITAR</Th>
              <Th>PERÍODO</Th>
              <Th>SKUs</Th>
              <Th>TOTAL PLAN. (TONS)</Th>
              <Th>TOTAL PROD. (TONS)</Th>
              <Th>STATUS</Th>
            </Tr>
          </THead>
          <Tbody>
            {demandas.slice().reverse().map((demanda, index) => (
              <Tr key={demanda.id}>
                <Td>
                  <IconeEditar src='/edit.svg' alt='Ícone de editar' onClick={() => openEditModal(demanda, index + 1)} />
                </Td>
                <Td>{demanda.data}</Td>
                <Td>{quantidadeSkus[index]}</Td>
                <Td>{demanda.totalPlan}</Td>
                <Td>{demanda.totalProd}</Td>
                <Td>{demanda.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </FixedTableContainer>
      {isModalOpen && (
        <EditarDemandaModal>
          <ModalHeader>
            <ModalTitle>ADICIONAR DEMANDAS</ModalTitle>
            <CloseButton onClick={confirmCancel}>X</CloseButton>
          </ModalHeader>
          <ModalContent>
            <H1Modal>Data</H1Modal>
            <InputData type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            <TabelaModal>
              <TheadModal>
                <TrModal>
                  <ThSku>SKU</ThSku>
                  <DescricaoModal>DESCRIÇÃO</DescricaoModal>
                  <ThTotalPlan>TOTAL PLAN (TONS)</ThTotalPlan>
                  <ThTotalProd>TOTAL PROD (TONS)</ThTotalProd>
                  <ThRemover>REMOVER</ThRemover>
                </TrModal>
              </TheadModal>
              <TbodyModal>
                {[1, 2, 3].map((linha) => (
                  <TrModal key={linha}>
                    <TdSku>
                      <Select
                        required="required"
                        value={skus[linha]}
                        onChange={(e) => handleSelectChange(e, linha)}
                      >
                        <option value=""></option>
                        <option value="4298">4298</option>
                        <option value="2323">2323</option>
                        <option value="2222">2222</option>
                      </Select>
                    </TdSku>
                    <TdDescricaoModal>{optionsToDescriptions[skus[linha]]}</TdDescricaoModal>
                    <TdTotalPlan>
                      <InputPlan
                        type="number"
                        value={linha === 1 ? totalPlan1 : linha === 2 ? totalPlan2 : totalPlan3}
                        onChange={(e) => {
                          if (linha === 1) {
                            setTotalPlan1(e.target.value);
                          } else if (linha === 2) {
                            setTotalPlan2(e.target.value);
                          } else if (linha === 3) {
                            setTotalPlan3(e.target.value);
                          }
                        }}
                      />
                    </TdTotalPlan>
                    <TdTotalProd>
                      <InputProd
                        type="number"
                        value={linha === 1 ? totalProd1 : linha === 2 ? totalProd2 : totalProd3}
                        onChange={(e) => {
                          if (linha === 1) {
                            setTotalProd1(e.target.value);
                          } else if (linha === 2) {
                            setTotalProd2(e.target.value);
                          } else if (linha === 3) {
                            setTotalProd3(e.target.value);
                          }
                        }}
                      />
                    </TdTotalProd>
                    <TdRemover>
                      <ImgLixeira
                        width="10px"
                        src="/lixeira.svg"
                        onClick={() => handleRemove(linha)}
                      />
                    </TdRemover>
                  </TrModal>
                ))}
              </TbodyModal>
            </TabelaModal>
            <BotaoCancelar onClick={confirmCancel}>CANCELAR</BotaoCancelar>
            <BotaoSalvar onClick={handleSave}>SALVAR</BotaoSalvar>
          </ModalContent>
        </EditarDemandaModal>
      )}
      {isEditModalOpen && (
        <EditarDemandaModal>
          <ModalHeader>
            <ModalTitle>EDITAR DEMANDAS</ModalTitle>
            <CloseButton onClick={closeEditModal}>X</CloseButton>
          </ModalHeader>
          <ModalContent>
            <H1Modal>Data</H1Modal>
            <InputData type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            <EditarDemandaTable>
              <TheadEditar>
                <TrEditar>
                  <ThEditar>SKU</ThEditar>
                  <ThDescricaoEditar>DESCRIÇÃO</ThDescricaoEditar>
                  <ThPlanEditar>TOTAL PLAN (TONS)</ThPlanEditar>
                  <ThProdEditar>TOTAL PROD (TONS)</ThProdEditar>
                  <ThRemoverEditar>REMOVER</ThRemoverEditar>
                </TrEditar>
              </TheadEditar>
              <TbodyEditar>
                <TrEditar>
                  <TdEditarSku>
                    <Select
                      required="required"
                      value={editDemanda.sku}
                      onChange={(e) => {
                        const selectedSku = e.target.value;
                        const selectedDescricao = optionsToDescriptions[selectedSku];
                        setEditDemanda({
                          ...editDemanda,
                          sku: selectedSku,
                        });
                        setDescricaoSKU(selectedDescricao); 
                      }}
                    >
                      <option value=""></option>
                      <option value="4298">4298</option>
                      <option value="2323">2323</option>
                      <option value="2222">2222</option>
                    </Select>
                  </TdEditarSku>
                  <TdDescricaoEditar>{descricaoSKU}</TdDescricaoEditar>
                  <TdPlanEditar>
                    <InputPlan
                      type="number"
                      value={editDemanda.totalPlan} Use o valor de totalPlan da demanda selecionada
                      onChange={(e) => {
                        setEditDemanda({
                          ...editDemanda,
                          totalPlan: e.target.value,
                        });
                      }}
                    />
                  </TdPlanEditar>
                  <TdProdEditar>
                    <InputProd
                      type="number"
                      value={editDemanda.totalProd} Use o valor de totalProd da demanda selecionada
                      onChange={(e) => {
                        setEditDemanda({
                          ...editDemanda,
                          totalProd: e.target.value,
                        });
                      }}
                    />
                  </TdProdEditar>
                  <TdLixeiraEditar>
                    <ImgLixeira
                      width="10px"
                      src="/lixeira.svg"
                      onClick={() => handleRemove(linha)}
                    />
                  </TdLixeiraEditar>
                </TrEditar>
              </TbodyEditar>
            </EditarDemandaTable>
            <BotaoCancelar onClick={closeEditModal}>CANCELAR</BotaoCancelar>
            <BotaoSalvar onClick={handleEditSave}>SALVAR</BotaoSalvar>
            {editingDemanda &&  (
      <BotaoExcluir onClick={() => handleRemoveDemand(editingDemanda)}>EXCLUIR DEMANDA</BotaoExcluir>
    )}

          </ModalContent>
        </EditarDemandaModal>
      )}
      <Footer>
        <FooterParagraph>© SMi Engineering 2023</FooterParagraph>
      </Footer>
    </Container>
  );
}
