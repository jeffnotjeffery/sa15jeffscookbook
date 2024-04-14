function toggleIngredients(ingredientsId) {
    var ingredients = document.getElementById(ingredientsId);
    if (ingredients.style.display === 'none' || ingredients.style.display === '') {
      ingredients.style.display = 'block';
    } else {
      ingredients.style.display = 'none';
    }
  }
  
  function toggleInstructions(instructionsId) {
    var instructions = document.getElementById(instructionsId);
    if (instructions.style.display === 'none' || instructions.style.display === '') {
      instructions.style.display = 'block';
    } else {
      instructions.style.display = 'none';
    }
  }