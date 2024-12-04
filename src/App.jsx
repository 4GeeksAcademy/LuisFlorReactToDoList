import { TareasLista } from "./pages/ToDoList";

export const App = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <TareasLista />
      </div>
    </>
  );
};
