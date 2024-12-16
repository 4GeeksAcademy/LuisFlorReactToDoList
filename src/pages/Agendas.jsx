import { dameAgendas } from "../fetch";

export const Agendas = () => {
  const [agendas, setAgendas] = useState();

  const añadeAgendas = () => {
    dameAgendas().then((data) => {
      setAgendas(data.agendas);
      console.log(data);
    });
  };

  useEffect(() => {
    añadeAgendas();
  }, []);

  return (
    <>
      <h1 className="text-center m-4"> Lista de agendas </h1>
      <div className="d-flex justify-content-center">
        <Container className="d-flex">
          <Row>
            {agendas.map((item) => {
              return <h1> {item.name}</h1>;
            })}
            <Container className="justifyContentEnd">
              <span className="p-2 text-danger" onClick={() => {}}>
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span
                className="p-2 text-danger"
                onClick={() => {
                  return borrarContacto(contact.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </Container>
          </Row>
        </Container>
      </div>
    </>
  );
};
