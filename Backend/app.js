const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();
let users = [
  {
    id: 0,
    name: "Bat",
    surName: "Dorj",
    balance_id: "00100105",
    balance: 100000,
    balance_type: true,
  },
  {
    id: 1,
    name: "Tsetseg",
    surName: "Ochir",
    balance_id: "00100115",
    balance: 150000,
    balance_type: false,
  },
  {
    id: 2,
    name: "Yunchir",
    surName: "Ulaanbandi",
    balance_id: "00100120",
    balance: 1500000,
    balance_type: true,
  },
  {
    id: 3,
    name: "Uugan-Erdene",
    surName: "Lkhagvajargal",
    balance_id: "00100124",
    balance: 2000000,
    balance_type: false,
  },
  {
    id: 4,
    name: "Jamiyanpurev",
    surName: "Ochir",
    balance_id: "00100121",
    balance: 1650000,
    balance_type: false,
  },
  {
    id: 5,
    name: "Gonchigsumlai",
    surName: "Purevsumlai",
    balance_id: "00100133",
    balance: 15000000,
    balance_type: true,
  },
  {
    id: 6,
    name: "Suren",
    surName: "Purev",
    balance_id: "00100135",
    balance: 1200000,
    balance_type: true,
  },
  {
    id: 7,
    name: "Baasan",
    surName: "Byamba",
    balance_id: "00100140",
    balance: 120000,
    balance_type: false,
  },
  {
    id: 8,
    name: "Enkhtuul",
    surName: "Mendsaikhan",
    balance_id: "00100141",
    balance: 12000000,
    balance_type: true,
  },
  {
    id: 9,
    name: "Sharavnyambuu",
    surName: "Urtnasan",
    balance_id: "00100150",
    balance: 1900000,
    balance_type: false,
  },

];
let index = users.length;

const app = express();
app.use(cors());

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const car = users.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/users", jsonParser, (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  users.push(car);
  res.send(car);
});

app.delete("/api/users", jsonParser, (req, res) => {
  users = users.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
