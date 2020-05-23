import styled from 'styled-components';

const Tables = styled.div`

  overflow:hidden;

  .floatLeft { 
    width: 150px; 
    float: left; 
  }

  .floatRight {
    width: 800px; 
    float: left; 
    @media only screen and (max-width: 900px) {
      width: 500px;
    }
    @media only screen and (max-width: 500px) {
      width: 300px;
    }
  }



  .title {
    text-align: center;
    font-family: arial, sans-serif;
  }
  
  .items {
    text-align: center;
    color: grey;
    text-align: center;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table-layout:fixed; 
  }
  
  .items th { 
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px;
    width: 30%;
    height: 30%;
  }

  .Cheader {
    border-bottom: 1px solid #ddd;
  }

  .items td {
    border-right: 1px solid #ddd;
    padding: 8px;
    width: 150px;
    height: 100px;
  }

  .rewarddiv  {
    border: 1px solid #ddd;
    width: 70%;
    height: 90%;
    text-align: center;
    vertical-align: middle;
    line-height: 70px; 
    margin-left: 22px;
    
  }

  .button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: 14px;
    cursor: pointer;
    outline: inherit;
    display:block;
    float:right;
    text-align:center;
    padding:2px;
  }
  
`;

export default Tables;
