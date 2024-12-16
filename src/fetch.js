//importar los input values correspondientes

export const dameAgendas = () => {
  fetch("https://playground.4geeks.com/contact/agendas", {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

export const dameUsuario = (usuario) => {
  fetch(`https://playground.4geeks.com/contact/agendas/${usuario}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

export const deleteContacto = (id) => {
  fetch(
    `https://playground.4geeks.com/contact/agendas/LuisFlor7/contacts/${id}`,
    {
      method: "DELETE",
    },
  );
};

export const añadirContacto = (newName, newPhone, newMail, newAddress) => {
  fetch("https://playground.4geeks.com/contact/agendas/LuisFlor7/contacts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      phone: newPhone,
      email: newMail,
      address: newAddress,
    }),
  });
};
