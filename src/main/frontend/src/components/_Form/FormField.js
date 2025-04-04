import styled from "styled-components";

const FormField = ({ label, name, value, onChange, options }) => (
    <OptionItem>
        <Label>{label}</Label>
        {options ? (
            <Select name={name} value={value} onChange={onChange}>
                {options.map((opt, index) => (
                    <option key={index} value={opt}>{opt}</option>
                ))}
            </Select>
        ) : (
            <Input type="number" name={name} value={value} onChange={onChange} />
        )}
    </OptionItem>
);

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const Label = styled.span`
  font-weight: bold;
    font-size: 0.9rem;
  color: #333;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  background: #f9f9f9;
  cursor: pointer;
    font-family: 'SUIT', sans-serif;
`;

const Input = styled.input`
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100px;
    color: #404040;
`;

export default FormField;
