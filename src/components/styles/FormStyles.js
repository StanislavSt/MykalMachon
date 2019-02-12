import styled from 'styled-components';

const FormStyles = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    margin: 10px 0px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-image: initial;
    padding: 12px 12px;
    transition: all 0.3s ease-in-out 0s;
    outline: none;
  }
  textarea {
    margin: 10px 0px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.2);
    border-image: initial;
    padding: 12px 12px;
    transition: all 0.3s ease-in-out 0s;
    outline: none;
    min-height: 100px;
  }
  button {
    border-radius: 4px;
    font-family: 'Open Sans', sans-serif;

    background: ${props => props.theme.primaryText};
    color: white;
    margin: 10px 0px;
    padding: 12px 12px;
    border: none;
    text-align: center;
    font-weight: bold;
  }
`;

export default FormStyles;
