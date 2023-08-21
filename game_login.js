// Crie a função addUser()
function addUser() {
  // Obtenha o valor do usuário através das ids player1_name_input e player2_name_input
  player_1 = document.getElementById("player1_name_input")
  player_2 = document.getElementById("player2_name_input")

  // Armazene esses valores localmente
  document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player_1;
  document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player_2;

      localStorage.setItem("player_1", player1_name);
      localStorage.setItem("player_2", player2_name);


  // Atribua "game_page.html" para window.location
  window.location = "game_page.html";
}

