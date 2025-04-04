import styled from "styled-components";

const InfoItem = ({ items }) => (
    <DefinitionList>
        {items.map(({ term, description, note, link }, index) => (
            <DefinitionItem key={index}>
                <Term>{term}</Term>
                <Description>{description}</Description>
                {note && <Note>{note}</Note>}
                {link && <Link href={link}>참고 링크</Link>}
            </DefinitionItem>
        ))}
    </DefinitionList>
);

const DefinitionList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DefinitionItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Term = styled.dt`
  font-weight: bold;
  font-size: 1rem;
  color: #222;
`;

const Description = styled.dd`
  margin-left: 0;
  font-size: 0.8rem;
  color: #555;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: #888;
    margin : 0;
`;


export default InfoItem;