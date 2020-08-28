

function showAll(){
  var images = document.getElementsByTagName("img");
  for (i=0; i < images.length; i++){
    var img = images[i];
    img.style.display="inline-block";
  }
}

function showDinner(){
  var images = document.getElementsByTagName("img");
  for (i=0; i < images.length; i++){
    var img = images[i].className;
    if (img == "showdinner"){
      images[i].style.display="inline-block";
    }
    else{
      images[i].style.display="none";
    }
  }
}

function showLunch(){
  var images = document.getElementsByTagName("img");
  for (i=0; i < images.length; i++){
    var img = images[i].className;
    if (img == "showlunch"){
      images[i].style.display="inline-block";
    }
    else{
      images[i].style.display="none";
    }
  }
}
function showBreakfast(){
  var images = document.getElementsByTagName("img");
  for (i=0; i < images.length; i++){
    var img = images[i].className;
    if (img == "showbreakfast"){
      images[i].style.display="inline-block";
    }
    else{
      images[i].style.display="none";
    }
  }
}
function showSnacks(){
  var images = document.getElementsByTagName("img");
  for (i=0; i < images.length; i++){
    var img = images[i].className;
    if (img == "showsnacks"){
      images[i].style.display="inline-block";
    }
    else{
      images[i].style.display="none";
    }
  }
}

function showRecipeAlert(id){
  var recipeid = id;
  var modal = document.getElementById("myModal");
  // createRecipeContent(recipeid, modal);
  createRecipeContent(recipeid, modal);
  modal.style.display = "block";


}

function closeRecipeAlert(){
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function createRecipeContent(id, modal){
  var content = modal.getElementsByTagName("p")[0].innerHTML;
  if (id == "salmon"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Steamed Asian Salmon </b><br> \
    <br> Ingredients: <br> \
    1 salmon fillet,cleaned and prepped (remove bones)<br> \
    2 1/2'' blocks of tofu (silken or firm) <br> \
    1/4 cup sliced, peeled ginger <br> \
    1 scallion <br> \
    1 tsp fermented black beans <br> \
    1 tsp soy sauce (we use reduced sodium) <br> \
    1/2 tsp rice vinegar <br> \
    1/2 tsp lao gan ma (or any hot pepper/chili sauce) <br> \
    1/4 tsp sugar <br> \
    1/4 tsp salt <br> \
    <br> Directions: <br> \
    1. Prepare all ingredients. <br> \
    2. Lay tofu side by side on plate and cover with salmon. <br> \
    3. Sprinkle ginger and white scallion slices over the salmon, setting aside the chopped scallions for later. <br> \
    4. Make the sauce mixture with the fermented black beans, soy sauce, vinegar, chili sauce, and sugar. <br> \
    5. Sprinkle salt onto salmon. <br> \
    6. Cover salmon with sauce mixture. <br> \
    7. Cover and refrigerate for 10 minutes. <br> \
    8. Boil water. <br> \
    9. Place plate onto a metal rack in the boiling water to steam. <br> \
    10. Steam for 6-8 min depending on size of salmon. Do not lift the lid. <br> \
    11. Turn the heat off, and let sit for another 3 min. <br> \
    12. Take the salmon out and garnish with the green scallions. <br> \
    13. Serve."
  }

  if (id == "taiwanchicken"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Taiwanese Popcorn Chicken </b><br> \
    <br>Ingredients:<br>\
    1 lb chicken drumsticks <br> \
    2 tsp soy sauce <br> \
    1/2 tsp salt <br> \
    1/2 tsp white pepper <br> \
    3 cloves garlic, minced <br> \
    1/3 cup flour <br> \
    1/2 tsp baking powder <br> \
    1/2 tsp five spice powder <br> \
    1/2 tsp white pepper <br> \
    2/3 cup water approx. <br> \
    2 cup cornstarch <br> \
    2 cloves garlic <br> \
    1 scallion, chopped <br> \
    <br> Salt and Pepper Spice Blend (enough for 3 uses): <br> \
    2 tsp salt <br> \
    2 tsp black pepper <br> \
    2 tsp Sichuan peppercorn <br> \
    2 tsp red pepper flakes (optional) <br> \
    2 star anise (optional)<br> \
    <br> Directions:<br> \
    1. Combine chicken, soy sauce, salt, white pepper, and garlic together in a bowl.<br> \
    2. In a separate bowl, combine flour, baking powder, five spice, white pepper, and water. <br> \
    3. Add the flour mixture into the chicken mixture, and then let marinate for 10-20min.<br> \
    4. Combine salt, black pepper, and optional ingredients. <br> \
    5. Heat wok/pan and stir fry the salt mixture until fragrant.<br> \
    6. Remove salt mixture from wok.<br> \
    7. Blend salt mixture in a blender until finely powdered. Set aside.<br> \
    8. Put all of the cornstarch or sweet potato starch into a bowl/plate.<br> \
    9. Coat each chicken in the cornstarch and set aside until all of the chicken are coated.<br> \
    10. Heat frying oil in a deeper pot/pan.  <br> \
    11. Place chicken in individually, and swirl them around occasionally. <br> \
    12. Fry until lightly golden brown, and set aside.<br> \
    13. Let all of the chicken cool for 5-7 min.<br> \
    14. Allow the oil to heat up again.<br> \
    15. Fry the chicken a second time until golden brown and crispy. Set aside.<br> \
    16. In a wok, heat up 1 tsp oil, add garlic and scallions. Stir fry until fragrant.<br> \
    17. Add in the fried chicken and 1 tbsp of the salt and spice blend. <br> \
    18. Garnish with basil or cilantro."
  }

  if (id == "taroballs"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Taiwanese Taro Balls </b><br> \
    <br> Ingredients:<br> \
    <br> Flour Mixture: <br><br> \
    1 Cup Glutinous Rice Flour <br> \
    1 Cup Tapioca Starch<br> \
    1 Mango (Mango Balls)<br> \
    1 Purple Yam (Purple Yam Balls)<br> \
    2 Tbsp Matcha Powder (Matcha Green Tea Balls)<br> \
    1 1/2 Cups Water (Matcha Green Tea Balls)<br> \
    <br>Directions: <br> \
    <br>MATCHA BALLS:<br> \
    1) MATCHA GREEN TEA:  Combine matcha powder and flour mixture, adding water slowly as necessary to make the dough into a dough-like consistency. If you think you'll find matcha too bitter, add 1 tbsp of sugar (white or brown). <br> \
    2) If you find that your dough is too sticky, add more flour. Add more water if dough is too dry/crumbly.<br> \
    <br>MANGO/PURPLE YAM BALLS<br> \
    1) MANGO: Cut mango into chunks, and puree into a smooth consistency.<br> \
    1) PURPLE YAM: Cut purple yam into chunks, steam, and puree into a smooth consistency.<br> \
    2) Mix in the flour mixture, a little at a time.<br> \
    <br>ALL: <br> \
    3) Divide dough into sections, rolling them into snakes. <br> \
    4) Cut into about 1/2 inch pieces, dusting with flour as necessary to prevent sticking.<br> \
    5) When water is boiling, add the balls. Stir continuously. The balls cook fairly fast, in about 1-2 min. When the balls are translucent and floating, they're done.<br> \
    6) Immediately dump into ice water before draining and serving."
  }

  if (id == "bakedoatmeal"){
    modal.getElementsByTagName("p")[0].innerHTML = " <br><b> Cinnamon Apple Baked Oatmeal </b><br> \
    <br> Ingredients:<br> \
    3 cups rolled oats <br> \
    1 cup brown sugar <br> \
    1/4 cup flaxseed meal<br> \
    1/4 cup chopped walnuts<br> \
    2 tsp ground cinnamon<br> \
    2 tsp baking powder<br> \
    1 tsp salt<br> \
    1 cup milk (any type)<br> \
    2 eggs<br> \
    1/2 cup melted butter<br> \
    2 tsp vanilla extract <br> \
    Toppings:<br> \
    1 cup finely chopped apples<br> \
    1 tbsp honey<br> \
    <br>Directions:<br> \
    1. Preheat oven to 350 degrees.<br> \
    2. Add all ingredients in the order they appear.<br> \
    3. Mix all of the ingredients together well.<br> \
    4. Pat into baking dish<br> \
    5. Top with chopped apples evenly.<br> \
    6. Cover dish with aluminum foil.<br> \
    7. Bake for 30 min, then take off the foil, and let bake for another 10 min until the apples are golden brown.<br> \
    8. Drizzle with honey if desired.<br> \
    9. Enjoy!"
  }

  if (id == "tarocake"){
    modal.getElementsByTagName("p")[0].innerHTML = " <br><b> Fuzhou Triangle Cake </b><br> \
    <br>Ingredients:<br>\
    2 cups turnip cake powder <br> \
    300g taro<br> \
    5 cups water<br> \
    1 tbsp salt<br> \
    2 tbsp msg or chicken bouillon<br> \
    1/2 tsp white pepper<br> \
    1 tsp five spice powder <br> \
    <br> Directions: <br> \
    1. Shave skin off taro, cut taro in half, and grate taro into small strips. <br> \
    2. In a bowl, combine turnip cake powder with 2 cups water. Set aside.<br> \
    3. In a pan, stir-fry the taro in 1-2 tbsp oil. After 2-3 minutes, add the turnip cake powder<br> \
    mixture. If the mixture has been sitting aside for quite some time, remember to quickly stir again before pouring it into the pan. <br> \
    4. Continuously combine until a mashed potatoes consistency is formed or when all of the liquid has evaporated and the mixture is generally smooth and moldable.<br> \
    5. Flatten the taro mixture into an one-inch tall rectangular tray. Adjust tray size depending on the amount of mixture you have. Use plastic wrap to cover the tray first to prevent sticking or oil the pan first if you don't want to use plastic wrap.<br> \
    6. After flattening, wrap everything in plastic wrap before refrigerating overnight.<br> \
    7. Cut the now hardened mixture into triangles.<br> \
    8. Heat oil on high, and place the triangle cakes in one by one. Avoid continuously touching the triangle cakes to prevent breakage. Flip when golden. Fry until golden and crispy. Enjoy!"

  }

  if (id == "cheesecake"){
    modal.getElementsByTagName("p")[0].innerHTML = " <br><b> Rice Cooker Japanese Cheesecake </b><br> \
    <br>Ingredients:<br>\
    12 oz. cream cheese, softened at room temp <br>\
    1/3 cup white sugar (cream cheese)<br>\
    5 eggs, whites and yolks separated<br>\
    1/2 cup all purpose flour, sifted<br>\
    1/4 cup milk<br>\
    2 tbsp lemon juice<br>\
    2 tbsp butter, melted<br>\
    1/4 cup white sugar (egg whites)<br>\
    <br>Directions:<br> \
    1. Mix cream cheese with spatula until smooth. <br> \
    2. Add sugar and mix together.<br> \
    3. Mix in yolks, one at a time. <br> \
    4. Add flour, milk, lemon juice, and butter, mixing well each time.<br> \
    5. In a separate bowl, make meringue by beating the egg whites.<br> \
    6. Add the sugar slowly as you beat until the egg whites are almost at stiff peaks but still on the foamier side.<br> \
    7. Gradually fold in the meringue into the cream cheese batter.<br> \
    8. Butter the rice cooker pan.<br> \
    9. Pour batter into pan, lifting and tapping the pan against the surface to release air bubbles.<br> \
    10. Cook for 70-80 min. (~ 2 white rice cooker cycles)<br> \
    * Keep an eye on the cheesecake and check back periodically w/ a toothpick.<br> \
    11. When done, reset rice cooker and let sit until the rice cooker cools down a bit before transferring to plate. <br>\
    The top center will be the last to cook, so when that part is cooked, the cheesecake should be done. It's easier to undercook and incrementally add time. An overcooked cheesecake will be fine when it's warm but turn hard once it has cooled down, but a real cheesecake should still be soft and fluffy after being in the fridge."
  }
  if (id == "eggtarts"){
    modal.getElementsByTagName("p")[0].innerHTML = " <br><b> HK Egg Tarts </b><br> \
    <br>Ingredients:<br>\
    <br>Crust<br> \
    1 Cup All-Purpose Flour<br> \
    1/2 Cup ColdSalted Butter (or 1/2 cup Unsalted Butter, 1/2 tsp salt)<br> \
    1 Egg Yolk<br> \
    2 Tbsp Sugar<br> \
    2 Tbsp Water<br> \
    <br> Custard<br> \
    2 Tbsp Water<br> \
    2 Tbsp Sugar<br> \
    1 Egg<br> \
    1/2 Cup Milk<br> \
    <br> Directions: <br> \
    <br> Crust <br> \
    1) Combine flour, cold butter, egg yolk, sugar, and water with a fork until everything besides the butter is evenly combined.<br> \
    2) Use hands to knead until the mixture forms into a dough. Work fast to prevent butter from melting. If the mixture gets too doughy and sticky, you've let the butter heat up too much. (If at any point, the dough becomes very sticky, you've let the butter heat up too much. Place it in the fridge for 20 minutes to fix it.)<br> \
    3) Wrap dough in plastic wrap, and place in fridge for 20-30 minutes.<br> \
    4) Next, flour your surface and roll the dough into a 1/4-inch layer.<br> \
    5) Fold it in half or thirds, and roll into a 1/4-inch layer again.<br> \
    6) Fold it in half or thirds again, and roll one last time, trying your best to make the dough into a neater rectangle shape.<br> \
    7) Cut dough into circles roughly the size of your egg tart tins. I made mine 3 inches in diameter. You can use the back of a cup, a lid, etc.<br> \
    8) Oil egg tart tins with butter or oil to prevent sticking later on. Make sure to cover all areas of the tin.<br> \
    9) If you're working slowly, place the pastry back into the fridge while you make the custard to prevent melting.<br> \
    <br> Custard <br> \
    1) Heat water and sugar until clear and dissolved. Let cool.<br> \
    2) In another bowl, beat egg and 1/4 cup milk.<br> \
    3) Once water/sugar mixture cools, strain the egg mixture into it.<br> \
    4) Add 1/4 cup milk, mix everything together.<br> \
    <br> Egg Tarts<br> \
    1) Pour mixture into each egg tart tin until 80% full.<br> \
    2) Poke holes w/ fork at the bottom of each egg tart to let steam escape.<br> \
    3) Bake for 15 min at 425F.<br> \
    4) Let cool before removing from tins."
  }

  if (id == "shumai"){
    modal.getElementsByTagName("p")[0].innerHTML = " <br><b> Glutinous Rice Shumai </b><br> \
    <br>Makes 35-40 shumai. <br>\
    <br>Ingredients: <br>\
    3 cups sweet (glutinous) rice <br>\
    3/4 cup Chinese sausage <br>\
    1/2 cup shiitake mushrooms<br>\
    2 tbsp oil<br>\
    1/2 cup mixed vegetables<br>\
    1 tbsp cooking wine<br>\
    1 tbsp soy sauce<br>\
    2 tbsp oyster sauce<br>\
    1 tbsp salt<br>\
    1 tbsp m.s.g.<br>\
    1/2 cup water<br>\
    1 tbsp dark soy sauce<br>\
    1/4 cup scallions<br>\
    1 package store-bought dumpling skin (Shanghai or Hong Kong)<br>\
    <br>Directions:<br> \
    1. Soak the sweet/glutinous rice in water for 1 hour. <br> \
    2. After draining, steam the rice using a bamboo steamer or wrap it in a cheesecloth until fully cooked. <br> \
    3. While the rice is cooking, chop the Chinese sausage and mushrooms into mini pieces. <br> \
    4. Set the rice aside when once it's done.<br> \
    5. In a wok/pan, heat the cooking oil on high heat. <br> \
    6. Cook the Chinese sausage first, followed by the mushrooms, before adding the mixed vegetables. <br> \
    7. Add the cooking wine, soy sauce, oyster sauce, salt, and m.s.g. <br> \
    8. Slowly add the water as you stir-fry everything together. <br> \
    9. Finish off by adding the dark soy sauce before adding the scallions. Make sure everything is thoroughly combined, and you're done. <br> \
    10. Scoop the rice into the middle of the dumpling wrapper, and slowly adjust it into the shape of a shumai.<br> \
    11. Place steamer on top of cold water, and close the lid. <br> \
    12. Steam for ~10 minutes. After the water has been boiling for 2-3 minutes, check to make sure the skin is cooked before serving."
  }

  if (id == "friedmilk"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Chinese Fried Milk </b><br> \
    <br>Makes about 20 pieces. <br>\
    <br>Ingredients:<br>\
    2 cups whole milk <br>\
    1/3 cup cornstarch<br>\
    1/4 cup white sugar (if you'd prefer it sweeter, use 1/2 cup instead)<br>\
    2 eggs<br>\
    2 cups Panko breadcrumbs.<br>\
    <br>Directions:<br>\
    1 .Whisk milk, cornstarch, and sugar together in a bowl.<br>\
    2. On medium heat, pour the mixture into a saucepan/wok.<br>\
    3. Continue whisking while the mixture heats up.<br>\
    4. Whisk thoroughly to ensure no clumps.<br>\
    5. Once the mixture has reached stiff peaks (if you lift whisk up, the mixture doesn't drip down),remove from heat.<br>\
    6. Pour contents into an oiled rectangular baking dish, loaf pan, etc.<br>\
    7. Smooth it out as best you can.<br>\
    8. Refrigerate for 1 hour.<br>\
    9. Remove from fridge, and gently remove from the baking dish.<br>\
    10. Cut into 3-inch long, 1-inch wide pieces.<br>\
    11. Prepare Panko breadcrumbs in a bowl.<br>\
    12. Cover each piece with Panko. (Layer 1)<br>\
    13. Next, mix two eggs together in a bowl.<br>\
    14. Cover each Panko-covered piece in the egg mixture, then back into the Panko breadcrumbs for its second layer of Panko.<br>\
    15. Heat frying oil on medium-high.<br>\
    16. Gently put each piece in the oil one by one, swirling them around slightly in the oil to prevent sticking.<br>\
    17. Fry until golden and crispy.<br>\
    18. Let cool before serving."
  }

  if (id == "sago"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Coconut Sago </b><br> \
    <br>Ingredients:<br>\
    1 cup sago <br> \
    1 can coconut milk (13.5 oz) (400 ml) <br> \
    sugar (optional) <br> \
    taro (optional) <br> \
    papaya (optional) <br> \
    <br> Directions: <br> \
    1. Boil the sago until translucent.<br> \
    2. Add the coconut milk.<br> \
    3. When everything is boiling, add sugar, taro, and papaya if you desire."
  }

  if (id == "broccolipotatobites"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Broccoli Potato Bites </b><br> \
    <br>Ingredients:<br>\
    2 cup broccoli (pulsed)<br>\
    1 potatos chopped<br>\
    1/2 cup parmesan cheese<br>\
    1/4 cup breadcrumbs <br>\
    salt<br>\
    pepper<br>\
    <br> Directions: <br>\<br>\
    1. Preheat oven to 375 degrees.<br>\
    2. Steam the potatos until almost soft.<br>\
    3. Mash with fork, add broccoli, cheese, breadcrumbs, salt, and pepper.<br>\
    4. Form into bite-sized rectangles.<br>\
    5. Lay on greased baking sheet, and bake for 20 min.<br>\
    6. Serve!"
  }
  if (id == "almondflourcookies"){
    modal.getElementsByTagName("p")[0].innerHTML = "<br><b> Almond Flour Cookies </b><br> \
    Makes 16-18 cookies. <br>\
    <br>​Ingredients:<br>\
    2 cups almond flour <br>\
    1 1/2 tbsp honey <br>\
    1 tbsp light brown sugar<br>\
    1 egg<br>\
    1 1/2 tbsp olive oil or coconut oil<br>\
    <br> ​Directions: <br>\
    1. Preheat oven to 370 degrees Fahrenheit. <br>\
    2. Combine all ingredients in a bowl with hands, forming a ball. <br>\
    3. The dough should be able to stand alone as a ball, so if it is too sticky, add more almond flour. <br>\
    4. In the unlikely event that it is way to dry, you can always add about 1/2 tbsp of almond milk, coconut milk, or regular milk. <br>\
    5. On a clean, dry cutting board or counter, slightly flour the surface with almond flour (not a lot!). <br>\
    6. Roll out the dough with a rolling pin until about 1/8 inch thick (however thick the dough is at this point will be roughly how thick it is after baking). <br>\
    7. Use a cookie cutter (bowls, cups, etc. will also work in making circles) to cut your cookies.<br>\
    8. Bake for roughly 10 min in preheated oven on parchment paper. You don't have to worry about spreading them apart too far. <br>\
    9. Serve!"
    }
}
