import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f3f4;
  height: 100vh;
  width: 100vw;
`;

export const Img = styled.img`
  width: 150px;
  margin-left: 50px;
`

export const NavBar = styled.nav`
  background-color: #232120;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
`;

export const H1 = styled.h1`
  color: #232120;
  font-size: 19px;
  margin-left: 126px;
  margin-top: 25px;
`

export const BotaoAdicionar = styled.button`
  width: 100px;
  height: 37px;
  background-color: #f05123;
  color: #fff;
  border-radius: 8px;
  margin-left: 126px;
  margin-top: 13px;
  margin-bottom: 18px;
  text-decoration: none;
  font-size: 12px;
  border: none;
  font-weight: 600;
`
export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  height: 400px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 2px 10px 4px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  scrollbar-width: thin; /* Para navegadores Firefox */
  scrollbar-color: #d3d3d3 #f1f3f4
`
export const FixedTableContainer = styled.div`
  width: 1111px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 1px 2px 10px 4px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  margin-left: 9%;
  height: 400px; /* Altura total da tabela, ajuste conforme necessário */
  overflow-y: auto; /* Adicione um scroll vertical quando necessário */
  overflow-x: hidden; /* Oculta o scroll horizontal, se não for necessário */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;


export const THead = styled.div`
  position: sticky;
  top: 0;
  background-color: #d3d3d3;
`

export const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #d3d3d3
`

export const Th = styled.th`
  padding-top: 8px;
  background-color: #D3D3D3;
  text-align: left;
  padding-left: 10px;
  
`

export const Td = styled.td`
padding: 8px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinhando o conteúdo à esquerda
  min-width: 100px;
  border: none;
`

export const Tbody = styled.tbody`
`;

export const IconeEditar = styled.img`
width: 16px;
cursor: pointer;
`





export const AdicionarDemandaModal = styled.div`
  background-color: #fff;
  width: 58%;
  height: 70%;
  border-radius: 5px;
  margin: 0 auto;
  position: absolute;
  top: 17%;
  left: 21%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ModalHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
  background-color: #232120;
  border-radius: 5px 5px 0px 0px ;
`;

export const ModalTitle = styled.h1`
  font-size: 12px;
  color: #f05123;
  font-weight: 700;
  padding-left: 10px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 22px;
  padding-right: 10px;
  color: #fff;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  margin-top: 10px;
`;

export const H1Modal = styled.h1`
  font-size: 16px;
  padding-left: 10px;
  display: block;
`

export const InputData = styled.input`
  height: 15px;
  margin-left: 10px;
  width: 110px;
  margin-bottom: 10px;
`

export const TabelaModal = styled.table`
  width: 98%;
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  display: block;
  margin: 0 auto;
  
`

export const TheadModal = styled.thead`
  
  background-color: #D3D3D3;
  height: 30px;
  border-radius: 4px;
  display :block;
  margin-bottom: 10px;
`

export const ThSku = styled.th`
width: 80px;
`

export const ThTotalPlan = styled.th`
   width: 150px;
`

export const ThTotalProd = styled.th`
  width: 200px;
`

export const ThRemover = styled.th`
width: 80px;
margin-left: 34px;
`





export const TdModal = styled.td`
border-bottom: solid 1px black
`

export const TdSku = styled.td`
width: 80px;
align-items: center;
text-align: center;
`

export const TdDescricaoModal = styled.td`
width: 250px;
`

export const TdTotalPlan = styled.td`
width: 120px;
text-align: center;
`

export const TdTotalProd = styled.td``

export const TdRemover = styled.td`
  width: 80px;
`
export const ImgLixeira = styled.img`
width: 20px;
margin-top: 5px;
margin-left: 22px;
cursor: pointer;
`





export const TrModal = styled.tr`
border: none;
`

export const DescricaoModal = styled.th`
    width: 250px;
`


export const Select = styled.select`
`





export const InputPlan = styled.input`
width: 80px;
margin-left: 40px;
-moz-appearance: textfield;
   appearance: textfield;
   &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
   }
`

export const InputProd = styled.input`
width: 80px;
margin-right: 80px;
margin-left:80px; 

-moz-appearance: textfield;
   appearance: textfield;
   &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
   }
`

export const TbodyModal = styled.tbody``

export const BotaoSalvar = styled.button`
background-color: #00B000;
    width: 95px;
    height: 30px;
    color: #fff;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    &:hover{
    background-color: #006400;
  }
`

export const BotaoCancelar = styled.button`
  width: 95px;
  height: 30px;
  background-color: #FF0000;
  color: #fff;
  margin-left: 74%;
  margin-top: 3%;
  margin-right: 1%;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  &:hover{
    background-color: #AA0000;
  }
`
export const BotaoExcluir = styled.button`
position: absolute;
    margin-top: 3%;
    width: 120px;
    background-color: #FF0000;
    color: #fff;
    margin-left: -97%;
    border-radius: 4px;
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  &:hover{
    background-color: #AA0000;
  }
`






export const Footer = styled.footer`
 background-color: #232120;
  height: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const FooterParagraph = styled.p`
  color: #F05123;
  text-align: center;
  margin-top: 12px;
`




export const EditarDemandaModal = styled.div`
  background-color: #fff;
  width: 58%;
  height: 70%;
  border-radius: 5px;
  margin: 0 auto;
  position: absolute;
  top: 17%;
  left: 21%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

// Adicione os estilos específicos para o modal de edição aqui
export const EditarDemandaHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 40px;
  background-color: #232120;
  border-radius: 5px 5px 0px 0px;
`;

export const EditarDemandaTitle = styled.h1`
  font-size: 12px;
  color: #f05123;
  font-weight: 700;
  padding-left: 10px;
`;

export const EditarDemandaTable = styled.table`
  width: 98%;
  height: 300px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;
  display: block;
  margin: 0 auto;
  
`


export const EditarDemandaCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 22px;
  padding-right: 10px;
  color: #fff;
  cursor: pointer;
`;

export const TheadEditar = styled.thead`
  background-color: #D3D3D3;
  height: 30px;
  border-radius: 4px;
  display :block;
  margin-bottom: 10px;
`;

export const TrEditar = styled.tr`
  border: none;
`;

export const ThEditar = styled.th`
width: 80px;
`;

export const ThDescricaoEditar = styled.th`
width: 250px;
`;

export const ThPlanEditar = styled.th`
width: 150px;
`;

export const ThProdEditar = styled.th`
width: 200px;
`;

export const ThRemoverEditar = styled.th`
width: 80px;
margin-left: 34px;
`;

export const TbodyEditar = styled.tbody`
`;

export const TdEditarSku = styled.td`
width: 80px;
align-items: center;
text-align: center;
`;

export const TdDescricaoEditar = styled.td`
width: 250px;
`;

export const TdPlanEditar = styled.td`
width: 120px;
text-align: center;
`;

export const TdProdEditar = styled.td`
  /* Adicione seus estilos aqui */
`;

export const TdLixeiraEditar = styled.td`
width: 80px;
`;




